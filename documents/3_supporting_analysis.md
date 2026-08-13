# SUPPORTING STRATEGIC ANALYSIS
*Deep Dive: Framework Mathematics, Synergy Mechanics, and Risk Management*

---

## 1. Prioritization Scorecard Mathematics

To ensure objectivity, the Opportunity Score ($S_{opp}$) is calculated as a weighted sum of individual scores across 8 factors. Each factor is scored on a scale of 1 to 10:

$$S_{opp} = \sum_{i=1}^{n} w_i \cdot s_i$$

Where:
* $w_i$ is the weight of factor $i$ (such that $\sum w_i = 100\%$)
* $s_i$ is the raw score of factor $i$ (on a 1–10 scale)

### Factor Weight Rationale
1. **Market Attractiveness ($w = 20\%$):** Evaluates the Total Addressable Market (TAM) and market growth (CAGR). High growth is essential to justify new entries.
2. **Revenue Potential ($w = 20\%$):** Assesses pricing power, customer willingness to pay, and recurring nature of revenue (SaaS vs. transactional).
3. **JBG Capability Fit ($w = 15\%$):** Measures how easily JBG can execute using existing software developers (JCS), client relations (Aequalis), or solar installers (Nature Grid).
4. **Strategic Fit ($w = 15\%$):** Evaluates alignment with the JBG brand, portfolio diversification goals, and long-term valuation impact.
5. **Competitive Intensity ($w = 10\%$):** Low scores represent highly commoditized markets (e.g., residential solar installs); high scores represent high-barrier markets.
6. **Ease of Execution ($w = 10\%$):** Measures time-to-market and regulatory/technical roadblocks.
7. **Capital Efficiency ($w = 5\%$):** Favors asset-light models (like SaaS/managed services) over capital-heavy ones.
8. **Risk Mitigation ($w = 5\%$):** Accounts for legal, operational, and financial risk profiles.

### Scorecard Example: Recruitment SaaS vs. C&I Solar Expansion

Let's compare two high-priority growth opportunities:

| Factor | Weight ($w_i$) | Recruitment SaaS Score ($s_i$) | Recruitment SaaS Weighted | C&I Solar Score ($s_i$) | C&I Solar Weighted |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Market Attractiveness | 20% | 8 / 10 | 1.60 | 7 / 10 | 1.40 |
| Revenue Potential | 20% | 9 / 10 | 1.80 | 7 / 10 | 1.40 |
| JBG Capability Fit | 15% | 8 / 10 | 1.20 | 9 / 10 | 1.35 |
| Strategic Fit | 15% | 9 / 10 | 1.35 | 8 / 10 | 1.20 |
| Competitive Intensity | 10% | 6 / 10 | 0.60 | 5 / 10 | 0.50 |
| Ease of Execution | 10% | 7 / 10 | 0.70 | 8 / 10 | 0.80 |
| Capital Efficiency | 5% | 9 / 10 | 0.45 | 4 / 10 | 0.20 |
| Risk Mitigation | 5% | 7 / 10 | 0.35 | 7 / 10 | 0.35 |
| **Total Opportunity Score**| **100%** | | **8.05 / 10** | | **7.20 / 10** |

*Analysis:* While C&I Solar has excellent capability fit (Nature Grid already installs solar), its high capital requirements and lower margins result in a score of **7.20**. Recruitment SaaS scores **8.05** due to superior capital efficiency and higher recurring revenue potential.

---

## 2. Cross-Business Synergy Mechanics

Operating diversified business lines is only advantageous if they leverage shared resources or customer relationships. The JBG portfolio offers several unique intersections:

```
                  [ JBG TECHNOLOGY ] (JCS)
                          /\
                         /  \
                        /    \  Software Development
                       /      \ & IoT Analytics
                      /        \
                     /          \
                    v            v
     [ AEQUALIS GLOBAL ]      [ NATURE GRID ]
       (Recruitment)              (Solar)
            |                        |
            v                        v
     Synergy #1: HR Tech      Synergy #2: Energy
       Recruitment SaaS        Telemetry & O&M SaaS
```

