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
                        <div class="slide-metric-large">
                            <span class="num" style="color: var(--color-primary-hover); font-size: 3rem;">GPE</span>
                            <span class="label">Jithvar Business Group Strategy</span>
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
                <div class="slide-grid-2">
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
                                <span style="display:block; font-size:0.8rem; color: var(--text-muted); margin-top:2px;">Historical choices driven by emotional department preferences rather than objective ROIC.</span>
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
                                    <strong style="font-size: 0.9rem; display:block;">Phase 1: Diagnose Core Health (Days 1-30)</strong>
                                    <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-top:2px;">Audit cost structures, current client margins, and developer capacity to establish baseline.</span>
                                </div>
                            </div>
                            <div style="display: flex; gap: 12px; align-items: flex-start;">
                                <div style="width:28px; height:28px; border-radius:50%; background:#e0f2fe; color:#0369a1; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem; flex-shrink:0; margin-top:2px;">2</div>
                                <div>
                                    <strong style="font-size: 0.9rem; display:block;">Phase 2: Scorecard Prioritization (Days 31-60)</strong>
                                    <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-top:2px;">Rank opportunities across 8 weighted market attractiveness and capability fit factors.</span>
                                </div>
                            </div>
                            <div style="display: flex; gap: 12px; align-items: flex-start;">
                                <div style="width:28px; height:28px; border-radius:50%; background:#e0f2fe; color:#0369a1; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:0.85rem; flex-shrink:0; margin-top:2px;">3</div>
                                <div>
                                    <strong style="font-size: 0.9rem; display:block;">Phase 3: Validate Market Pilots (Days 61-90)</strong>
                                    <span style="display:block; font-size:0.8rem; color:var(--text-muted); margin-top:2px;">Deploy low-code B2B MVPs to test customer demand and willingness to pay.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Assessing Existing Business Lines",
            subtitle: "Establishing Base Core Performance and Low-Risk Growth Adjacencies",
            presenterNotes: "Let's diagnose JBG's current operations. For JCS, we pivot from low-margin general software contracts to international IT managed services retainers. For Nature Grid, we transition from residential installation to commercial installs and high-margin O&M contracts. For Aequalis, we expand transactional hiring into recurring contract staffing.",
            content: `
                <div class="slide-grid-4">
                    <div class="slide-card-visual">
                        <div>
                            <span class="slide-badge blue">JCS (Technology)</span>
                            <h4 style="margin-top:10px;">IT Consulting Core</h4>
                            <p style="margin-top:8px; line-height:1.45; font-size:0.8rem;">
                                Currently provides software dev and IT services. Pivots custom dev contracts to international cloud managed service retainers to secure higher margins and long-term predictable bookings.
                            </p>
                        </div>
                        <span class="slide-badge highlight" style="margin-top:12px;">High Margin Retainers</span>
                    </div>
                    <div class="slide-card-visual">
                        <div>
                            <span class="slide-badge blue">Nature Grid (Energy)</span>
                            <h4 style="margin-top:10px;">Solar Install Core</h4>
                            <p style="margin-top:8px; line-height:1.45; font-size:0.8rem;">
                                Currently installs residential solar arrays. Moves physical install capacity upmarket to larger C&I (Commercial & Industrial) contracts and recurring maintenance O&M service agreements.
                            </p>
                        </div>
                        <span class="slide-badge highlight" style="margin-top:12px;">Recurring Yield Assets</span>
                    </div>
                    <div class="slide-card-visual">
                        <div>
                            <span class="slide-badge blue">Aequalis (HR)</span>
                            <h4 style="margin-top:10px;">Workforce Solutions</h4>
                            <p style="margin-top:8px; line-height:1.45; font-size:0.8rem;">
                                Provides executive recruitment search. Expands transaction recruitment footprint into high-volume specialized tech contract staffing retainers to smooth income cycles.
                            </p>
                        </div>
                        <span class="slide-badge highlight" style="margin-top:12px;">Predictable Cash Retainers</span>
                    </div>
                    <div class="slide-card-visual">
                        <div>
                            <span class="slide-badge blue">Ventures</span>
                            <h4 style="margin-top:10px;">New Ventures</h4>
                            <p style="margin-top:8px; line-height:1.45; font-size:0.8rem;">
                                Incubates emerging technologies. Harvests common consulting code libraries from JCS to build and productize reusable SaaS widgets, templates, and integration plug-ins.
                            </p>
                        </div>
                        <span class="slide-badge highlight" style="margin-top:12px;">Scalable IP Products</span>
                    </div>
                </div>
            `
        },
        {
            title: "Strategic Lenses for Growth Sourcing",
            subtitle: "Four Strategic Vectors to Identify Opportunity Pools",
            presenterNotes: "Where do we hunt for opportunities? We look through four lenses: Markets, Customer Segments, Business Models, and Capabilities. We want to move from transactional models to subscription and retainer structures, targeting mid-market and enterprise accounts in India and Southeast Asia.",
            content: `
                <div class="slide-grid-4">
                    <div class="slide-card-visual">
                        <h4>1. Markets (Where)</h4>
                        <p style="font-size: 0.8rem; line-height: 1.45; color: var(--text-muted); margin-top: 8px; flex-grow: 1;">
                            Target geographic expansion in regions with active pipelines: Tier-1/2 Indian solar grids, and Middle East & Southeast Asian corridors for IT managed services.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Target Geography</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>2. Segments (Who)</h4>
                        <p style="font-size: 0.8rem; line-height: 1.45; color: var(--text-muted); margin-top: 8px; flex-grow: 1;">
                            Pivot client portfolios upmarket. Move away from low-margin, high-churn SMB accounts to Mid-Market corporate profiles and B2B Enterprise accounts where contract values justify customized delivery.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Customer Profiles</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>3. Models (How)</h4>
                        <p style="font-size: 0.8rem; line-height: 1.45; color: var(--text-muted); margin-top: 8px; flex-grow: 1;">
                            Transition from transactional models (one-off custom builds, single recruitment placement fee, panel installation fee) to recurring contracts (subscriptions, monthly retainers, O&M service agreements).
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Contract Structure</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>4. Capabilities (What)</h4>
                        <p style="font-size: 0.8rem; line-height: 1.45; color: var(--text-muted); margin-top: 8px; flex-grow: 1;">
                            Exploit cross-business synergies. Combine JCS software engineering with Aequalis client networks (to distribute HR SaaS) and Nature Grid site data (to power energy management dashboards).
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Synergy IP</span>
                    </div>
                </div>
            `
        },
        {
            title: "The Opportunity Prioritization Scorecard",
            subtitle: "An Objective Weighted Metric System to Allocate Capital",
            presenterNotes: "This is the heart of our recommendation. We score opportunities out of 10 on these 8 weighted factors. Attractiveness and Revenue represent 40% of the decision. Strategic Fit and Capability Fit represent 30% to ensure we leverage existing resources. Competitive Intensity and Execution speed represent 20%. Capital and Risk represent the final 10% to preserve capital.",
            content: `
                <div class="slide-grid-4">
                    <div class="slide-card-visual">
                        <h4>Market Potential (40%)</h4>
                        <p style="font-size:0.8rem; margin-top:6px; flex-grow: 1; line-height:1.45; color: var(--text-muted);">
                            • <strong>Market Attractiveness (20%):</strong> Scope addressable TAM/SAM, historical and projected CAGR, and regional macro tailwinds.<br><br>
                            • <strong>Revenue Potential (20%):</strong> Validate customer willingness to pay recurring premiums, lifetime value (LTV), and pricing power.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Scale Drivers</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>Strategic Fit (30%)</h4>
                        <p style="font-size:0.8rem; margin-top:6px; flex-grow: 1; line-height:1.45; color: var(--text-muted);">
                            • <strong>JBG Capability Fit (15%):</strong> Maximize direct reuse of existing databases, code libraries, sales networks, or physical sites.<br><br>
                            • <strong>Strategic Alignment (15%):</strong> Ensure long-term alignment with clean tech/digital vision and JBG brand equity.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Synergy Drivers</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>Feasibility (20%)</h4>
                        <p style="font-size:0.8rem; margin-top:6px; flex-grow: 1; line-height:1.45; color: var(--text-muted);">
                            • <strong>Competitive Intensity (10%):</strong> Map competitor density, pricing commoditization, and barriers to building differentiation.<br><br>
                            • <strong>Ease of Execution (10%):</strong> Scope software development time-to-market, regulatory barriers, and team skills.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Execution Drivers</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>Risk & Capital (10%)</h4>
                        <p style="font-size:0.8rem; margin-top:6px; flex-grow: 1; line-height:1.45; color: var(--text-muted);">
                            • <strong>Capital Efficiency (5%):</strong> Minimize upfront Capex requirements and cash payback timeline.<br><br>
                            • <strong>Risk Mitigation (5%):</strong> Hedge operational liabilities, regulatory policy changes, and vendor dependencies.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Control Drivers</span>
                    </div>
                </div>
            `
        },
        {
            title: "Cross-Business Synergy #1: Recruitment SaaS",
            subtitle: "AI-Powered HR Tech for High-Volume B2B Hiring",
            presenterNotes: "Rather than starting a new tech venture from scratch, we build HR Tech. JCS provides the engineering, Aequalis provides the customer relationships and domain validation. Aequalis Global acts as the design partner and distributes the product to its existing enterprise customer base, bypassing early customer acquisition hurdles.",
            content: `
                <div class="slide-grid-3">
                    <div class="slide-card-visual">
                        <h4>Core Leverage</h4>
                        <p style="line-height:1.5; font-size:0.85rem; color:var(--text-muted);">
                            • <strong>Aequalis Network:</strong> Direct warm access to hundreds of corporate HR managers in India and SE Asia.<br><br>
                            • <strong>JCS Engineering:</strong> Developer teams ready to write and deploy SaaS products.<br><br>
                            • <strong>Domain Knowledge:</strong> Recruiter workflows used as a design blueprint.
                        </p>
                        <span class="slide-badge" style="margin-top:12px;">Assets Bound</span>
                    </div>
                    <div class="slide-card-visual" style="border-color: rgba(230, 25, 60, 0.2);">
                        <h4>The Product & Value</h4>
                        <p style="line-height:1.5; font-size:0.85rem; color:var(--text-muted);">
                            • <strong>AI-Powered Screening:</strong> Automated resumes parsing, candidate matching scoring, and calendar scheduling integrations.<br><br>
                            • <strong>Go-To-Market Moat:</strong> Distributed directly to Aequalis recruitment clients, bypassing public ads spends.
                        </p>
                        <span class="slide-badge highlight" style="margin-top:12px;">HR Tech SaaS</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>Target Metric</h4>
                        <div class="slide-metric-large" style="flex-grow:1; display:flex; justify-content:center; align-items:center;">
                            <span class="num" style="color: var(--color-primary-hover); font-size: 2.8rem;">&gt; 4.0x</span>
                            <span class="label">LTV : CAC Ratio</span>
                        </div>
                        <p style="font-size:0.75rem; color:var(--text-muted); text-align:center; margin-top:8px; line-height:1.3;">Enabled by warm distribution channels from Aequalis client base.</p>
                    </div>
                </div>
            `
        },
        {
            title: "Cross-Business Synergy #2: Solar Telemetry SaaS",
            subtitle: "Unlocking Recurring Cash Flows from Nature Grid Solar Projects",
            presenterNotes: "Solar installation is a transactional hardware contract. By embedding IoT performance-tracking sensors and connecting them to a dashboard built by JCS, Nature Grid can sell long-term Operations & Maintenance agreements. This creates high-margin recurring SaaS revenues on top of hardware installations, locking in customers for years.",
            content: `
                <div class="slide-grid-3">
                    <div class="slide-card-visual">
                        <h4>Core Leverage</h4>
                        <p style="line-height:1.5; font-size:0.85rem; color:var(--text-muted);">
                            • <strong>Nature Grid Footprint:</strong> Physical commercial & industrial installations serving as hardware nodes.<br><br>
                            • <strong>JCS Software Capability:</strong> Custom dashboard engineering, database management, and cloud architecture.<br><br>
                            • <strong>Site Relationships:</strong> Warm client access.
                        </p>
                        <span class="slide-badge">Assets Bound</span>
                    </div>
                    <div class="slide-card-visual" style="border-color: rgba(230, 25, 60, 0.2);">
                        <h4>The Product & Value</h4>
                        <p style="line-height:1.5; font-size:0.85rem; color:var(--text-muted);">
                            • <strong>IoT Analytics Portal:</strong> Real-time solar energy yield tracking, panel degradation charts, and savings calculations.<br><br>
                            • <strong>O&M Retainers:</strong> Automates maintenance warnings and panel cleaning service dispatches.
                        </p>
                        <span class="slide-badge highlight">Solar Telemetry IoT</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>Target Metric</h4>
                        <div class="slide-metric-large" style="flex-grow:1; display:flex; justify-content:center; align-items:center;">
                            <span class="num" style="color: #0284c7; font-size: 2.8rem;">+30%</span>
                            <span class="label">Customer Lifetime Value</span>
                        </div>
                        <p style="font-size:0.75rem; color:var(--text-muted); text-align:center; margin-top:8px; line-height:1.3;">Transforms transactional panel buyers into recurring energy subscribers.</p>
                    </div>
                </div>
            `
        },
        {
            title: "Synergy #3: Productizing Consulting",
            subtitle: "Transitioning JCS from Custom Contracts to Scale Software",
            presenterNotes: "Consulting is hard to scale because revenue is directly tied to employee hours. But if JCS can productize its common consulting implementations—like Salesforce/Microsoft Dynamics plugins or CRM workflow integrations—we can build reusable software assets. This increases developer utilization, speeds up project delivery times, and allows us to quote fixed-price, high-margin projects.",
            content: `
                <div class="slide-compare-panel">
                    <div class="slide-compare-row">
                        <div class="slide-compare-label">BEFORE</div>
                        <div class="slide-compare-val">
                            <strong>100% Custom Services builds:</strong><br>
                            Every client project requires unique coding from scratch. Project delivery times are capped by developer hours. Hard to scale, low utilization.
                        </div>
                        <div class="slide-compare-stat">20% Margin</div>
                    </div>
                    <div class="slide-compare-row highlight">
                        <div class="slide-compare-label" style="color: var(--color-primary-hover);">AFTER</div>
                        <div class="slide-compare-val">
                            <strong>Reusable configuration templates & plugins:</strong><br>
                            Pre-built Salesforce integration modules, ERP API middleware layouts, and CRM plugins. Decouples consulting revenues from developer headcount.
                        </div>
                        <div class="slide-compare-stat" style="color: var(--success-color);">45%+ Margin</div>
                    </div>
                </div>
            `
        },
        {
            title: "The Investment Research Agenda",
            subtitle: "Five Strategic Intelligence Buckets to Conduct Due Diligence",
            presenterNotes: "Before committing significant capital to any opportunity, we must execute a structured research agenda. This reduces risk. We divide research into 5 buckets: Market, Customer, Competitor, JBG Capability, and Economics. This ensures we don't fund projects that look good on slides but fail in the field.",
            content: `
                <div class="slide-grid-5">
                    <div class="slide-card-visual">
                        <h4>1. Market</h4>
                        <p style="font-size: 0.8rem; line-height: 1.45; color: var(--text-muted); margin-top: 8px; flex-grow: 1;">
                            <strong>Focus:</strong> Validate addressable TAM/SAM, segment CAGRs, and regional policy trends (e.g. net-metering laws).<br><br>
                            <strong>Gate:</strong> TAM > $500M; segment CAGR > 15%.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Size Gate</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>2. Customer</h4>
                        <p style="font-size: 0.8rem; line-height: 1.45; color: var(--text-muted); margin-top: 8px; flex-grow: 1;">
                            <strong>Focus:</strong> Run value-in-use validation and budget willingness to pay to map customer pain points.<br><br>
                            <strong>Gate:</strong> Complete 30+ discovery interviews.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Discovery</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>3. Competitor</h4>
                        <p style="font-size: 0.8rem; line-height: 1.45; color: var(--text-muted); margin-top: 8px; flex-grow: 1;">
                            <strong>Focus:</strong> Map competitor pricing models, features, and market share density to identify gaps.<br><br>
                            <strong>Gate:</strong> Clear JBG differentiation moat defined.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Market Moat</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>4. Capability</h4>
                        <p style="font-size: 0.8rem; line-height: 1.45; color: var(--text-muted); margin-top: 8px; flex-grow: 1;">
                            <strong>Focus:</strong> Audit developer bandwidth, sales experience, and hiring timelines for new ventures.<br><br>
                            <strong>Gate:</strong> Core team workload capped < 85%.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Feasibility</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>5. Economics</h4>
                        <p style="font-size: 0.8rem; line-height: 1.45; color: var(--text-muted); margin-top: 8px; flex-grow: 1;">
                            <strong>Focus:</strong> Project LTV, CAC, payback cycles, and initial working capital/Capex demands.<br><br>
                            <strong>Gate:</strong> LTV:CAC > 3.0x; Payback < 12 months.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Finance Gate</span>
                    </div>
                </div>
            `
        },
        {
            title: "Digital Marketing & Sales Enablement",
            subtitle: "Unified B2B Demand Generation and Lead Allocation",
            presenterNotes: "How do we generate sales? Instead of cold calling, we propose a B2B inbound strategy. We build online ROI tools—like a solar savings calculator—and publish high-quality content to drive leads. Then, we cross-train our sales reps. For example, Aequalis reps can spot opportunities to pitch JCS services, and JCS reps can identify recruitment staffing leads.",
            content: `
                <div class="slide-grid-2">
                    <div class="slide-card-visual">
                        <h4>Inbound Demand Generation</h4>
                        <p style="line-height:1.5; font-size:0.85rem; flex-grow: 1; margin-top:8px; color: var(--text-muted);">
                            • <strong>Authority Content:</strong> Publish high-value whitepapers, market studies, and case studies to capture search traffic.<br><br>
                            • <strong>Interactive ROI Tools:</strong> Embed savings estimators (e.g. Solar panels payback calculators) to convert high-intent site visitors.<br><br>
                            • <strong>CRM Lead Scoring:</strong> Deploy automated lead tracking and score opportunities before routing to sales agents.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Marketing Pull</span>
                    </div>
                    <div class="slide-card-visual">
                        <h4>Unified B2B Sales Playbook</h4>
                        <p style="line-height:1.5; font-size:0.85rem; flex-grow: 1; margin-top:8px; color: var(--text-muted);">
                            • <strong>Sales Force Cross-Training:</strong> Cross-train JCS tech consulting sales teams and Aequalis Global recruitment sales reps.<br><br>
                            • <strong>Synergy Lead Sourcing:</strong> Train Aequalis reps to spot tech development gaps, and JCS consultants to spot IT recruiter staffing gaps.<br><br>
                            • <strong>Shared Commission Pools:</strong> Incentivize cross-business line lead generation via split referral bonuses.
                        </p>
                        <span class="slide-badge gold" style="margin-top:12px;">Sales Push</span>
                    </div>
                </div>
            `
        },
        {
            title: "First 90 Days Execution Timeline",
            subtitle: "Phased Implementation Schedule from Diagnostics to Pilot Validation",
            presenterNotes: "This 90-day plan outlines exactly what we do next. It ensures we don't spend months theorizing, but instead move rapidly to validate our core assumptions. Phase 1 is Diagnose, Phase 2 is Discover and prioritize, Phase 3 is Validate with low-cost MVPs.",
            content: `
                <div class="slide-grid-3">
                    <div class="slide-card-visual" style="border-top: 4px solid var(--color-primary);">
                        <span class="slide-badge highlight" style="margin-top:0; margin-bottom: 8px;">Days 1–30</span>
                        <h4 style="margin-bottom:6px;">Phase 1: Diagnose</h4>
                        <p style="font-size:0.8rem; line-height:1.45; flex-grow:1; color: var(--text-muted);">
                            • <strong>Operational Audit:</strong> Review margin profiles, revenue concentration risks, and client dependencies across JCS, Nature Grid, and Aequalis.<br><br>
                            • <strong>System Baseline:</strong> Deploy the Group Business Health Dashboard to monitor cash conversion cycles.<br><br>
                            • <strong>Bandwidth check:</strong> Audit developer workloads and capacity.
                        </p>
                        <span class="slide-badge" style="margin-top:12px;">Operational Audit</span>
                    </div>
                    <div class="slide-card-visual" style="border-top: 4px solid var(--accent-gold);">
                        <span class="slide-badge highlight" style="margin-top:0; margin-bottom: 8px;">Days 31–60</span>
                        <h4 style="margin-bottom:6px;">Phase 2: Discover</h4>
                        <p style="font-size:0.8rem; line-height:1.45; flex-grow:1; color: var(--text-muted);">
                            • <strong>Idea Sourcing:</strong> Gather growth proposals from all business units into a central repository.<br><br>
                            • <strong>Matrix Scoring:</strong> Run opportunities through the 8-factor prioritization scorecard.<br><br>
                            • <strong>Portfolio Selection:</strong> Pick the top 3 synergetic pilots for development.
                        </p>
                        <span class="slide-badge" style="margin-top:12px;">Pipeline Prioritizer</span>
                    </div>
                    <div class="slide-card-visual" style="border-top: 4px solid #0284c7;">
                        <span class="slide-badge highlight" style="margin-top:0; margin-bottom: 8px;">Days 61–90</span>
                        <h4 style="margin-bottom:6px;">Phase 3: Validate</h4>
                        <p style="font-size:0.8rem; line-height:1.45; flex-grow:1; color: var(--text-muted);">
                            • <strong>Low-Code Prototyping:</strong> Launch mockups and B2B landing pages to test interest.<br><br>
                            • <strong>Customer Validation:</strong> Conduct 30+ discovery interviews with target buyers.<br><br>
                            • <strong>Pre-Sales:</strong> Secure early letter-of-intent (LOI) signings from warm trial accounts.
                        </p>
                        <span class="slide-badge" style="margin-top:12px;">Market Verification</span>
                    </div>
                </div>
            `
        },
        {
            title: "Governance & Success Metrics",
            subtitle: "Three Levels of KPI Tracking to Ensure Capital Discipline",
            presenterNotes: "We must measure success using a hierarchy of KPIs. Portfolio-level metrics track revenue and ROIC to ensure group health. Opportunity-level metrics track CAC and payback periods to validate market demand. Most importantly, Innovation-level metrics track the rate of projects killed early. Killing 70% of ideas early is a sign of good strategy—it protects our cash and keeps us focused.",
            content: `
                <div class="slide-grid-3">
                    <div class="slide-card-visual">
                        <div class="slide-metric-large">
                            <span class="num">ROIC</span>
                            <span class="label">Group Health</span>
                        </div>
                        <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px; line-height: 1.45; flex-grow:1;">
                            • <strong>Revenue growth %:</strong> Target sustainable portfolio growth.<br><br>
                            • <strong>EBITDA margin expansion:</strong> Monitor unit margins.<br><br>
                            • <strong>ROIC:</strong> Maximize group return on invested capital.
                        </p>
                        <span class="slide-badge" style="margin-top:12px;">Portfolio Gate</span>
                    </div>
                    <div class="slide-card-visual">
                        <div class="slide-metric-large">
                            <span class="num">&gt; 3.0x</span>
                            <span class="label">LTV : CAC</span>
                        </div>
                        <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px; line-height: 1.45; flex-grow:1;">
                            • <strong>LTV:CAC ratio:</strong> Enforce unit economic viability standards.<br><br>
                            • <strong>Payback cycle:</strong> Target cash payback in &lt; 12 months.<br><br>
                            • <strong>Churn Rate:</strong> Monitor subscription cancellations.
                        </p>
                        <span class="slide-badge" style="margin-top:12px;">Commercial Gate</span>
                    </div>
                    <div class="slide-card-visual" style="border-color: rgba(230, 25, 60, 0.3); background: rgba(230, 25, 60, 0.02);">
                        <div class="slide-metric-large">
                            <span class="num" style="color: var(--color-primary-hover);">&gt; 70%</span>
                            <span class="label">Early-Killed Ideas</span>
                        </div>
                        <p style="font-size:0.8rem; color:var(--text-muted); margin-top:8px; line-height: 1.45; flex-grow:1;">
                            • <strong>Validation velocity:</strong> Track time to terminate unviable pilots.<br><br>
                            • <strong>Fail-fast rate:</strong> Terminate &gt; 70% of ideas at research gates to preserve capital.
                        </p>
                        <span class="slide-badge highlight" style="margin-top:12px;">Governance Gate</span>
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
                <div class="slide-header-logo">JBG GPE Strategy</div>
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
            isCustom: false
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
            isCustom: false
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
            isCustom: false
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
            isCustom: false
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
            isCustom: false
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
                <td class="no-print">
                    ${opp.isCustom ? `<button class="btn-delete" data-opp-id="${opp.id}"><svg class="icon-delete" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg></button>` : `<span style="color:var(--text-muted);font-size:0.8rem;">Core</span>`}
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
            isCustom: true
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
