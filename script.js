// Note: BibTeX functionality removed as paper is under review

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Handle code button click
document.getElementById('code-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // Update this URL with your GitHub repository when available
    alert('Code and data repository will be made available upon publication. Please contact the authors for early access.');
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Initialize all interactive visualizations
    initializeVisualizations();
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add hover effect to finding cards
document.querySelectorAll('.finding-card, .implication-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--primary-color');
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--border-color');
    });
});

// Print warning for console explorers
console.log('%cThe Collapse of Heterogeneity in Silicon Philosophers', 'font-size: 24px; font-weight: bold; color: #2563eb;');
console.log('%cExploring this site? Check out the full paper and code!', 'font-size: 14px; color: #64748b;');

// Interactive Data Visualizations with Vega-Lite
function initializeVisualizations() {
    // Load per-question data
    let questionsData = null;

    // Add cache-busting to ensure fresh data
    const timestamp = new Date().getTime();
    fetch(`assets/questions_data.json?t=${timestamp}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            questionsData = data;
            // Populate question selector
            populateQuestionSelector(data);
            // Render first question by default
            renderPerQuestionViz('Q0', data);
        })
        .catch(error => {
            console.error('Error loading questions data:', error);
            const select = document.getElementById('question-select');
            select.innerHTML = '<option>Error loading questions</option>';
        });

    function populateQuestionSelector(data) {
        const select = document.getElementById('question-select');
        select.innerHTML = ''; // Clear loading message

        Object.keys(data).sort((a, b) => {
            // Sort by numeric part of Q0, Q1, etc.
            const numA = parseInt(a.replace('Q', ''));
            const numB = parseInt(b.replace('Q', ''));
            return numA - numB;
        }).forEach(qKey => {
            const qData = data[qKey];
            const option = document.createElement('option');
            option.value = qKey;
            const label = `${qData.base_question}: ${qData.position}`;
            option.textContent = `${qKey}: ${label}`;
            select.appendChild(option);
        });

        // Add change handler
        select.addEventListener('change', (e) => {
            renderPerQuestionViz(e.target.value, data);
        });
    }

    function renderPerQuestionViz(questionKey, data) {
        const qData = data[questionKey];
        if (!qData) return;

        // Transform data for vertical columns
        const modelOrder = [
            'Human',
            'Claude Sonnet 4.5',
            'GPT-4o',
            'GPT-5.1',
            'Llama 3.1 8B',
            'Llama 3.1 8B (FT)',
            'Mistral 7B',
            'Qwen 3 4B'
        ];

        const vizData = [];
        const statsData = [];

        modelOrder.forEach(modelName => {
            if (qData.models[modelName]) {
                const responses = qData.models[modelName].responses;
                const validResponses = [];

                responses.forEach((response, philIdx) => {
                    // Skip NaN values
                    if (response === null || isNaN(response)) return;

                    vizData.push({
                        model: modelName,
                        philosopher: philIdx,
                        response: response
                    });
                    validResponses.push(response);
                });

                // Compute statistics for violin plot
                if (validResponses.length > 0) {
                    const mean = validResponses.reduce((a, b) => a + b, 0) / validResponses.length;
                    const variance = validResponses.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / validResponses.length;
                    const stdDev = Math.sqrt(variance);

                    statsData.push({
                        model: modelName,
                        mean: mean,
                        variance: variance,
                        stdDev: stdDev,
                        count: validResponses.length
                    });
                }
            }
        });

        // Box plot showing mean, quartiles, min/max
        const spec = {
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "title": `Response Distribution: ${qData.base_question}: ${qData.position}`,
            "width": "container",
            "height": 400,
            "layer": [
                {
                    // Box plot (quartiles, min, max)
                    "data": {"values": vizData},
                    "mark": {
                        "type": "boxplot",
                        "extent": "min-max",
                        "size": 60
                    },
                    "encoding": {
                        "x": {
                            "field": "model",
                            "type": "nominal",
                            "axis": {"title": "Source", "labelAngle": -45},
                            "sort": modelOrder
                        },
                        "y": {
                            "field": "response",
                            "type": "quantitative",
                            "axis": {"title": "Response Score", "grid": true},
                            "scale": {"domain": [0, 1]}
                        },
                        "color": {
                            "condition": {
                                "test": "datum.model === 'Human'",
                                "value": "#dc2626"
                            },
                            "value": "#2563eb"
                        }
                    }
                },
                {
                    // Mean indicator (diamond)
                    "data": {"values": statsData},
                    "mark": {
                        "type": "point",
                        "shape": "diamond",
                        "size": 150,
                        "color": "gold",
                        "filled": true
                    },
                    "encoding": {
                        "x": {
                            "field": "model",
                            "type": "nominal",
                            "sort": modelOrder
                        },
                        "y": {
                            "field": "mean",
                            "type": "quantitative"
                        },
                        "tooltip": [
                            {"field": "model", "type": "nominal", "title": "Source"},
                            {"field": "mean", "type": "quantitative", "format": ".4f", "title": "Mean"},
                            {"field": "variance", "type": "quantitative", "format": ".4f", "title": "Variance"},
                            {"field": "stdDev", "type": "quantitative", "format": ".4f", "title": "Std Dev"},
                            {"field": "count", "type": "quantitative", "title": "Sample Size"}
                        ]
                    }
                }
            ],
            "config": {
                "view": {"stroke": null}
            }
        };

        vegaEmbed('#per-question-viz', spec, {
            actions: {export: true, source: false, compiled: false, editor: false}
        });
    }


    // Visualization 1: Per-Question Variance Comparison
    const varianceSpec = {
        "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
        "title": "Per-Question Variance: Human vs. LLMs",
        "data": {"url": "assets/figure1_stats_bc.csv"},
        "width": "container",
        "height": 400,
        "mark": {
            "type": "bar",
            "tooltip": true
        },
        "encoding": {
            "x": {
                "field": "Model",
                "type": "nominal",
                "axis": {"labelAngle": -45, "title": "Model"},
                "sort": null
            },
            "y": {
                "field": "Per-Q Var",
                "type": "quantitative",
                "axis": {"title": "Per-Question Variance"},
                "scale": {"domain": [0, 0.07]}
            },
            "color": {
                "condition": {
                    "test": "datum.Model === 'Human'",
                    "value": "#dc2626"
                },
                "value": "#2563eb"
            },
            "tooltip": [
                {"field": "Model", "type": "nominal"},
                {"field": "Per-Q Var", "type": "quantitative", "format": ".4f", "title": "Variance"},
                {"field": "Var Ratio", "type": "quantitative", "format": ".2f", "title": "Ratio to Human"}
            ]
        }
    };

    vegaEmbed('#variance-viz', varianceSpec, {
        actions: {export: true, source: false, compiled: false, editor: false}
    });

    // Visualization 2: Domain-Level Heterogeneity Heatmap
    fetch('assets/domain_heterogeneity_comparison.csv')
        .then(response => response.text())
        .then(csvText => {
            // Parse CSV and transform to long format for Vega-Lite
            const lines = csvText.trim().split('\n');
            const headers = lines[0].split(',');
            const models = headers.slice(1); // Skip "Domain" column

            const data = [];
            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(',');
                const domain = values[0];
                for (let j = 1; j < values.length; j++) {
                    if (values[j] && values[j].trim() !== '') {
                        data.push({
                            "Domain": domain,
                            "Model": models[j-1],
                            "Variance": parseFloat(values[j])
                        });
                    }
                }
            }

            const heatmapSpec = {
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "title": "Variance Across Philosophical Domains",
                "data": {"values": data},
                "width": "container",
                "height": 500,
                "mark": {"type": "rect", "tooltip": true},
                "encoding": {
                    "x": {
                        "field": "Model",
                        "type": "nominal",
                        "axis": {"labelAngle": -45, "title": "Model"}
                    },
                    "y": {
                        "field": "Domain",
                        "type": "nominal",
                        "sort": {"field": "Variance", "op": "mean", "order": "ascending"},
                        "axis": {"title": "Philosophical Domain"}
                    },
                    "color": {
                        "field": "Variance",
                        "type": "quantitative",
                        "scale": {
                            "scheme": "viridis",
                            "domain": [0, 0.1]
                        },
                        "legend": {"title": "Variance"}
                    },
                    "tooltip": [
                        {"field": "Domain", "type": "nominal"},
                        {"field": "Model", "type": "nominal"},
                        {"field": "Variance", "type": "quantitative", "format": ".4f"}
                    ]
                }
            };

            vegaEmbed('#domain-viz', heatmapSpec, {
                actions: {export: true, source: false, compiled: false, editor: false}
            });
        });
}