### Synergy 1: Aequalis Global + JCS $\rightarrow$ HR Tech SaaS
* **Value Capture:** Aequalis Global acts as an outsourcing agency, charging standard finder's fees. By partnering JCS and Aequalis to build and own a proprietary recruitment automation B2B SaaS, JBG converts transactional commissions into high-margin recurring licensing fees.
* **Operational Model:** JCS provides the software engineering team to build the platform. Aequalis Global acts as the design partner to validate user workflows. JCS writes and owns the code. Once validated, JBG packages this proprietary software and sells it directly as a monthly B2B SaaS to Aequalis's active enterprise clients, capturing high-margin recurring revenues.

### Synergy 2: Nature Grid + JCS $\rightarrow$ Solar Telemetry & Predictive O&M SaaS
* **Value Capture:** Solar panels are a low-margin hardware install. Adding telemetry and dashboard analytics allows Nature Grid to sell long-term maintenance contracts, securing high-margin recurring cash flows.
* **Operational Model:** Nature Grid installs sensors during setup. JCS builds a central cloud platform that collects power output data, runs predictive maintenance models, and alerts technicians before panels fail. The customer pays a monthly subscription for performance insights and priority service.

---

## 3. B2B Unit Economics Framework

Before funding any pilot, JBG must validate that the opportunity has a sustainable economic engine. We use three core B2B metrics:

### 1. Customer Acquisition Cost (CAC)
$$\text{CAC} = \frac{\text{Sales Costs} + \text{Marketing Costs}}{\text{Number of New Customers Acquired}}$$

*JBG Advantage:* By utilizing Aequalis Global’s active clients for Recruitment SaaS, or Nature Grid’s solar installation base for Telemetry SaaS, JBG's initial CAC will be extremely low (near zero inbound marketing spend).

### 2. Customer Lifetime Value (LTV)
$$\text{LTV} = \frac{\text{Average Monthly Revenue per Account} \times \text{Gross Margin \%}}{\text{Monthly Churn Rate}}$$

*Target:* For subscription software (SaaS), JBG must target an LTV to CAC ratio of **greater than 3.0x** to ensure long-term viability:
$$\frac{\text{LTV}}{\text{CAC}} > 3.0$$

### 3. CAC Payback Period
$$\text{Payback Period (Months)} = \frac{\text{CAC}}{\text{Average Monthly Revenue per Account} \times \text{Gross Margin \%}}$$

*Target:* JBG should aim for a payback period of **less than 12 months** for SaaS opportunities, and **less than 18 months** for core capital equipment (C&I Solar).

---

## 4. Strategic Risk Mitigation Matrix

Diversified expansion increases operational complexity. JBG must monitor and mitigate these primary risks:

| Risk Category | Specific Risk | Impact | Mitigation Strategy |
| :--- | :--- | :---: | :--- |
| **Operational** | Siloed corporate culture blocks collaboration. | High | Appoint a Group Synergy Officer. Establish cross-business bonuses tied to shared lead conversion. |
| **Technical** | JCS software developers lack specialized IoT/Solar expertise. | Medium | Hire a senior IoT systems architect for the Solar Telemetry project. Do not rely entirely on generalist developers. |
| **Regulatory** | Solar net metering and subsidy policy changes. | High | Diversify Nature Grid’s operations across multiple states in India to avoid dependence on one state's solar policy. |
| **Market** | Competitive saturation in HR Tech/SaaS. | Medium | Avoid broad applicant tracking systems. Build hyper-focused vertical features specifically for Aequalis Global's target niches (e.g., manufacturing or IT recruitment). |
| **Financial** | Capital exhaustion due to slow-payback projects. | High | Enforce strict milestone gates: if an opportunity does not achieve MVP customer pre-sales within 60 days of validation phase, kill it. |
