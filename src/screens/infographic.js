// This JavaScript file dynamically creates the entire infographic HTML structure,
// applies styles, initializes Chart.js charts, and integrates the Gemini API feature.

// Main function to create and append the infographic to the DOM
function createOpticalBindingInfographic(rootElementId = 'app-root') {
    const root = document.getElementById(rootElementId);
    if (!root) {
        console.error(`Root element with ID '${rootElementId}' not found.`);
        return;
    }

    // Define the color palette
    const brilliantBlues = {
        primary: '#00A1E4',
        secondary: '#0056A0',
        dark: '#002D56',
        lightGray: '#F2F2F2',
        mediumGray: '#BDBDBD',
        text: '#F2F2F2'
    };

    // Add Tailwind CSS and Inter font via CDN links
    const head = document.head;
    if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
        const tailwindScript = document.createElement('script');
        tailwindScript.src = 'https://cdn.tailwindcss.com';
        head.appendChild(tailwindScript);
    }
    if (!document.querySelector('script[src="https://cdn.jsdelivr.net/npm/chart.js"]')) {
        const chartjsScript = document.createElement('script');
        chartjsScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
        head.appendChild(chartjsScript);
    }
    if (!document.querySelector('link[href*="Inter"]')) {
        const interFontLink = document.createElement('link');
        interFontLink.rel = 'stylesheet';
        interFontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap';
        head.appendChild(interFontLink);
        const interFontPreconnect1 = document.createElement('link');
        interFontPreconnect1.rel = 'preconnect';
        interFontPreconnect1.href = 'https://fonts.googleapis.com';
        head.appendChild(interFontPreconnect1);
        const interFontPreconnect2 = document.createElement('link');
        interFontPreconnect2.rel = 'preconnect';
        interFontPreconnect2.href = 'https://fonts.gstatic.com';
        interFontPreconnect2.crossOrigin = 'anonymous';
        head.appendChild(interFontPreconnect2);
    }

    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
        body {
            font-family: 'Inter', sans-serif;
            background-color: #111827;
            color: #F2F2F2;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            height: 320px;
            max-height: 400px;
        }
        @media (min-width: 768px) {
            .chart-container {
                height: 350px;
            }
        }
        .kpi-number {
            font-weight: 900;
            color: ${brilliantBlues.primary};
            text-shadow: 0 0 15px rgba(0, 161, 228, 0.5);
        }
        .card {
            background-color: #1F2937;
            border: 1px solid #374151;
        }
        .flowchart-step {
            border-color: ${brilliantBlues.secondary};
            background-color: #1F2937;
        }
        .flowchart-arrow {
            color: ${brilliantBlues.primary};
        }
        .loading-spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-top: 4px solid ${brilliantBlues.primary};
            border-radius: 50%;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    head.appendChild(style);

    // Set body classes
    document.body.className = 'antialiased';

    // Create the main container div
    const container = document.createElement('div');
    container.className = 'container mx-auto p-4 md:p-8 max-w-7xl';

    // Header section
    container.innerHTML += `
        <header class="text-center my-8 md:my-16">
            <h1 class="text-4xl md:text-6xl font-black text-white uppercase tracking-wider">The Spin Revolution</h1>
            <h2 class="text-2xl md:text-4xl font-bold text-[#00A1E4]">of Optical Matter</h2>
            <p class="mt-4 max-w-3xl mx-auto text-lg text-gray-300">Exploring how light binds and rotates nanoparticles, creating the world's fastest nanomachines.</p>
        </header>
    `;

    // Main content area
    const mainContent = document.createElement('main');
    mainContent.className = 'space-y-12 md:space-y-20';

    // Introduction section
    mainContent.innerHTML += `
        <section id="introduction" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="md:col-span-1">
                <h3 class="text-3xl font-bold text-white mb-4">What is Optical Binding?</h3>
                <p class="text-gray-300 mb-4">
                    Optical binding is a phenomenon where light-induced forces organize multiple particles into self-assembled, non-contact arrays called "optical matter." Unlike simple optical trapping of a single particle, binding arises from the complex interference of light scattered between particles, creating a collective, dynamic system.
                </p>
                <p class="text-gray-300">
                    These forces are often non-reciprocal, meaning they don't follow Newton's action-reaction law. This allows light to continuously supply energy and momentum, driving the system into unique, non-equilibrium states.
                </p>
            </div>
            <div class="md:col-span-1 card rounded-lg p-6 shadow-2xl">
                 <h4 class="text-xl font-bold text-center text-white mb-4">A Timeline of Discovery</h4>
                 <div class="relative pl-6">
                    <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-[#0056A0]"></div>
                    <div class="relative mb-8">
                        <div class="absolute -left-[1.6rem] top-1 w-6 h-6 bg-[#00A1E4] rounded-full border-4 border-[#1F2937]"></div>
                        <p class="font-bold text-white">1980: Theoretical Prediction</p>
                        <p class="text-sm text-gray-400">T. Thirunamachandran first predicts the existence of laser-induced inter-particle forces.</p>
                    </div>
                    <div class="relative mb-8">
                        <div class="absolute -left-[1.6rem] top-1 w-6 h-6 bg-[#00A1E4] rounded-full border-4 border-[#1F2937]"></div>
                        <p class="font-bold text-white">1989: Experimental Proof</p>
                        <p class="text-sm text-gray-400">Burns, Fournier, & Golovchenko experimentally demonstrate optical binding with microspheres.</p>
                    </div>
                    <div class="relative">
                        <div class="absolute -left-[1.6rem] top-1 w-6 h-6 bg-[#00A1E4] rounded-full border-4 border-[#1F2937]"></div>
                        <p class="font-bold text-white">2020s: The Quantum & Rotational Era</p>
                        <p class="text-sm text-gray-400">Research advances to quantum regimes and demonstrates complex rotational control, creating "optical matter machines."</p>
                    </div>
                 </div>
            </div>
        </section>
    `;

    // Mechanisms section
    mainContent.innerHTML += `
        <section id="mechanisms" class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div class="md:col-span-1 card rounded-lg p-6 shadow-2xl">
                <h4 class="text-xl font-bold text-center text-white mb-4">Force Significance: Nano vs. Micro</h4>
                <div class="chart-container">
                    <canvas id="forceChart"></canvas>
                </div>
                <p class="text-center text-sm text-gray-400 mt-4">Optical binding forces become significantly more pronounced and effective for particles smaller than the wavelength of light, making it a key phenomenon in nanophotonics.</p>
            </div>
             <div class="md:col-span-1">
                <h3 class="text-3xl font-bold text-white mb-4">The Quantum Frontier</h3>
                <p class="text-gray-300 mb-4">
                    At the quantum level, optical binding reveals even stranger behaviors. Quantum fluctuations of light can create strong correlations between particles where classical physics would predict none. While this opens doors to new types of quantum sensing and simulation, it also presents challenges, as non-conservative forces can hinder cooling particles to their quantum ground state.
                </p>
                <div class="card rounded-lg p-6 shadow-2xl">
                     <h4 class="text-xl font-bold text-center text-white mb-4">Potential Quantum Applications</h4>
                     <div class="chart-container h-64 max-h-64">
                        <canvas id="quantumDonutChart"></canvas>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Rotation KPI section
    mainContent.innerHTML += `
        <section id="rotation-kpi" class="text-center bg-[#1F2937] rounded-lg p-8 md:p-12 shadow-2xl border border-[#374151]">
            <h3 class="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">A World Record Spin</h3>
            <p class="text-7xl md:text-9xl kpi-number my-4">>1 GHz</p>
            <p class="text-xl md:text-2xl text-gray-300">Equivalent to over <span class="font-bold text-white">60 Billion Revolutions Per Minute</span>, achieved by rotating a single silica nanoparticle in vacuum using circularly polarized light.</p>
            <p class="text-sm text-gray-500 mt-4">(Rieser et al., 2018)</p>
        </section>
    `;

    // OM Machines section
    mainContent.innerHTML += `
        <section id="om-machines">
            <div class="text-center mb-8">
                <h3 class="text-3xl font-bold text-white">Optical Matter Machines</h3>
                <p class="mt-2 max-w-3xl mx-auto text-lg text-gray-300">Recent breakthroughs allow the creation of functional nanomachines. These "OM Gears," typically hexagonal arrays of nanoparticles, convert the spin of light into mechanical work.</p>
            </div>

            <div class="flex flex-col items-center space-y-4">
                <div class="flowchart-step w-full max-w-md p-4 border-l-4 rounded-lg text-center">
                    <p class="font-bold text-white">1. Light Input</p>
                    <p class="text-sm text-gray-300">A circularly polarized laser beam illuminates the nanoparticle array (the OM Gear).</p>
                </div>
                <div class="flowchart-arrow text-4xl font-light">↓</div>
                <div class="flowchart-step w-full max-w-md p-4 border-l-4 rounded-lg text-center">
                    <p class="font-bold text-white">2. SAM to OAM Conversion</p>
                    <p class="text-sm text-gray-300">The gear's collective scattering modes convert the light's Spin Angular Momentum (SAM) into Orbital Angular Momentum (OAM), causing the gear to rotate.</p>
                </div>
                 <div class="flowchart-arrow text-4xl font-light">↓</div>
                <div class="flowchart-step w-full max-w-md p-4 border-l-4 rounded-lg text-center">
                    <p class="font-bold text-white">3. "Negative Torque" Generation</p>
                    <p class="text-sm text-gray-300">The rotating gear induces a "negative torque" on the surrounding optical field, creating an asymmetric force landscape.</p>
                </div>
                 <div class="flowchart-arrow text-4xl font-light">↓</div>
                 <div class="flowchart-step w-full max-w-md p-4 border-l-4 rounded-lg text-center">
                    <p class="font-bold text-white">4. Probe Particle Orbit</p>
                    <p class="text-sm text-gray-300">A separate "probe" particle outside the gear is driven by this field, orbiting in the opposite direction due to a Brownian ratchet mechanism.</p>
                </div>
            </div>
        </section>
    `;

    // Applications section
    mainContent.innerHTML += `
        <section id="applications">
             <div class="text-center mb-8">
                <h3 class="text-3xl font-bold text-white">Future Horizons</h3>
                <p class="mt-2 max-w-3xl mx-auto text-lg text-gray-300">The precise control offered by optical binding and rotation is paving the way for next-generation technologies.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="card rounded-lg p-6 text-center shadow-xl">
                    <div class="text-4xl mb-3 text-[#00A1E4]">🔬</div>
                    <h4 class="text-xl font-bold text-white">Precision Sensing</h4>
                    <p class="text-gray-400 mt-2">Creating hyper-sensitive sensors for force and torque, operating at the quantum limit.</p>
                </div>
                <div class="card rounded-lg p-6 text-center shadow-xl">
                    <div class="text-4xl mb-3 text-[#00A1E4]">⚙️</div>
                    <h4 class="text-xl font-bold text-white">Nanofluidics</h4>
                    <p class="text-gray-400 mt-2">Developing light-driven pumps and sorting mechanisms for manipulating components in fluidic chips.</p>
                </div>
                <div class="card rounded-lg p-6 text-center shadow-xl">
                    <div class="text-4xl mb-3 text-[#00A1E4]">⚛️</div>
                    <h4 class="text-xl font-bold text-white">Quantum Technology</h4>
                    <p class="text-gray-400 mt-2">Building programmable arrays of nanoparticles as a platform for quantum computing and simulation.</p>
                </div>
                 <div class="card rounded-lg p-6 text-center shadow-xl">
                    <div class="text-4xl mb-3 text-[#00A1E4]">🌌</div>
                    <h4 class="text-xl font-bold text-white">Fundamental Physics</h4>
                    <p class="text-gray-400 mt-2">Probing exotic phenomena like vacuum friction and quantum effects at extreme rotational speeds.</p>
                </div>
                 <div class="card rounded-lg p-6 text-center shadow-xl">
                    <div class="text-4xl mb-3 text-[#00A1E4]">🧲</div>
                    <h4 class="text-xl font-bold text-white">Multiphysics Control</h4>
                    <p class="text-gray-400 mt-2">Combining optical forces with magnetic fields to achieve even more complex, tunable manipulation.</p>
                </div>
                 <div class="card rounded-lg p-6 text-center shadow-xl">
                    <div class="text-4xl mb-3 text-[#00A1E4]">🧬</div>
                    <h4 class="text-xl font-bold text-white">Material Fabrication</h4>
                    <p class="text-gray-400 mt-2">Using light as a tool to self-assemble novel materials with unique optical and mechanical properties.</p>
                </div>
            </div>
        </section>
    `;

    // LLM Feature section
    mainContent.innerHTML += `
        <section id="llm-feature" class="card rounded-lg p-6 shadow-2xl">
            <h3 class="text-2xl font-bold text-white mb-4 text-center">Explore with Gemini ✨</h3>
            <p class="text-gray-300 mb-4 text-center">
                Enter a scientific concept related to optical binding or nanophotonics, and Gemini will provide a brief explanation or a potential research idea.
            </p>
            <div class="flex flex-col md:flex-row gap-4 mb-4">
                <input type="text" id="conceptInput" placeholder="e.g., Brownian ratchet, Quantum vacuum friction"
                       class="flex-grow p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#00A1E4]">
                <button id="generateExplanationBtn"
                        class="bg-[#00A1E4] hover:bg-[#0056A0] text-white font-bold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out flex items-center justify-center">
                    <span id="buttonText">Generate Insight ✨</span>
                    <div id="loadingSpinner" class="loading-spinner ml-2 hidden"></div>
                </button>
            </div>
            <div id="llmOutput" class="bg-gray-800 p-4 rounded-md text-gray-200 min-h-[100px] overflow-auto">
                <p class="text-gray-400">Your generated insights will appear here.</p>
            </div>
        </section>
    `;

    container.appendChild(mainContent);

    // Footer section
    container.innerHTML += `
        <footer class="text-center mt-16 pb-8">
            <p class="text-gray-500">Data synthesized from research on Optical Binding and Rotational Dynamics of Nanoparticle Assemblies.</p>
        </footer>
    `;

    root.appendChild(container);

    // Initialize Chart.js charts after DOM is loaded
    const chartDefaultOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: brilliantBlues.text,
                    font: {
                        family: "'Inter', sans-serif"
                    }
                }
            },
            tooltip: {
                callbacks: {
                    title: function(tooltipItems) {
                        const item = tooltipItems[0];
                        let label = item.chart.data.labels[item.dataIndex];
                        if (Array.isArray(label)) {
                          return label.join(' ');
                        } else {
                          return label;
                        }
                    }
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    color: brilliantBlues.mediumGray,
                    font: { family: "'Inter', sans-serif" }
                },
                grid: { color: '#374151' }
            },
            x: {
                ticks: {
                    color: brilliantBlues.mediumGray,
                    font: { family: "'Inter', sans-serif" }
                },
                grid: { display: false }
            }
        }
    };

    const forceCtx = document.getElementById('forceChart').getContext('2d');
    new Chart(forceCtx, {
        type: 'bar',
        data: {
            labels: ['Microscale Particles', 'Nanoscale Particles'],
            datasets: [{
                label: 'Relative Force Significance',
                data: [30, 95],
                backgroundColor: [brilliantBlues.secondary, brilliantBlues.primary],
                borderColor: [brilliantBlues.secondary, brilliantBlues.primary],
                borderWidth: 1
            }]
        },
        options: {
            ...chartDefaultOptions,
            indexAxis: 'y',
            plugins: {
                ...chartDefaultOptions.plugins,
                legend: { display: false }
            }
        }
    });

    const quantumData = {
        labels: ['Precision Quantum Sensing', 'Quantum Simulation', 'Fundamental Research'],
        datasets: [{
            data: [50, 30, 20],
            backgroundColor: [
                brilliantBlues.primary,
                brilliantBlues.secondary,
                '#4b5563'
            ],
            borderColor: '#1F2937',
            borderWidth: 4,
            hoverOffset: 4
        }]
    };

    const quantumCtx = document.getElementById('quantumDonutChart').getContext('2d');
    new Chart(quantumCtx, {
        type: 'doughnut',
        data: quantumData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: brilliantBlues.text,
                        font: { family: "'Inter', sans-serif" },
                        boxWidth: 20,
                        padding: 20
                    }
                },
                tooltip: {
                     callbacks: {
                        title: function(tooltipItems) {
                            const item = tooltipItems[0];
                            let label = item.chart.data.labels[item.dataIndex];
                            if (Array.isArray(label)) {
                              return label.join(' ');
                            } else {
                              return label;
                            }
                        }
                    }
                }
            },
            cutout: '60%'
        }
    });

    // Gemini API Integration
    const conceptInput = document.getElementById('conceptInput');
    const generateExplanationBtn = document.getElementById('generateExplanationBtn');
    const llmOutput = document.getElementById('llmOutput');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const buttonText = document.getElementById('buttonText');

    if (generateExplanationBtn) {
        generateExplanationBtn.addEventListener('click', async () => {
            const prompt = conceptInput.value.trim();
            if (!prompt) {
                llmOutput.innerHTML = '<p class="text-red-400">Please enter a concept to get an explanation or research idea.</p>';
                return;
            }

            llmOutput.innerHTML = '';
            buttonText.textContent = 'Generating...';
            loadingSpinner.classList.remove('hidden');
            generateExplanationBtn.disabled = true;

            try {
                let chatHistory = [];
                chatHistory.push({ role: "user", parts: [{ text: `Provide a concise explanation for "${prompt}" in the context of optical binding or nanophotonics, or suggest a novel research idea related to it. Keep it under 150 words.` }] });
                const payload = { contents: chatHistory };
                const apiKey = "";
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                const result = await response.json();

                if (result.candidates && result.candidates.length > 0 &&
                    result.candidates[0].content && result.candidates[0].content.parts &&
                    result.candidates[0].content.parts.length > 0) {
                    const text = result.candidates[0].content.parts[0].text;
                    llmOutput.innerHTML = `<p>${text}</p>`;
                } else {
                    llmOutput.innerHTML = '<p class="text-red-400">Could not generate a response. Please try again.</p>';
                }
            } catch (error) {
                console.error('Error calling Gemini API:', error);
                llmOutput.innerHTML = '<p class="text-red-400">An error occurred while fetching the response. Please check your network connection or try again later.</p>';
            } finally {
                buttonText.textContent = 'Generate Insight ✨';
                loadingSpinner.classList.add('hidden');
                generateExplanationBtn.disabled = false;
            }
        });
    }
}

// Call the function to create the infographic when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    createOpticalBindingInfographic('app-root');
});
