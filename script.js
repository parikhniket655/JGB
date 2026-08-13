// JBG Portfolio Growth Engine Hub - Interactive Script

document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // 1. GLOBAL TAB NAVIGATION
    // -------------------------------------------------------------
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            navButtons.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(`content-${tabId}`).classList.add('active');
            
            // Re-render chart if switching to calculator tab
            if (tabId === 'calculator') {
                calculateScores();
            }
        });
    });

    // -------------------------------------------------------------
    // 2. 90-DAY EXECUTION ROADMAP ACCORDION
    // -------------------------------------------------------------
    const roadmapPhases = document.querySelectorAll('.roadmap-phase');
    const progressBarFill = document.querySelector('.progress-bar-fill');
    const progressStatus = document.querySelector('.progress-status');

    roadmapPhases.forEach(phase => {
        const header = phase.querySelector('.phase-header');
        header.addEventListener('click', () => {
            roadmapPhases.forEach(p => p.classList.remove('active'));
            phase.classList.add('active');
            
            const phaseNum = phase.getAttribute('data-phase');
            let progressPct = 35;
            let statusText = 'Phase 1: Diagnose (35% Completed)';
            
            if (phaseNum === '2') {
                progressPct = 65;
                statusText = 'Phase 2: Discover (65% Completed)';
            } else if (phaseNum === '3') {
                progressPct = 100;
                statusText = 'Phase 3: Validate (100% Completed)';
            }
            
            progressBarFill.style.width = `${progressPct}%`;
            progressStatus.textContent = statusText;
        });
    });

    // -------------------------------------------------------------
    // 3. 12-SLIDE PRESENTATION DECK DATA & LOGIC
    // -------------------------------------------------------------
    const slidesData = [
        {
            title: "JBG Portfolio Growth Engine",
            subtitle: "A Capability-Driven Capital & Resource Allocation Strategy",
            presenterNotes: "Welcome, JBG leadership. Today, I'm presenting a systematic growth prioritization framework. As a diversified business group, JBG has great options but finite resources. The question isn't 'what is a good idea?' but 'how do we decide what to fund first?' This presentation outlines our core strategy engine.",
            content: `
                <div class="slide-grid-2">
                    <div class="slide-col">
                        <h3 class="slide-hero-title">Portfolio Growth Engine</h3>
                        <p class="slide-hero-sub">Capital Allocation & Synergetic Adjacencies</p>
                        <p class="slide-hero-meta">Prepared by Business Strategy Associate | August 2026</p>
                    </div>
                    <div class="slide-col">
                        <div class="slide-card-visual" style="padding: 30px; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
                            <div class="slide-metric-large">
                                <span class="num" style="color: var(--color-primary-hover); font-size: 3.5rem; line-height:1;">GPE</span>
                                <span class="label" style="margin-top:10px; font-weight:700;">Jithvar Business Group</span>
                            </div>
                            <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.4; margin-top:15px; max-width:280px;">
                                A quantitative resource-allocation strategy blueprint for sustainable Group growth.
                            </p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Strategic Context & The Core Challenge",
            subtitle: "Solving Capital & Bandwidth Constraints via Structured Funneling",
            presenterNotes: "JBG operates in software consulting, solar installation, and recruitment staffing. Each has growth paths, but trying to fund everything simultaneously dilutes capital and management focus. We need a filter that takes a longlist of ideas, screens them for strategic fit and execution difficulty, and leaves us with 3 high-impact pilots.",
            content: `
                <div style="display:flex; flex-direction:column; gap:20px; width:100%;">
                    <div class="slide-grid-2" style="flex-grow:1;">
                        <div class="slide-card-visual" style="padding: 24px;">
                            <h4>The Bottleneck: Resource Dispersion</h4>
                            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:16px; line-height:1.4;">
                                JBG footprints across Software, Solar, and HR represent high-growth vectors, but decentralized capital allocations dilute overall Group impact.
                            </p>
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                <div style="border-left: 3px solid var(--color-primary); padding-left: 12px;">
                                    <strong style="font-size: 0.9rem; color:var(--text-main);">1. Sourced Pipeline Saturation</strong>
                                    <span style="display:block; font-size:0.8rem; color: var(--text-muted); margin-top:2px;">Over 20+ opportunities compete for capital simultaneously, leading to decision paralysis.</span>
                                </div>
                                <div style="border-left: 3px solid var(--accent-gold); padding-left: 12px;">
                                    <strong style="font-size: 0.9rem; color:var(--text-main);">2. Resource & Bandwidth Limits</strong>
                                    <span style="display:block; font-size:0.8rem; color: var(--text-muted); margin-top:2px;">Strict bottlenecks in software engineering headcount, management oversight, and investable cash.</span>
                                </div>
                                <div style="border-left: 3px solid #0284c7; padding-left: 12px;">
                                    <strong style="font-size: 0.9rem; color:var(--text-main);">3. Subjective Bias in Budgeting</strong>
                                    <span style="display:block; font-size:0.8rem; color: var(--text-muted); margin-top:2px;">Historical capital allocations influenced by subjective preference rather than hard commercial metrics.</span>
                                </div>
                            </div>
                        </div>
                        <div class="slide-card-visual" style="padding: 24px;">
                            <h4>The Solution: The Growth Funnel</h4>
                            <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:16px; line-height:1.4;">
                                Establish a standardized pipeline filter that screens opportunities for strategic alignment, capability fit, and economics before scaling funding.
                            </p>
                            <div style="display: flex; flex-direction: column; gap: 16px;">
                                <div style="display: flex; gap: 12px; align-items: flex-start;">
                                    <div style="width:28px; height:28px; border-radius:50%; background:#e0f2fe; color:#0369a1; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem; flex-shrink:0; margin-top:2px;">1</div>
                                    <div>
                                        <strong style="font-size: 0.9rem; display:block;">Phase 1: Diagnose Core Health</strong>
                                        <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-top:2px;">Audit cost structures, current client margins, and developer capacity to establish baseline.</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 12px; align-items: flex-start;">
                                    <div style="width:28px; height:28px; border-radius:50%; background:#e0f2fe; color:#0369a1; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem; flex-shrink:0; margin-top:2px;">2</div>
                                    <div>
                                        <strong style="font-size: 0.9rem; display:block;">Phase 2: Scorecard Prioritization</strong>
                                        <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-top:2px;">Rank opportunities across 8 weighted market attractiveness and capability fit factors.</span>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 12px; align-items: flex-start;">
                                    <div style="width:28px; height:28px; border-radius:50%; background:#e0f2fe; color:#0369a1; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem; flex-shrink:0; margin-top:2px;">3</div>
                                    <div>
                                        <strong style="font-size: 0.9rem; display:block;">Phase 3: Validate Market Pilots</strong>
                                        <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-top:2px;">Deploy low-code B2B MVPs to test customer demand and willingness to pay.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slide-card-visual" style="padding:16px 24px; background:rgba(15,37,55,0.02); display:flex; align-items:center; gap:16px;">
                        <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; margin:0; font-weight:800; font-size:0.8rem; padding:6px 12px;">Strategic Focus</span>
                        <p style="font-size:0.85rem; margin:0; line-height:1.4; color:var(--text-muted);">
                            By filtering proposals through an objective funnel, JBG avoids capital dilution and ensures management focuses on the <strong>highest-yield initiatives first</strong>.
                        </p>
                    </div>
                </div>
            `
        },
        {
            title: "Assessing Existing Business Lines",
            subtitle: "Establishing Base Core Performance and Low-Risk Growth Adjacencies",
            presenterNotes: "Let's diagnose JBG's current operations. For JCS, we pivot from low-margin general software contracts to international IT managed services retainers. For Nature Grid, we transition from residential installation to commercial installs and high-margin O&M contracts. For Aequalis, we expand transactional hiring into recurring contract staffing.",
            content: `
                <div style="display:flex; flex-direction:column; gap:20px; width:100%;">
                    <div class="slide-grid-4" style="flex-grow:1;">
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <span class="slide-badge blue" style="margin-bottom:8px;">JCS (Technology)</span>
                                <h4 style="margin-top:6px;">IT Consulting Core</h4>
                                <p style="margin-top:6px; line-height:1.4; font-size:0.8rem; color:var(--text-muted);">
                                    Provides custom software builds. Pivots custom dev contracts to international cloud managed service retainers to secure higher margins.
                                </p>
                            </div>
                            <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; font-size:0.75rem; text-align:center;">IT Managed Services</span>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <span class="slide-badge blue" style="margin-bottom:8px;">Nature Grid (Energy)</span>
                                <h4 style="margin-top:6px;">Solar Install Core</h4>
                                <p style="margin-top:6px; line-height:1.4; font-size:0.8rem; color:var(--text-muted);">
                                    Installs residential solar arrays. Moves physical install capacity upmarket to larger C&I contracts and recurring maintenance O&M service agreements.
                                </p>
                            </div>
                            <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; font-size:0.75rem; text-align:center;">C&I Solar & O&M</span>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <span class="slide-badge blue" style="margin-bottom:8px;">Aequalis (HR)</span>
                                <h4 style="margin-top:6px;">Workforce Solutions</h4>
                                <p style="margin-top:6px; line-height:1.4; font-size:0.8rem; color:var(--text-muted);">
                                    Provides recruitment searches. Expands transactional placement into specialized tech contract staffing retainers to smooth income cycles.
                                </p>
                            </div>
                            <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; font-size:0.75rem; text-align:center;">Contract Staffing</span>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <span class="slide-badge blue" style="margin-bottom:8px;">Ventures</span>
                                <h4 style="margin-top:6px;">New Ventures</h4>
                                <p style="margin-top:6px; line-height:1.4; font-size:0.8rem; color:var(--text-muted);">
                                    Incubates emerging tech. Harvests common consulting code libraries from JCS to build and productize reusable SaaS templates and integration plug-ins.
                                </p>
                            </div>
                            <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; font-size:0.75rem; text-align:center;">Scalable SaaS IP</span>
                        </div>
                    </div>
                    <div class="slide-card-visual" style="padding:16px 24px; background:rgba(15,37,55,0.02); display:flex; align-items:center; gap:16px;">
                        <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; margin:0; font-weight:800; font-size:0.8rem; padding:6px 12px;">Strategic Alignment</span>
                        <p style="font-size:0.85rem; margin:0; line-height:1.4; color:var(--text-muted);">
                            Diagnosing each core unit establishes a solid foundation for growth, converting <strong>transactional, low-margin income</strong> into <strong>stable, predictable cash flows</strong>.
                        </p>
                    </div>
                </div>
            `
        },
        {
            title: "Strategic Lenses for Growth Sourcing",
            subtitle: "Four Strategic Vectors to Identify Opportunity Pools",
            presenterNotes: "Where do we hunt for opportunities? We look through four lenses: Markets, Customer Segments, Business Models, and Capabilities. We want to move from transactional models to subscription and retainer structures, targeting mid-market and enterprise accounts in India and Southeast Asia.",
            content: `
                <div style="display:flex; flex-direction:column; gap:20px; width:100%;">
                    <div class="slide-grid-4" style="flex-grow:1;">
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>1. Markets (Where)</h4>
                                <p style="font-size: 0.8rem; line-height: 1.4; color: var(--text-muted); margin-top: 8px;">
                                    Target geographic expansion in regions with active pipelines: Tier-1/2 Indian hubs for solar deployments, and Middle East & Southeast Asian corridors for IT managed services.
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center;">Target Geography</span>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>2. Segments (Who)</h4>
                                <p style="font-size: 0.8rem; line-height: 1.4; color: var(--text-muted); margin-top: 8px;">
                                    Pivot client portfolios upmarket. Move away from low-margin, high-churn SMB accounts to Mid-Market corporate profiles and B2B Enterprise accounts where contract values justify customized delivery.
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center;">Customer Profiles</span>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>3. Models (How)</h4>
                                <p style="font-size: 0.8rem; line-height: 1.4; color: var(--text-muted); margin-top: 8px;">
                                    Transition from transactional models (one-off custom builds, single placement fee, panel installation fee) to recurring contracts (subscriptions, monthly retainers, O&M service agreements).
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center;">Contract Structure</span>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>4. Capabilities (What)</h4>
                                <p style="font-size: 0.8rem; line-height: 1.4; color: var(--text-muted); margin-top: 8px;">
                                    Exploit cross-business synergies. Combine JCS software engineering with Aequalis client networks (to distribute HR SaaS) and Nature Grid site data (to power energy management dashboards).
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center;">Synergy IP</span>
                        </div>
                    </div>
                    <div class="slide-card-visual" style="padding:16px 24px; background:rgba(15,37,55,0.02); display:flex; align-items:center; gap:16px;">
                        <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; margin:0; font-weight:800; font-size:0.8rem; padding:6px 12px;">Growth Strategy</span>
                        <p style="font-size:0.85rem; margin:0; line-height:1.4; color:var(--text-muted);">
                            By applying these four strategic lenses, JBG systematically identifies high-probability opportunities that <strong>leverage existing group relationships and capabilities</strong>.
                        </p>
                    </div>
                </div>
            `
        },
        {
            title: "The Opportunity Prioritization Scorecard",
            subtitle: "An Objective Weighted Metric System to Allocate Capital",
            presenterNotes: "This is the heart of our recommendation. We score opportunities out of 10 on these 8 weighted factors. Attractiveness and Revenue represent 40% of the decision. Strategic Fit and Capability Fit represent 30% to ensure we leverage existing resources. Competitive Intensity and Execution speed represent 20%. Capital and Risk represent the final 10% to preserve capital.",
            content: `
                <div style="display:flex; flex-direction:column; gap:20px; width:100%;">
                    <div class="slide-grid-4" style="flex-grow:1;">
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>Market Potential (40%)</h4>
                                <p style="font-size:0.78rem; margin-top:6px; line-height:1.4; color: var(--text-muted);">
                                    • <strong>Market Attractiveness (20%):</strong> Scope addressable TAM/SAM, historical and projected CAGR, and regional macro tailwinds.<br><br>
                                    • <strong>Revenue Potential (20%):</strong> Validate customer willingness to pay recurring premiums, lifetime value (LTV), and pricing power.
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center;">Scale Drivers</span>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>Strategic Fit (30%)</h4>
                                <p style="font-size:0.78rem; margin-top:6px; line-height:1.4; color: var(--text-muted);">
                                    • <strong>JBG Capability Fit (15%):</strong> Maximize direct reuse of existing databases, code libraries, sales networks, or physical sites.<br><br>
                                    • <strong>Strategic Alignment (15%):</strong> Ensure long-term alignment with clean tech/digital vision and JBG brand equity.
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center;">Synergy Drivers</span>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>Feasibility (20%)</h4>
                                <p style="font-size:0.78rem; margin-top:6px; line-height:1.4; color: var(--text-muted);">
                                    • <strong>Competitive Intensity (10%):</strong> Map competitor density, pricing commoditization, and barriers to building differentiation.<br><br>
                                    • <strong>Ease of Execution (10%):</strong> Scope software development time-to-market, regulatory barriers, and team skills.
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center;">Execution Drivers</span>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>Risk & Capital (10%)</h4>
                                <p style="font-size:0.78rem; margin-top:6px; line-height:1.4; color: var(--text-muted);">
                                    • <strong>Capital Efficiency (5%):</strong> Minimize upfront Capex requirements and cash payback timeline.<br><br>
                                    • <strong>Risk Mitigation (5%):</strong> Hedge operational liabilities, regulatory policy changes, and vendor dependencies.
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center;">Control Drivers</span>
                        </div>
                    </div>
                    <div class="slide-card-visual" style="padding:16px 24px; background:rgba(15,37,55,0.02); display:flex; align-items:center; gap:16px;">
                        <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; margin:0; font-weight:800; font-size:0.8rem; padding:6px 12px;">Prioritizer Tool</span>
                        <p style="font-size:0.85rem; margin:0; line-height:1.4; color:var(--text-muted);">
                            We map all JBG candidate initiatives against this scorecard. You can adjust the weights and view ranked results live inside our <strong>Prioritizer Dashboard</strong>.
                        </p>
                    </div>
                </div>
            `
        },
        {
            title: "Cross-Business Synergy #1: Recruitment SaaS",
            subtitle: "Proprietary AI Product Built by JCS, Distributed by Aequalis",
            presenterNotes: "Instead of Aequalis paying monthly fees to external ATS/CRM companies, we pivot JBG into a software owner. JCS builds a proprietary recruitment automation system, Aequalis acts as the expert designer, and we sell this tool directly as a SaaS product to Aequalis's existing corporate client base, converting low-margin recruiting hours into recurring software license revenues.",
            content: `
                <div style="display:flex; flex-direction:column; gap:20px; width:100%;">
                    <div class="slide-grid-3" style="flex-grow:1;">
                        <div class="slide-card-visual" style="padding:20px;">
                            <span class="slide-badge blue" style="margin-bottom:12px;">The Synergy Pool</span>
                            <h4>Core Leverage</h4>
                            <ul style="list-style:none; padding:0; margin:8px 0 0 0; display:flex; flex-direction:column; gap:8px; font-size:0.8rem; color:var(--text-muted);">
                                <li>• <strong>Aequalis enterprise database:</strong> Immediate warm distribution to 100+ active recruitment clients.</li>
                                <li>• <strong>JCS engineering team:</strong> Internal bandwidth to build and own proprietary IP.</li>
                                <li>• <strong>Domain workflow insights:</strong> Sourcing expertise used to design the resume matching algorithms.</li>
                            </ul>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; border-color:rgba(230, 25, 60, 0.2);">
                            <span class="slide-badge highlight" style="margin-bottom:12px; background:#ffe4e6; color:#be123c;">IP Ownership</span>
                            <h4>Own vs. Buy Solution</h4>
                            <ul style="list-style:none; padding:0; margin:8px 0 0 0; display:flex; flex-direction:column; gap:8px; font-size:0.8rem; color:var(--text-muted);">
                                <li>• <strong>Own the software IP:</strong> Pivot Aequalis from a software-purchasing customer to a proprietary software owner.</li>
                                <li>• <strong>B2B SaaS product:</strong> License the screening software directly to B2B clients on monthly subscriptions.</li>
                                <li>• <strong>AI-resume screening:</strong> Vets high-volume candidate files against job listings in seconds.</li>
                            </ul>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <span class="slide-badge gold" style="margin-bottom:12px;">Economics</span>
                            <h4>Target Performance</h4>
                            <div class="slide-metric-large" style="margin:20px 0; display:flex; justify-content:center; align-items:center;">
                                <span class="num" style="color: var(--color-primary-hover); font-size: 2.5rem;">&gt; 4.0x</span>
                                <span class="label">LTV : CAC Ratio</span>
                            </div>
                            <p style="font-size:0.75rem; color:var(--text-muted); text-align:center; margin:0; line-height:1.35;">
                                High margins enabled by using Aequalis's direct customer network, bypassing digital ad spend.
                            </p>
                        </div>
                    </div>
                    <div class="slide-card-visual" style="padding:16px 24px; background:rgba(15,37,55,0.02); display:flex; align-items:center; gap:16px;">
                        <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; margin:0; font-weight:800; font-size:0.8rem; padding:6px 12px;">Strategic Impact</span>
                        <p style="font-size:0.85rem; margin:0; line-height:1.4; color:var(--text-muted);">
                            Pivoting from standard hiring fees to owning the software stack converts Jithvar into a <strong>scalable, high-margin HR technology vendor</strong>.
                        </p>
                    </div>
                </div>
            `
        },
        {
            title: "Cross-Business Synergy #2: Solar Telemetry SaaS",
            subtitle: "Unlocking Recurring Cash Flows from Nature Grid Solar Projects",
            presenterNotes: "Solar installation is a transactional hardware contract. By embedding IoT performance-tracking sensors and connecting them to a dashboard built by JCS, Nature Grid can sell long-term Operations & Maintenance agreements. This creates high-margin recurring SaaS revenues on top of hardware installations, locking in customers for years.",
            content: `
                <div style="display:flex; flex-direction:column; gap:20px; width:100%;">
                    <div class="slide-grid-3" style="flex-grow:1;">
                        <div class="slide-card-visual" style="padding:20px;">
                            <span class="slide-badge blue" style="margin-bottom:12px;">The Synergy Pool</span>
                            <h4>Core Leverage</h4>
                            <ul style="list-style:none; padding:0; margin:8px 0 0 0; display:flex; flex-direction:column; gap:8px; font-size:0.8rem; color:var(--text-muted);">
                                <li>• <strong>Physical Installations footprint:</strong> Nature Grid's physical C&I installations act as our proprietary hardware channels.</li>
                                <li>• <strong>Cloud telemetry software:</strong> JCS builds the software stack and database metrics.</li>
                                <li>• <strong>Ongoing client logs:</strong> Captures critical solar generation and carbon credits data.</li>
                            </ul>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; border-color:rgba(230, 25, 60, 0.2);">
                            <span class="slide-badge highlight" style="margin-bottom:12px; background:#ffe4e6; color:#be123c;">IP Ownership</span>
                            <h4>Own the Solar Stack</h4>
                            <ul style="list-style:none; padding:0; margin:8px 0 0 0; display:flex; flex-direction:column; gap:8px; font-size:0.8rem; color:var(--text-muted);">
                                <li>• <strong>Proprietary Energy Dashboard:</strong> Jithvar owns the software product rather than using general dashboards.</li>
                                <li>• <strong>O&M service retainer contracts:</strong> Combines digital tracking with physical O&M team contracts.</li>
                                <li>• <strong>Predictive degradation alerts:</strong> Software warns clients before energy outputs drop.</li>
                            </ul>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <span class="slide-badge gold" style="margin-bottom:12px;">Economics</span>
                            <h4>Target Performance</h4>
                            <div class="slide-metric-large" style="margin:20px 0; display:flex; justify-content:center; align-items:center;">
                                <span class="num" style="color: #0284c7; font-size: 2.5rem;">+30%</span>
                                <span class="label">Customer LTV Growth</span>
                            </div>
                            <p style="font-size:0.75rem; color:var(--text-muted); text-align:center; margin:0; line-height:1.35;">
                                Layering software diagnostics adds high-margin recurring cash flows to one-off physical solar builds.
                            </p>
                        </div>
                    </div>
                    <div class="slide-card-visual" style="padding:16px 24px; background:rgba(15,37,55,0.02); display:flex; align-items:center; gap:16px;">
                        <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; margin:0; font-weight:800; font-size:0.8rem; padding:6px 12px;">Strategic Impact</span>
                        <p style="font-size:0.85rem; margin:0; line-height:1.4; color:var(--text-muted);">
                            Converts a capital-heavy panel installation business into an <strong>integrated energy service provider</strong>, securing long-term O&M customer contracts.
                        </p>
                    </div>
                </div>
            `
        },
        {
            title: "Synergy #3: Productizing Consulting",
            subtitle: "Transitioning JCS from Custom Contracts to Scale Software",
            presenterNotes: "Consulting is hard to scale because revenue is directly tied to employee hours. But if JCS can productize its common consulting implementations—like Salesforce/Microsoft Dynamics plugins or CRM workflow integrations—we can build reusable software assets. This increases developer utilization, speeds up project delivery times, and allows us to quote fixed-price, high-margin projects.",
            content: `
                <div style="display:flex; flex-direction:column; gap:20px; width:100%;">
                    <div class="slide-grid-2" style="flex-grow:1;">
                        <div class="slide-card-visual" style="padding:24px; border-left:4px solid #64748b;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                                <h4 style="margin:0; color:#475569;">The Legacy Model (BEFORE)</h4>
                                <span class="slide-badge" style="background:#e2e8f0; color:#475569;">20% Margin</span>
                            </div>
                            <p style="font-size:0.85rem; line-height:1.5; color:var(--text-muted); margin-bottom:12px;">
                                <strong>Tailored Services ("Custom Tailor"):</strong> Every client project requires unique, from-scratch software builds, locking developer resources.
                            </p>
                            <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; font-size:0.8rem; color:var(--text-muted);">
                                <li>• Billable hours directly limit revenue scalability and growth speed.</li>
                                <li>• Long sales cycles and custom scoping delay project kickoffs.</li>
                                <li>• Higher delivery risk due to custom code maintenance liabilities.</li>
                            </ul>
                        </div>
                        <div class="slide-card-visual" style="padding:24px; border-left:4px solid var(--success-color); border-color:rgba(22,163,74,0.3);">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                                <h4 style="margin:0; color:var(--success-color);">The Productized Strategy (AFTER)</h4>
                                <span class="slide-badge highlight" style="background:#dcfce7; color:#16a34a;">45%+ Margin</span>
                            </div>
                            <p style="font-size:0.85rem; line-height:1.5; color:var(--text-muted); margin-bottom:12px;">
                                <strong>Modular Software Assets ("Ready-to-Wear"):</strong> Build proprietary, reusable integration templates (Salesforce, CRM, APIs) owned by Jithvar.
                            </p>
                            <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; font-size:0.8rem; color:var(--text-muted);">
                                <li>• Decouples group revenue from engineering headcount limitations.</li>
                                <li>• Accelerated time-to-value for B2B clients using standardized builds.</li>
                                <li>• Converts low-margin services into high-margin proprietary software licensing.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="slide-card-visual" style="padding:16px 24px; background:rgba(15,37,55,0.02); display:flex; align-items:center; gap:16px;">
                        <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; margin:0; font-weight:800; font-size:0.8rem; padding:6px 12px;">Strategic Impact</span>
                        <p style="font-size:0.85rem; margin:0; line-height:1.4; color:var(--text-muted);">
                            Transitioning only 30% of JCS resources to template-based delivery yields an estimated <strong>15% increase in bottom-line EBITDA</strong> within the first year of integration.
                        </p>
                    </div>
                </div>
            `
        },
        {
            title: "The Investment Research Agenda",
            subtitle: "Five Strategic Intelligence Buckets to Conduct Due Diligence",
            presenterNotes: "Before committing significant capital to any opportunity, we must execute a structured research agenda. This reduces risk. We divide research into 5 buckets: Market, Customer, Competitor, JBG Capability, and Economics. This ensures we don't fund projects that look good on slides but fail in the field.",
            content: `
                <div style="display:flex; flex-direction:column; gap:20px; width:100%;">
                    <div class="slide-grid-5" style="flex-grow:1;">
                        <div class="slide-card-visual" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>1. Market</h4>
                                <p style="font-size: 0.75rem; line-height: 1.4; color: var(--text-muted); margin-top: 8px;">
                                    <strong>Focus:</strong> Validate addressable TAM/SAM, segment CAGRs, and regional policy trends (e.g. net-metering laws).<br><br>
                                    <strong>Gate:</strong> TAM > $500M; segment CAGR > 15%.
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center; font-size:0.7rem;">Size Gate</span>
                        </div>
                        <div class="slide-card-visual" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>2. Customer</h4>
                                <p style="font-size: 0.75rem; line-height: 1.4; color: var(--text-muted); margin-top: 8px;">
                                    <strong>Focus:</strong> Run value-in-use validation and budget willingness to pay to map customer pain points.<br><br>
                                    <strong>Gate:</strong> Complete 30+ discovery interviews.
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center; font-size:0.7rem;">Discovery</span>
                        </div>
                        <div class="slide-card-visual" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>3. Competitor</h4>
                                <p style="font-size: 0.75rem; line-height: 1.4; color: var(--text-muted); margin-top: 8px;">
                                    <strong>Focus:</strong> Map competitor pricing models, features, and market share density to identify gaps.<br><br>
                                    <strong>Gate:</strong> Clear JBG differentiation moat defined.
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center; font-size:0.7rem;">Market Moat</span>
                        </div>
                        <div class="slide-card-visual" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>4. Capability</h4>
                                <p style="font-size: 0.75rem; line-height: 1.4; color: var(--text-muted); margin-top: 8px;">
                                    <strong>Focus:</strong> Audit developer bandwidth, sales experience, and hiring timelines for new ventures.<br><br>
                                    <strong>Gate:</strong> Core team workload capped < 85%.
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center; font-size:0.7rem;">Feasibility</span>
                        </div>
                        <div class="slide-card-visual" style="padding:16px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <h4>5. Economics</h4>
                                <p style="font-size: 0.75rem; line-height: 1.4; color: var(--text-muted); margin-top: 8px;">
                                    <strong>Focus:</strong> Project LTV, CAC, payback cycles, and initial working capital/Capex demands.<br><br>
                                    <strong>Gate:</strong> LTV:CAC > 3.0x; Payback < 12 months.
                                </p>
                            </div>
                            <span class="slide-badge gold" style="margin-top:12px; text-align:center; font-size:0.7rem;">Finance Gate</span>
                        </div>
                    </div>
                    <div class="slide-card-visual" style="padding:16px 24px; background:rgba(15,37,55,0.02); display:flex; align-items:center; gap:16px;">
                        <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; margin:0; font-weight:800; font-size:0.8rem; padding:6px 12px;">Research Agenda</span>
                        <p style="font-size:0.85rem; margin:0; line-height:1.4; color:var(--text-muted);">
                            Each gate acts as a hard filter. Ideas failing any validation threshold are killed early to <strong>preserve capital and operational resources</strong>.
                        </p>
                    </div>
                </div>
            `
        },
        {
            title: "Digital Marketing & Sales Enablement",
            subtitle: "Unified B2B Demand Generation and Lead Allocation",
            presenterNotes: "How do we generate sales? Instead of cold calling, we propose a B2B inbound strategy. We build online ROI tools—like a solar savings calculator—and publish high-quality content to drive leads. Then, we cross-train our sales reps. For example, Aequalis reps can spot opportunities to pitch JCS services, and JCS reps can identify recruitment staffing leads.",
            content: `
                <div style="display:flex; flex-direction:column; gap:20px; width:100%;">
                    <div class="slide-grid-2" style="flex-grow:1;">
                        <div class="slide-card-visual" style="padding:24px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                                <h4 style="margin:0; color:#0f2537;">Inbound Demand Generation (Marketing Pull)</h4>
                                <span class="slide-badge gold">Lead Generation</span>
                            </div>
                            <p style="font-size:0.85rem; line-height:1.5; color:var(--text-muted); margin-bottom:12px;">
                                Build high-authority, organic customer acquisition funnels that attract corporate decision makers:
                            </p>
                            <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; font-size:0.8rem; color:var(--text-muted);">
                                <li>• <strong>Authority Whitepapers:</strong> Publish research reports detailing solar paybacks and recruiting analytics.</li>
                                <li>• <strong>Online Estimators:</strong> Launch public ROI calculators (e.g. Solar Savings Dashboard) to generate inbound leads.</li>
                                <li>• <strong>CRM Lead Scoring:</strong> Deploy automated workflows to qualify and score leads before routing to sales agents.</li>
                            </ul>
                        </div>
                        <div class="slide-card-visual" style="padding:24px;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                                <h4 style="margin:0; color:#0f2537;">Unified B2B Sales Playbook (Sales Push)</h4>
                                <span class="slide-badge gold">Cross-Selling</span>
                            </div>
                            <p style="font-size:0.85rem; line-height:1.5; color:var(--text-muted); margin-bottom:12px;">
                                Maximize direct sales coverage and encourage account sharing across different business units:
                            </p>
                            <ul style="list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:8px; font-size:0.8rem; color:var(--text-muted);">
                                <li>• <strong>Cross-BU Training:</strong> Educate IT sales teams and HR recruitment reps on the full JBG portfolio catalog.</li>
                                <li>• <strong>Lead Spotting Audits:</strong> Recruiters spot IT developer capacity gaps; IT consultants identify recruiter bottlenecks.</li>
                                <li>• <strong>Shared Commissions:</strong> Unify client referral incentives to reward cross-selling success.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="slide-card-visual" style="padding:16px 24px; background:rgba(15,37,55,0.02); display:flex; align-items:center; gap:16px;">
                        <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; margin:0; font-weight:800; font-size:0.8rem; padding:6px 12px;">Sales Synergy</span>
                        <p style="font-size:0.85rem; margin:0; line-height:1.4; color:var(--text-muted);">
                            Unifying client onboarding across units ensures that a new solar C&I customer can be cross-pitched <strong>IT consulting integrations</strong> and <strong>tech contract staffing retainers</strong>.
                        </p>
                    </div>
                </div>
            `
        },
        {
            title: "First 90 Days Execution Timeline",
            subtitle: "Phased Implementation Schedule from Diagnostics to Pilot Validation",
            presenterNotes: "This 90-day plan outlines exactly what we do next. It ensures we don't spend months theorizing, but instead move rapidly to validate our core assumptions. Phase 1 is Diagnose, Phase 2 is Discover and prioritize, Phase 3 is Validate with low-cost MVPs.",
            content: `
                <div style="display:flex; flex-direction:column; gap:20px; width:100%;">
                    <div class="slide-grid-3" style="flex-grow:1;">
                        <div class="slide-card-visual" style="border-top: 4px solid var(--color-primary); padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <span class="slide-badge highlight" style="margin-top:0; margin-bottom: 8px;">Days 1–30</span>
                                <h4 style="margin-bottom:6px;">Phase 1: Diagnose</h4>
                                <p style="font-size:0.8rem; line-height:1.4; color: var(--text-muted);">
                                    • <strong>Operational Audit:</strong> Review margin profiles, revenue concentration risks, and client dependencies across JCS, Nature Grid, and Aequalis.<br><br>
                                    • <strong>System Baseline:</strong> Deploy the Group Business Health Dashboard to monitor cash conversion cycles.<br><br>
                                    • <strong>Bandwidth check:</strong> Audit developer workloads and capacity.
                                </p>
                            </div>
                            <span class="slide-badge" style="margin-top:12px; text-align:center;">Operational Audit</span>
                        </div>
                        <div class="slide-card-visual" style="border-top: 4px solid var(--accent-gold); padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <span class="slide-badge highlight" style="margin-top:0; margin-bottom: 8px;">Days 31–60</span>
                                <h4 style="margin-bottom:6px;">Phase 2: Discover</h4>
                                <p style="font-size:0.8rem; line-height:1.4; color: var(--text-muted);">
                                    • <strong>Idea Sourcing:</strong> Gather growth proposals from all business units into a central repository.<br><br>
                                    • <strong>Matrix Scoring:</strong> Run opportunities through the 8-factor prioritization scorecard.<br><br>
                                    • <strong>Portfolio Selection:</strong> Pick the top 3 synergetic pilots for development.
                                </p>
                            </div>
                            <span class="slide-badge" style="margin-top:12px; text-align:center;">Pipeline Prioritizer</span>
                        </div>
                        <div class="slide-card-visual" style="border-top: 4px solid #0284c7; padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div>
                                <span class="slide-badge highlight" style="margin-top:0; margin-bottom: 8px;">Days 61–90</span>
                                <h4 style="margin-bottom:6px;">Phase 3: Validate</h4>
                                <p style="font-size:0.8rem; line-height:1.4; color: var(--text-muted);">
                                    • <strong>Low-Code Prototyping:</strong> Launch mockups and B2B landing pages to test interest.<br><br>
                                    • <strong>Customer Validation:</strong> Conduct 30+ discovery interviews with target buyers.<br><br>
                                    • <strong>Pre-Sales:</strong> Secure early letter-of-intent (LOI) signings from warm trial accounts.
                                </p>
                            </div>
                            <span class="slide-badge" style="margin-top:12px; text-align:center;">Market Verification</span>
                        </div>
                    </div>
                    <div class="slide-card-visual" style="padding:16px 24px; background:rgba(15,37,55,0.02); display:flex; align-items:center; gap:16px;">
                        <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; margin:0; font-weight:800; font-size:0.8rem; padding:6px 12px;">Roadmap Milestones</span>
                        <p style="font-size:0.85rem; margin:0; line-height:1.4; color:var(--text-muted);">
                            Execution is staged to protect cash reserves. We validate <strong>demand and client pricing</strong> before committing engineering assets or scaling dev hiring.
                        </p>
                    </div>
                </div>
            `
        },
        {
            title: "Governance & Success Metrics",
            subtitle: "Three Levels of KPI Tracking to Ensure Capital Discipline",
            presenterNotes: "We must measure success using a hierarchy of KPIs. Portfolio-level metrics track revenue and ROIC to ensure group health. Opportunity-level metrics track CAC and payback periods to validate market demand. Most importantly, Innovation-level metrics track the rate of projects killed early. Killing 70% of ideas early is a sign of good strategy—it protects our cash and keeps us focused.",
            content: `
                <div style="display:flex; flex-direction:column; gap:20px; width:100%;">
                    <div class="slide-grid-3" style="flex-grow:1;">
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div class="slide-metric-large">
                                <span class="num">ROIC</span>
                                <span class="label">Group Health</span>
                            </div>
                            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px; line-height: 1.4; flex-grow:1;">
                                • <strong>Revenue growth %:</strong> Target sustainable portfolio growth.<br><br>
                                • <strong>EBITDA margin expansion:</strong> Monitor unit margins.<br><br>
                                • <strong>ROIC:</strong> Maximize group return on invested capital.
                            </p>
                            <span class="slide-badge" style="margin-top:12px; text-align:center;">Portfolio Gate</span>
                        </div>
                        <div class="slide-card-visual" style="padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div class="slide-metric-large">
                                <span class="num">&gt; 3.0x</span>
                                <span class="label">LTV : CAC</span>
                            </div>
                            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px; line-height: 1.4; flex-grow:1;">
                                • <strong>LTV:CAC ratio:</strong> Enforce unit economic viability standards.<br><br>
                                • <strong>Payback cycle:</strong> Target cash payback in &lt; 12 months.<br><br>
                                • <strong>Churn Rate:</strong> Monitor subscription cancellations.
                            </p>
                            <span class="slide-badge" style="margin-top:12px; text-align:center;">Commercial Gate</span>
                        </div>
                        <div class="slide-card-visual" style="border-color: rgba(230, 25, 60, 0.3); background: rgba(230, 25, 60, 0.02); padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                            <div class="slide-metric-large">
                                <span class="num" style="color: var(--color-primary-hover);">&gt; 70%</span>
                                <span class="label">Early-Killed Ideas</span>
                            </div>
                            <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px; line-height: 1.4; flex-grow:1;">
                                • <strong>Validation velocity:</strong> Track time to terminate unviable pilots.<br><br>
                                • <strong>Fail-fast rate:</strong> Terminate &gt; 70% of ideas at research gates to preserve capital.
                            </p>
                            <span class="slide-badge highlight" style="margin-top:12px; text-align:center;">Governance Gate</span>
                        </div>
                    </div>
                    <div class="slide-card-visual" style="padding:16px 24px; background:rgba(15,37,55,0.02); display:flex; align-items:center; gap:16px;">
                        <span class="slide-badge highlight" style="background:#e0f2fe; color:#0369a1; margin:0; font-weight:800; font-size:0.8rem; padding:6px 12px;">Corporate Discipline</span>
                        <p style="font-size:0.85rem; margin:0; line-height:1.4; color:var(--text-muted);">
                            Enforcing strict governance ensures that JBG is dynamic yet disciplined, <strong>funding winners</strong> and <strong>stopping losers</strong> before capital exhaustion.
                        </p>
                    </div>
                </div>
            `
        }
    ];let currentSlideIndex = 0;

    const activeSlideContainer = document.getElementById('active-slide-container');
    const slideNumIndicator = document.getElementById('slide-num-indicator');
    const presenterNotesText = document.getElementById('presenter-notes-text');
    const slideNavList = document.getElementById('slide-nav-list');
    const btnPrevSlide = document.getElementById('btn-prev-slide');
    const btnNextSlide = document.getElementById('btn-next-slide');

    // Populate Slide Sidebar Navigation
    function initSlideNav() {
        slideNavList.innerHTML = '';
        slidesData.forEach((slide, idx) => {
            const li = document.createElement('li');
            li.className = `slide-list-item ${idx === currentSlideIndex ? 'active' : ''}`;
            li.textContent = `${idx + 1}. ${slide.title}`;
            li.addEventListener('click', () => {
                currentSlideIndex = idx;
                renderSlide();
            });
            slideNavList.appendChild(li);
        });
    }

    // Render active slide
    function renderSlide() {
        const slide = slidesData[currentSlideIndex];
        
        activeSlideContainer.innerHTML = `
            <div class="slide-header">
                <div>
                    <h2>${slide.title}</h2>
                    <div class="slide-subtitle">${slide.subtitle}</div>
                </div>
                <div class="slide-header-logo" style="display:flex; align-items:center; opacity:0.9;">
                    <img src="jithvar_logo.png" alt="Jithvar Logo" style="height: 24px; width: auto; display: block;">
                </div>
            </div>
            <div class="slide-body">
                ${slide.content}
            </div>
            <div class="slide-footer">
                <span>Jithvar Business Group Strategy Deck</span>
                <span>Confidential</span>
                <span>Slide ${currentSlideIndex + 1} of ${slidesData.length}</span>
            </div>
        `;
        
        // Update Indicator
        slideNumIndicator.textContent = `Slide ${currentSlideIndex + 1} of ${slidesData.length}`;
        
        // Update Presenter Notes
        presenterNotesText.innerHTML = slide.presenterNotes;
        
        // Update Sidebar Active state
        const items = slideNavList.querySelectorAll('.slide-list-item');
        items.forEach((item, idx) => {
            if (idx === currentSlideIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Enable/Disable buttons
        btnPrevSlide.disabled = currentSlideIndex === 0;
        btnNextSlide.disabled = currentSlideIndex === slidesData.length - 1;
    }

    // Prev/Next handlers
    btnPrevSlide.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            renderSlide();
        }
    });

    btnNextSlide.addEventListener('click', () => {
        if (currentSlideIndex < slidesData.length - 1) {
            currentSlideIndex++;
            renderSlide();
        }
    });

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        // Only trigger arrow navigation if presentation tab is active
        const presentationTab = document.getElementById('content-presentation');
        if (presentationTab.classList.contains('active')) {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                e.preventDefault();
                if (currentSlideIndex < slidesData.length - 1) {
                    currentSlideIndex++;
                    renderSlide();
                }
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                if (currentSlideIndex > 0) {
                    currentSlideIndex--;
                    renderSlide();
                }
            }
        }
    });

    // Initialize slides
    initSlideNav();
    renderSlide();

    // -------------------------------------------------------------
    // 4. INTERACTIVE PRIORITIZATION SCORECARD CALCULATOR
    // -------------------------------------------------------------
    // Initial growth opportunities
    let opportunities = [
        {
            id: 1,
            name: "Recruitment Automation SaaS (HR Tech)",
            market: 8,
            revenue: 9,
            capability: 8,
            strategic: 9,
            comp: 6,
            execution: 7,
            capital: 9,
            risk: 7,
            isCustom: false,
            type: "Growth"
        },
        {
            id: 2,
            name: "Solar Telemetry & Predictive O&M SaaS",
            market: 7,
            revenue: 8,
            capability: 7,
            strategic: 8,
            comp: 6,
            execution: 8,
            capital: 8,
            risk: 7,
            isCustom: false,
            type: "Growth"
        },
        {
            id: 3,
            name: "Commercial & Industrial (C&I) Solar",
            market: 7,
            revenue: 7,
            capability: 9,
            strategic: 8,
            comp: 5,
            execution: 8,
            capital: 4,
            risk: 7,
            isCustom: false,
            type: "Core"
        },
        {
            id: 4,
            name: "IT Managed Services Retainers (JCS)",
            market: 7,
            revenue: 8,
            capability: 9,
            strategic: 7,
            comp: 5,
            execution: 8,
            capital: 8,
            risk: 8,
            isCustom: false,
            type: "Core"
        },
        {
            id: 5,
            name: "Consulting Solutions Productization",
            market: 6,
            revenue: 7,
            capability: 8,
            strategic: 7,
            comp: 6,
            execution: 7,
            capital: 8,
            risk: 8,
            isCustom: false,
            type: "Growth"
        }
    ];

    // Factors and inputs
    const weightInputs = {
        market: document.getElementById('w-market'),
        revenue: document.getElementById('w-revenue'),
        capability: document.getElementById('w-capability'),
        strategic: document.getElementById('w-strategic'),
        comp: document.getElementById('w-comp'),
        execution: document.getElementById('w-execution'),
        capital: document.getElementById('w-capital'),
        risk: document.getElementById('w-risk')
    };

    const weightTotalStatus = document.getElementById('weight-total-status');
    const opportunitiesTableBody = document.querySelector('#opportunities-table tbody');
    const newOppNameInput = document.getElementById('new-opp-name');
    const btnAddOpp = document.getElementById('btn-add-opp');

    // Run calculation
    function calculateScores() {
        // 1. Fetch weights
        const weights = {};
        let totalWeight = 0;
        
        for (const key in weightInputs) {
            const val = parseFloat(weightInputs[key].value) || 0;
            weights[key] = val / 100;
            totalWeight += val;
        }

        // 2. Validate weight sum (must equal 100%)
        if (totalWeight === 100) {
            weightTotalStatus.textContent = "Total: 100% (Valid)";
            weightTotalStatus.className = "weight-total-badge valid";
        } else {
            weightTotalStatus.textContent = `Total: ${totalWeight}% (Must equal 100%)`;
            weightTotalStatus.className = "weight-total-badge invalid";
        }

        // 3. Calculate Opportunity Score for each row
        opportunities.forEach(opp => {
            let score = 0;
            score += opp.market * (weights.market || 0.20);
            score += opp.revenue * (weights.revenue || 0.20);
            score += opp.capability * (weights.capability || 0.15);
            score += opp.strategic * (weights.strategic || 0.15);
            score += opp.comp * (weights.comp || 0.10);
            score += opp.execution * (weights.execution || 0.10);
            score += opp.capital * (weights.capital || 0.05);
            score += opp.risk * (weights.risk || 0.05);
            opp.totalScore = parseFloat(score.toFixed(2));
        });

        // 4. Sort opportunities by score descending
        opportunities.sort((a, b) => b.totalScore - a.totalScore);

        // 5. Populate Table
        renderOpportunitiesTable();
        
        // 6. Draw Chart
        renderBarChart();
    }

    // Render opportunities scorecard rows
    function renderOpportunitiesTable() {
        opportunitiesTableBody.innerHTML = '';
        
        opportunities.forEach(opp => {
            const tr = document.createElement('tr');
            
            // Generate raw HTML for scores editable fields
            tr.innerHTML = `
                <td>
                    <strong>${opp.name}</strong>
                    ${!opp.isCustom ? `<button class="btn-info" data-opp-id="${opp.id}" title="View Sources & Rationale"><svg class="icon-info" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg></button>` : ''}
                </td>
                <td><input type="number" min="1" max="10" value="${opp.market}" class="score-input" data-opp-id="${opp.id}" data-factor="market"></td>
                <td><input type="number" min="1" max="10" value="${opp.revenue}" class="score-input" data-opp-id="${opp.id}" data-factor="revenue"></td>
                <td><input type="number" min="1" max="10" value="${opp.capability}" class="score-input" data-opp-id="${opp.id}" data-factor="capability"></td>
                <td><input type="number" min="1" max="10" value="${opp.strategic}" class="score-input" data-opp-id="${opp.id}" data-factor="strategic"></td>
                <td><input type="number" min="1" max="10" value="${opp.comp}" class="score-input" data-opp-id="${opp.id}" data-factor="comp"></td>
                <td><input type="number" min="1" max="10" value="${opp.execution}" class="score-input" data-opp-id="${opp.id}" data-factor="execution"></td>
                <td><input type="number" min="1" max="10" value="${opp.capital}" class="score-input" data-opp-id="${opp.id}" data-factor="capital"></td>
                <td><input type="number" min="1" max="10" value="${opp.risk}" class="score-input" data-opp-id="${opp.id}" data-factor="risk"></td>
                <td class="col-score">${opp.totalScore}</td>
                <td>
                    <span class="slide-badge ${opp.type === 'Core' ? 'blue' : 'gold'}" style="margin: 0; font-size: 0.75rem; padding: 4px 8px; display: inline-block;">${opp.type}</span>
                </td>
                <td class="no-print">
                    ${opp.isCustom ? `<button class="btn-delete" data-opp-id="${opp.id}"><svg class="icon-delete" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>` : `<span style="color:var(--text-muted);font-size:0.75rem;">—</span>`}
                </td>
            `;
            opportunitiesTableBody.appendChild(tr);
        });

        // Attach listeners to editable score inputs
        const scoreInputs = opportunitiesTableBody.querySelectorAll('.score-input');
        scoreInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                const oppId = parseInt(input.getAttribute('data-opp-id'));
                const factor = input.getAttribute('data-factor');
                const val = Math.max(1, Math.min(10, parseInt(e.target.value) || 5));
                
                // Update opportunity raw score
                const opp = opportunities.find(o => o.id === oppId);
                if (opp) {
                    opp[factor] = val;
                    calculateScores();
                }
            });
        });

        // Attach listeners to delete button for custom opportunities
        const deleteButtons = opportunitiesTableBody.querySelectorAll('.btn-delete');
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const oppId = parseInt(btn.getAttribute('data-opp-id'));
                opportunities = opportunities.filter(o => o.id !== oppId);
                calculateScores();
            });
        });

        // Attach listeners to info buttons
        const infoButtons = opportunitiesTableBody.querySelectorAll('.btn-info');
        infoButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const oppId = parseInt(btn.getAttribute('data-opp-id'));
                showSourcesModal(oppId);
            });
        });
    }

    // Add new opportunity
    btnAddOpp.addEventListener('click', () => {
        const name = newOppNameInput.value.trim();
        if (!name) return;
        
        const typeSelect = document.getElementById('new-opp-type');
        const type = typeSelect ? typeSelect.value : 'Growth';
        
        const newOpp = {
            id: Date.now(),
            name: name,
            market: 5,
            revenue: 5,
            capability: 5,
            strategic: 5,
            comp: 5,
            execution: 5,
            capital: 5,
            risk: 5,
            isCustom: true,
            type: type
        };
        
        opportunities.push(newOpp);
        newOppNameInput.value = '';
        calculateScores();
    });

    // Listen to weight configuration updates
    for (const key in weightInputs) {
        weightInputs[key].addEventListener('change', calculateScores);
    }

    // -------------------------------------------------------------
    // 5. RENDER DYNAMIC SVG OPPORTUNITY RANKING CHART
    // -------------------------------------------------------------
    const barChartContainer = document.getElementById('bar-chart-container');

    function renderBarChart() {
        const width = barChartContainer.clientWidth || 800;
        const height = opportunities.length * 45 + 50;
        const margin = { top: 20, right: 120, bottom: 30, left: 240 };
        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom;

        let svgHtml = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" style="font-family: var(--font-body)">`;
        
        // Background Grid Lines (Vertical ticks for score 1-10)
        for (let i = 2; i <= 10; i += 2) {
            const x = margin.left + (i / 10) * chartWidth;
            svgHtml += `
                <line x1="${x}" y1="${margin.top}" x2="${x}" y2="${margin.top + chartHeight}" stroke="rgba(255,255,255,0.05)" stroke-width="1" />
                <text x="${x}" y="${margin.top + chartHeight + 20}" fill="var(--text-muted)" font-size="10" text-anchor="middle">${i}</text>
            `;
        }

        // Draw Bars
        opportunities.forEach((opp, idx) => {
            const barHeight = 24;
            const y = margin.top + idx * 45;
            const barWidth = (opp.totalScore / 10) * chartWidth;
            
            // Color mapping based on score rank
            let barColor = 'url(#grad-accent)';
            if (idx === 0) barColor = 'url(#grad-crimson)'; // Primary
            else if (idx === 1) barColor = 'url(#grad-blue)';   // Secondary
            
            svgHtml += `
                <!-- Opportunity Name Label -->
                <text x="${margin.left - 15}" y="${y + 16}" fill="var(--text-main)" font-size="11" font-weight="600" text-anchor="end" dominant-baseline="middle">
                    ${opp.name.length > 30 ? opp.name.substring(0, 27) + '...' : opp.name}
                </text>
                
                <!-- Bar Container Background -->
                <rect x="${margin.left}" y="${y}" width="${chartWidth}" height="${barHeight}" fill="rgba(255,255,255,0.02)" rx="4" />
                
                <!-- Filled Score Bar -->
                <rect x="${margin.left}" y="${y}" width="${barWidth}" height="${barHeight}" fill="${barColor}" rx="4" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.2))" />
                
                <!-- Score Label inside/outside Bar -->
                <text x="${margin.left + barWidth + 10}" y="${y + 16}" fill="white" font-size="12" font-weight="800" dominant-baseline="middle">
                    ${opp.totalScore.toFixed(2)}
                </text>
            `;
        });

        // Add Gradients Definitions
        svgHtml += `
            <defs>
                <linearGradient id="grad-crimson" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#c8102e" />
                    <stop offset="100%" stop-color="#ff3b5c" />
                </linearGradient>
                <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#0066cc" />
                    <stop offset="100%" stop-color="#00b0ff" />
                </linearGradient>
                <linearGradient id="grad-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#3a4750" />
                    <stop offset="100%" stop-color="#9ba4b4" />
                </linearGradient>
            </defs>
        `;

        svgHtml += `</svg>`;
        barChartContainer.innerHTML = svgHtml;
    }

    // Listen to resize events for chart resizing
    window.addEventListener('resize', renderBarChart);

    // -------------------------------------------------------------
    // 6. SCORECARD RATIONALE DATABASE & POPUP MODAL
    // -------------------------------------------------------------
    const opportunitiesRationale = {
        1: { // Recruitment Automation SaaS
            description: "High-growth vertical SaaS initiative leveraging Aequalis Global recruiting expertise and JCS software resources to build automated screening software.",
            factors: [
                { name: "Market Attractiveness (8/10)", desc: "Global HR Tech market valued at $32.58B in 2025; growing at 8.6% CAGR (Grand View Research). Massive B2B enterprise market." },
                { name: "Revenue Potential (9/10)", desc: "Asset-light subscription model (75%-80% gross margins). Secure recurring B2B seat contract flows." },
                { name: "JBG Capability Fit (8/10)", desc: "Pair JCS developers with Aequalis industry networks to build and instantly distribute the software." },
                { name: "Strategic Fit (9/10)", desc: "High valuation multiplier (SaaS multiples range from 6x-12x ARR). Fits JBG's digital platform push." },
                { name: "Competition (6/10)", desc: "Moderate-to-high. Moated by building hyper-focused recruiting tools tailored for Aequalis target verticals (manufacturing/IT)." },
                { name: "Execution (7/10)", desc: "Fast MVP timeline (<6 months) using agile JCS resources and Aequalis design advice." },
                { name: "Capital Efficiency (9/10)", desc: "Zero inventory or hardware Capex. High cash conversion velocity." },
                { name: "Risk Mitigation (7/10)", desc: "Standard software liabilities. Regulated data security (GDPR/DPD) requires proper server compliance." }
            ],
            sources: [
                "Grand View Research: HR Technology Market Size & Share Report, 2025-2030",
                "McKinsey & Co: SaaS Capital Allocation & Valuation Multiples Guide, 2024",
                "Aequalis Global: Internal Recruiter Sourcing Workflow Case Study"
            ]
        },
        2: { // Solar Telemetry SaaS
            description: "IoT telemetry dashboard embedded in Nature Grid solar installations. Allows real-time energy analytics and predictive maintenance billing.",
            factors: [
                { name: "Market Attractiveness (7/10)", desc: "Solar energy management IoT software market is expanding at 14.2% CAGR (Statista 2025)." },
                { name: "Revenue Potential (8/10)", desc: "Transforms hardware install buyers into long-term operations & maintenance (O&M) subscribers ($500/mo retainer)." },
                { name: "JBG Capability Fit (7/10)", desc: "Leverage Nature Grid site contracts; JCS builds the software dashboard. Requires hiring one systems IoT engineer." },
                { name: "Strategic Fit (8/10)", desc: "Deepens corporate ESG relationship. Decouples clean energy segment from purely physical install cycles." },
                { name: "Competition (6/10)", desc: "Competitive but early-stage. Moated by embedding tracking software directly into Nature Grid equipment on site." },
                { name: "Execution (8/10)", desc: "High development feasibility. Straightforward telemetry protocols." },
                { name: "Capital Efficiency (8/10)", desc: "Software layer is asset-light; sensors add minor unit hardware Capex." },
                { name: "Risk Mitigation (7/10)", desc: "Mainly operational and connectivity risk. Hedges against panel warranty claims through early alerts." }
            ],
            sources: [
                "BloombergNEF: Solar Asset Management and O&M Market Outlook, 2025",
                "Statista: Industrial IoT (IIoT) Energy Monitoring Growth Forecast, 2026",
                "Nature Grid: C&I Client Telemetry and Degradation Reports"
            ]
        },
        3: { // C&I Solar
            description: "Expansion of Nature Grid solar panels installation capacity for commercial and industrial clients, moving away from residential focus.",
            factors: [
                { name: "Market Attractiveness (7/10)", desc: "Corporate decarbonization targets and state net metering incentives drive massive demand in India (3.2 GW added in 2025)." },
                { name: "Revenue Potential (7/10)", desc: "Large contract sizes ($100k-$500k), but low gross margins (15%-18%) and long payback cycles." },
                { name: "JBG Capability Fit (9/10)", desc: "Excellent. Nature Grid already operates supply chain, developers, and engineers." },
                { name: "Strategic Fit (8/10)", desc: "Supports core clean tech segment expansion. High ESG brand equity." },
                { name: "Competition (5/10)", desc: "Highly commoditized pricing. High competition from regional contractors." },
                { name: "Execution (8/10)", desc: "Standard electrical/civil engineering. Straightforward permitting." },
                { name: "Capital Efficiency (4/10)", desc: "Capital-heavy. Long cash-conversion cycles, inventory financing, and worker payroll." },
                { name: "Risk Mitigation (7/10)", desc: "Policy change risks (net metering laws). Hedges by spreading projects across multiple states in India." }
            ],
            sources: [
                "JMK Research & Analytics: India C&I Solar Market Report, 2025",
                "IRENA: Renewable Energy Capacity Statistics, 2025",
                "Nature Grid: Supplier Panels Capex Invoices and Lead Times"
            ]
        },
        4: { // IT Managed Services Retainers
            description: "Shift JCS consulting focus from one-off software project contracts to long-term monthly managed IT infrastructure retainers.",
            factors: [
                { name: "Market Attractiveness (7/10)", desc: "Managed IT services market CAGR is 7.9% (Gartner 2025). High enterprise reliance on outsourced devops." },
                { name: "Revenue Potential (8/10)", desc: "Stable recurring revenues (60% margins). Drastically reduces sales cycle overhead." },
                { name: "JBG Capability Fit (9/10)", desc: "Excellent. JCS consulting staff already possesses the technical skills." },
                { name: "Strategic Fit (7/10)", desc: "Increases baseline corporate retainers. Decouples IT services from single project risk." },
                { name: "Competition (5/10)", desc: "Highly competitive. Dominated by major national services agencies." },
                { name: "Execution (8/10)", desc: "Zero engineering complexity since services map directly to current consulting scope." },
                { name: "Capital Efficiency (8/10)", desc: "Pure services model. Requires zero physical assets or hardware investments." },
                { name: "Risk Mitigation (8/10)", desc: "Hedges project pipeline volatility through guaranteed monthly retainer income." }
            ],
            sources: [
                "Gartner: IT Services Industry Forecast (Q4 2025)",
                "IDC: B2B Outsourced DevOps Infrastructure Outlook, 2025"
            ]
        },
        5: { // Consulting Solutions Productization
            description: "Productizing JCS's custom implementations (e.g. CRM/ERP templates and integrations) into reusable modules.",
            factors: [
                { name: "Market Attractiveness (6/10)", desc: "Niche market size. Highly dependent on platform partners (Salesforce, SAP, Dynamics)." },
                { name: "Revenue Potential (7/10)", desc: "High margins for pre-built template configurations, but smaller market size than broad SaaS." },
                { name: "JBG Capability Fit (8/10)", desc: "High. Dev teams can harvest and package pre-existing repositories from past custom consulting assignments." },
                { name: "Strategic Fit (7/10)", desc: "Acts as a bridge between custom consulting and SaaS products." },
                { name: "Competition (6/10)", desc: "Medium density. Many boutique agencies build specialized templates." },
                { name: "Execution (7/10)", desc: "Needs formatting, documentation, and product packaging, but minimal raw code development." },
                { name: "Capital Efficiency (8/10)", desc: "Purely digital templates. Zero capital deployment required." },
                { name: "Risk Mitigation (8/10)", desc: "Extremely low downside. Minimal capital exposure if the project fails." }
            ],
            sources: [
                "Forrester: B2B CRM Platform Partner Ecosystem study, 2025",
                "JCS: Codebase Audit & Common Integration Patterns Report"
            ]
        }
    };

    const sourcesModal = document.getElementById('sources-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalBodyContent = document.getElementById('modal-body-content');
    const modalTitle = document.getElementById('modal-title');

    function showSourcesModal(oppId) {
        const data = opportunitiesRationale[oppId];
        if (!data) return;
        
        const opp = opportunities.find(o => o.id === oppId);
        modalTitle.textContent = `${opp ? opp.name : 'Initiative'} - Rationale & Sources`;
        
        let html = `
            <div class="modal-section">
                <h4>Strategic Overview Rationale</h4>
                <p>${data.description}</p>
            </div>
            
            <div class="modal-section">
                <h4>Core Score Breakdown</h4>
                <div class="modal-factor-grid">
        `;
        
        data.factors.forEach(f => {
            html += `
                <div class="modal-factor-box">
                    <strong>${f.name}</strong>
                    <span>${f.desc}</span>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
            
            <div class="modal-section">
                <div class="modal-sources-list">
                    <h5>Verified Industry Sources & Citations</h5>
                    <ul>
        `;
        
        data.sources.forEach(src => {
            html += `<li>${src}</li>`;
        });
        
        html += `
                    </ul>
                </div>
            </div>
        `;
        
        modalBodyContent.innerHTML = html;
        sourcesModal.classList.add('active');
    }

    // Modal close listeners
    modalCloseBtn.addEventListener('click', () => {
        sourcesModal.classList.remove('active');
    });
    
    sourcesModal.addEventListener('click', (e) => {
        if (e.target === sourcesModal) {
            sourcesModal.classList.remove('active');
        }
    });

    // Initial table load and calculation
    calculateScores();
});


    // -------------------------------------------------------------
    // 7. INTERACTIVE SOLUTION SIMULATORS & PROTOTYPES
    // -------------------------------------------------------------
    
    // Prototype Sub-tab Switching
    const protoTabButtons = document.querySelectorAll('.proto-tab-btn');
    const protoTabContents = document.querySelectorAll('.proto-tab-content');

    protoTabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const protoId = btn.getAttribute('data-proto');
            
            protoTabButtons.forEach(b => b.classList.remove('active'));
            protoTabContents.forEach(c => c.style.display = 'none');
            
            btn.classList.add('active');
            document.getElementById(`proto-content-${protoId}`).style.display = 'block';
        });
    });

    // --- PROTOTYPE 1: RECRUITMENT AI SIMULATOR ---
    const candidatePersonaSelect = document.getElementById('screening-candidate-persona');
    const resumeTextInput = document.getElementById('screening-resume-text');
    const jobTextInput = document.getElementById('screening-job-text');
    const btnRunScreening = document.getElementById('btn-run-screening');
    
    const screeningPlaceholder = document.getElementById('screening-placeholder');
    const screeningLoader = document.getElementById('screening-loader');
    const screeningResults = document.getElementById('screening-results');
    const screeningStatusText = document.getElementById('screening-status-text');
    const screeningProgressBar = document.getElementById('screening-progress-bar');
    
    const screeningScore = document.getElementById('screening-score');
    const screeningBadge = document.getElementById('screening-badge');
    const screeningVerdictTitle = document.getElementById('screening-verdict-title');
    const screeningFactorsList = document.getElementById('screening-factors-list');
    const screeningEconomics = document.getElementById('screening-economics-benefit');

    const candidateData = {
        engineer: {
            resume: "AMIT PATEL - Senior Fullstack Engineer\nEmail: amit.patel@email.com | Phone: +91 98765 43210\n\nSUMMARY:\nResourceful fullstack engineer with 6 years experience specializing in React, Node.js, TimescaleDB, and AWS cloud architecture. Experience building high-performance IoT dashboards and scale API pipelines.\n\nTECHNICAL SKILLS:\n- Frontend: React, Redux, TailwindCSS, Webpack\n- Backend: Node.js, Express, Go, Python\n- Databases: PostgreSQL, MongoDB, TimescaleDB, Redis\n- Cloud: AWS (S3, EC2, Lambda, ECS), Docker, CI/CD",
            job: "Senior Developer to lead development of solar asset IoT analytics dashboard. Must have 5+ years experience. Stack: Node.js, React, databases (SQL/TimescaleDB), AWS cloud deployment.",
            score: "92%",
            badge: "EXCELLENT MATCH",
            badgeClass: "blue",
            verdict: "High-Fit Match. Shortlist immediately.",
            factors: [
                "✅ <strong>Role Sourcing Fit:</strong> 6 years experience matches the 5+ years requirement.",
                "✅ <strong>Tech Stack Integration:</strong> Verified expert matching Node.js, React, and TimescaleDB.",
                "✅ <strong>Industry Affinity:</strong> Past experience building IoT telemetry dashboards reduces training timeline."
            ],
            savings: "AI matching took 1.4s, saving <strong>45 minutes of manual resume vetting ($25 equivalent)</strong>."
        },
        sales: {
            resume: "SARAH D'SOUZA - B2B Business Development Specialist\nEmail: sarah.dsouza@email.com\n\nSUMMARY:\nDriven commercial sales professional with 5 years experience selling enterprise SaaS subscription licenses to industrial mid-market accounts. Proven record exceeding $1M annual sales targets.\n\nSKILLS:\n- Inbound demand gen campaigns, B2B pipeline conversion, CRM logging (Salesforce), client negotiations.",
            job: "Sales Account Executive to drive B2B customer acquisition and SaaS subscriptions for JBG’s new technology platform. Needs enterprise software pipeline experience.",
            score: "85%",
            badge: "HIGH MATCH",
            badgeClass: "gold",
            verdict: "Strong Match. Proceed to Phone Interview.",
            factors: [
                "✅ <strong>Domain Affinity:</strong> 5 years experience selling enterprise SaaS matches growth initiatives.",
                "✅ <strong>Client Channels:</strong> Proven records selling to industrial manufacturing accounts.",
                "❌ <strong>Technical Gap:</strong> General software profile; requires onboarding on technical telemetry stack."
            ],
            savings: "AI matching took 1.2s, saving <strong>35 minutes of recruiter screen labor ($18 equivalent)</strong>."
        },
        poor: {
            resume: "RAJESH KUMAR - Undergraduate Student\nEmail: rajesh.k@email.com\n\nSUMMARY:\nRecent college student seeking an entry level summer internship. Keen interest in business strategy and exploring technologies.\n\nTECHNICAL PROJECTS:\n- Simple calculator app in HTML/CSS.\n- Personal blog template in WordPress.",
            job: "Senior Developer to lead development of solar asset IoT analytics dashboard. Must have 5+ years experience. Stack: Node.js, React, databases (SQL/TimescaleDB), AWS cloud deployment.",
            score: "34%",
            badge: "WEAK FIT",
            badgeClass: "grey",
            verdict: "Unsuitable Candidate. Send Auto-Rejection Email.",
            factors: [
                "❌ <strong>Experience Gap:</strong> Zero professional years of experience (5+ years required).",
                "❌ <strong>Tech Stack Deficit:</strong> No exposure to Node.js, React, TimescaleDB, or AWS Cloud databases.",
                "❌ <strong>Role Mismatch:</strong> Entry-level intern candidate applied for Senior Leadership vacancy."
            ],
            savings: "AI screening took 0.8s, saving <strong>20 minutes of manual filtering and response emailing ($10 equivalent)</strong>."
        }
    };

    function populateScreeningFields() {
        const key = candidatePersonaSelect.value;
        const data = candidateData[key];
        if (data) {
            resumeTextInput.value = data.resume;
            jobTextInput.value = data.job;
        }
    }

    // Populate default
    populateScreeningFields();
    candidatePersonaSelect.addEventListener('change', populateScreeningFields);

    btnRunScreening.addEventListener('click', () => {
        screeningPlaceholder.style.display = 'none';
        screeningResults.style.display = 'none';
        screeningLoader.style.display = 'flex';
        
        btnRunScreening.disabled = true;
        
        let progress = 0;
        screeningProgressBar.style.width = '0%';
        
        const statusPhrases = [
            { limit: 25, text: "Extracting skills, technologies, and metadata..." },
            { limit: 55, text: "Comparing candidate profiles with target job specifications..." },
            { limit: 80, text: "Calculating weighted skills match and pipeline routing scores..." },
            { limit: 100, text: "Compiling final assessment verdict..." }
        ];

        const interval = setInterval(() => {
            progress += 5;
            screeningProgressBar.style.width = `${progress}%`;
            
            const phrase = statusPhrases.find(p => progress <= p.limit);
            if (phrase) {
                screeningStatusText.textContent = phrase.text;
            }
            
            if (progress >= 100) {
                clearInterval(interval);
                btnRunScreening.disabled = false;
                
                // Show results
                screeningLoader.style.display = 'none';
                screeningResults.style.display = 'flex';
                
                const key = candidatePersonaSelect.value;
                const result = candidateData[key];
                
                screeningScore.textContent = result.score;
                screeningBadge.textContent = result.badge;
                screeningBadge.className = `slide-badge ${result.badgeClass}`;
                screeningVerdictTitle.textContent = result.verdict;
                screeningEconomics.innerHTML = result.savings;
                
                // Set color of circle ring based on badge
                const ringColor = result.badgeClass === 'blue' ? '#0ea5e9' : (result.badgeClass === 'gold' ? '#eab308' : '#64748b');
                document.getElementById('screening-score-ring').style.borderColor = ringColor;
                
                screeningFactorsList.innerHTML = result.factors.map(f => `<li>${f}</li>`).join('');
            }
        }, 100);
    });

    // --- PROTOTYPE 2: SOLAR TELEMETRY IoT SIMULATOR ---
    const telemetryKW = document.getElementById('telemetry-current-kw');
    const telemetryKWH = document.getElementById('telemetry-total-kwh');
    const telemetryCO2 = document.getElementById('telemetry-co2-kg');
    const btnTriggerDegradation = document.getElementById('btn-trigger-degradation');
    const btnDispatchOM = document.getElementById('btn-dispatch-om');
    const telemetryStatusBadge = document.getElementById('telemetry-status-badge');
    const telemetrySystemLogs = document.getElementById('telemetry-system-logs');
    
    const chartCurvePath = document.getElementById('chart-curve-path');
    const chartAreaPath = document.getElementById('chart-area-path');

    let baseKW = 42.8;
    let accumulatedKWH = 312.4;
    let accumulatedCO2 = 243.6;
    let isDegraded = false;
    let telemetryInterval;

    function addLog(text) {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        telemetrySystemLogs.innerHTML = `[${time}] ${text}<br>${telemetrySystemLogs.innerHTML}`;
    }

    // Live telemetry variations
    function startTelemetryStream() {
        if (telemetryInterval) clearInterval(telemetryInterval);
        
        telemetryInterval = setInterval(() => {
            let targetKW = baseKW;
            if (isDegraded) {
                targetKW = 22.4; // 40% reduction
            }
            
            // Add tiny fluctuations
            const currentKWVal = (targetKW + (Math.random() * 2 - 1)).toFixed(1);
            telemetryKW.textContent = `${currentKWVal} kW`;
            
            // Accumulate
            accumulatedKWH += parseFloat((currentKWVal / 1800).toFixed(4)); // kW converted to kWh over 2s
            accumulatedCO2 += parseFloat((currentKWVal / 2400).toFixed(4));
            
            telemetryKWH.textContent = `${accumulatedKWH.toFixed(2)} kWh`;
            telemetryCO2.textContent = `${accumulatedCO2.toFixed(2)} kg`;
            
            // Fluctuate curve path slightly
            animateSVGChart(currentKWVal);
        }, 2000);
    }

    function animateSVGChart(currentValue) {
        // Move curves slightly to simulate a real live graph moving
        const baseHeight = 150;
        const scaleVal = Math.min(130, Math.max(30, 150 - (currentValue * 2)));
        
        // Generate a random-looking curve ending in our current value
        const path = `M0,130 L100,110 L200,95 L300,105 L400,90 L500,95 L600,75 L700,85 L750,${scaleVal} L800,${scaleVal}`;
        chartCurvePath.setAttribute('d', path);
        chartAreaPath.setAttribute('d', `${path} L800,150 L0,150 Z`);
    }

    startTelemetryStream();

    btnTriggerDegradation.addEventListener('click', () => {
        isDegraded = true;
        baseKW = 22.4;
        
        telemetryStatusBadge.textContent = "WARNING: DEGRADATION ALERT";
        telemetryStatusBadge.style.background = "#ffe4e6";
        telemetryStatusBadge.style.color = "#be123c";
        
        addLog("🚨 ALERT: Dust/Debris accumulation detected on Array Grid #NG-8802.");
        addLog("🚨 Efficiency drop: -48.2% output power capacity loss.");
        
        btnTriggerDegradation.style.display = 'none';
        btnDispatchOM.style.display = 'block';
    });

    btnDispatchOM.addEventListener('click', () => {
        btnDispatchOM.disabled = true;
        addLog("🔧 DISPATCHING: Nature Grid O&M crew dispatched to Jithvar HQ.");
        
        let counter = 0;
        const loaderLog = setInterval(() => {
            counter++;
            if (counter === 1) addLog("🔧 Crew arrived. Cleaning cells on Node #7...");
            if (counter === 2) addLog("🔧 Operations check: cell cleaning completed. Re-calibrating...");
            if (counter === 3) {
                clearInterval(loaderLog);
                btnDispatchOM.disabled = false;
                btnDispatchOM.style.display = 'none';
                btnTriggerDegradation.style.display = 'block';
                
                isDegraded = false;
                baseKW = 42.8;
                
                telemetryStatusBadge.textContent = "SYSTEM OPERATIONAL";
                telemetryStatusBadge.style.background = "#e0f2fe";
                telemetryStatusBadge.style.color = "#0369a1";
                
                addLog("✅ RESOLVED: Dust cleared. Cell health 100%. Output power restored.");
                addLog("✅ INVOICE GENERATED: $250.00 billed automatically to O&M client account.");
            }
        }, 1200);
    });

    // --- PROTOTYPE 3: JCS TEMPLATE MARKETPLACE ---
    const deployButtons = document.querySelectorAll('.btn-deploy-template');
    const protoTerminal = document.getElementById('prototype-terminal');
    const terminalBody = document.getElementById('terminal-body-content');

    function typeTerminalLine(text, type = 'info', delay = 0) {
        return new Promise(resolve => {
            setTimeout(() => {
                const line = document.createElement('div');
                line.className = `terminal-line terminal-${type}`;
                
                if (type === 'cmd') {
                    line.innerHTML = `<span style="color:#10b981;">$</span> ${text}`;
                } else if (type === 'success') {
                    line.innerHTML = `[SUCCESS] ${text}`;
                } else {
                    line.innerHTML = `[INFO] ${text}`;
                }
                
                terminalBody.appendChild(line);
                terminalBody.scrollTop = terminalBody.scrollHeight;
                resolve();
            }, delay);
        });
    }

    deployButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const templateId = btn.getAttribute('data-template-id');
            const license = btn.getAttribute('data-license');
            const name = btn.getAttribute('data-name');
            
            // Show terminal
            protoTerminal.style.display = 'block';
            terminalBody.innerHTML = '';
            
            // Disable button
            btn.disabled = true;
            btn.textContent = "Installing...";
            
            await typeTerminalLine(`npx jcs-deploy-template --template=${templateId} --env=production`, 'cmd', 200);
            await typeTerminalLine("Accessing Jithvar central software code repository...", 'info', 600);
            await typeTerminalLine(`Cloning template database records: "${name}" v2.1.0...`, 'info', 500);
            await typeTerminalLine("Connecting B2B API gateway nodes to AWS RDS instances...", 'info', 600);
            await typeTerminalLine("Compiling microservices and running migration tasks...", 'info', 500);
            await typeTerminalLine("Running unit tests: 14 passing, 0 failed.", 'info', 400);
            await typeTerminalLine(`Deployment successful! Target module active at client-app.jithvar.com.`, 'success', 500);
            await typeTerminalLine(`B2B Recurring Billing connected: Billed $${license}/month on license token.`, 'success', 300);
            
            btn.textContent = "Deployed (Active License)";
            btn.style.background = "#14532d";
            btn.style.borderColor = "#22c55e";
            btn.style.color = "#22c55e";
        });
    });
