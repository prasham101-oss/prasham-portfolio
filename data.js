// ============================================================
//  data.js — All site content lives here.
//  To publish a new entry: set status to "published" and fill fields.
//  No other file needs to change.
// ============================================================

const marketTheses = [
  {
    id: "alt-energy",
    title: "Alternative Energy",
    subtitle: "Nuclear, Geothermal & Waste-to-Energy",
    sector: "Energy",
    date: "2025",
    status: "published",
    image: "https://images.unsplash.com/photo-1630142895963-6996ae6b3a5b?w=1200&q=80&auto=format&fit=crop",
    execSummary: "Renewable energy — spanning geothermal, nuclear, and waste-to-energy — is entering a new phase of capital formation, driven by hyperscaler demand for clean baseload power and converging global policy frameworks. India is now replicating the conditions that catalysed the US energy transition, with significant investment opportunities emerging across the capital stack.",
    usThemes: [
      {
        heading: "Pilot-Stage Capital Formation",
        body: "Companies with first-of-a-kind technologies at the pilot or demonstration stage are attracting significant interest from late-stage and infrastructure investors. Capital is increasingly being allocated across both the technology and execution layers, with combined-entity raises proving particularly well received by the market."
      },
      {
        heading: "Narrowing Valley of Death",
        body: "The funding gap between pilot stage and Final Investment Decision (FID) has narrowed considerably. This reduction in the traditional 'valley of death' for energy start-ups reflects growing investor confidence in validated technologies and the maturing of the sector's capital markets."
      },
      {
        heading: "Hyperscaler Offtake Agreements",
        body: "Data centre hyperscalers — Google, Meta, and Amazon — are signing offtake agreements and PPAs with next-generation energy companies that have validated their technologies through proof-of-concept and test runs, even before reaching FID. This provides critical revenue visibility for early-stage developers."
      },
      {
        heading: "Sizeable Series Rounds Reducing Project Finance Dependence",
        body: "Next-generation energy companies are raising Series rounds in excess of hundreds of millions of dollars to fund development from test runs through Commercial Operation Date (COD). This reduces dependence on project finance markets amid geopolitical uncertainty and heightened energy price volatility."
      },
      {
        heading: "Operational Exposure Requirements Across the Supply Chain",
        body: "Capital raises increasingly require providers to maintain operational exposure. SMR component manufacturers and reactor technology providers are expected to maintain equity participation in first commercial projects until operational status is achieved, aligning economic incentives with execution."
      },
      {
        heading: "Public Market Access Post-COD",
        body: "A growing number of companies are accessing public markets through IPOs and SPACs following COD of their first projects and ahead of revenue realisation from hyperscaler PPAs. This creates a structured pathway from development-stage capital to public equity markets."
      },
      {
        heading: "Long-Term Transition to Geothermal and Nuclear",
        body: "While data centres currently rely on natural gas turbines to ease pressure on the grid, the long-term transition is expected to favour geothermal and nuclear solutions as the most viable forms of clean baseload power for hyperscalers at scale."
      }
    ],
    indiaContext: [
      {
        heading: "Policy Framework Mirrors the US Inflation Reduction Act",
        body: "India has introduced legislation and initiatives including the SHANTI Act, Nuclear Energy Mission, National Policy on Geothermal, and National Green Hydrogen Mission. These developments closely resemble the policy groundwork that preceded the US Inflation Reduction Act, which catalysed a wave of accelerated investment across the alternative energy sector."
      },
      {
        heading: "Solar Land Constraints Creating Nuclear and Geothermal Tailwinds",
        body: "Solar remains India's largest renewable energy source, growing at a CAGR approaching 40%. However, land availability is a structural constraint that is expected to become more pronounced over time, limiting the scalability of industrial-sized solar farms and creating significant demand pull for nuclear and geothermal alternatives."
      },
      {
        heading: "100GW Nuclear Target Requires Private Capital",
        body: "India has set a stated target of 100GW of nuclear capacity by 2047, including 220 indigenous SMRs. While India has demonstrated expertise in thorium reactors and fuel innovation, achieving this target will require substantial private capital, despite the sector currently being tightly controlled by NTPCI."
      },
      {
        heading: "Evolution Towards a PPP Model for Nuclear",
        body: "The nuclear sector is expected to evolve towards a Public-Private Partnership model, where NTPCI retains responsibility for fuel supply and governance, while reactors are operated by Indian private sector conglomerates backed by external capital — mirroring the structure emerging in the US and UK."
      },
      {
        heading: "Macro Factors Accelerating the Energy Transition",
        body: "External factors, including geopolitical conflict and the depreciation of the INR against the USD, have accelerated the shift towards alternative energy as oil and gas prices continue to rise. This macro backdrop materially strengthens the investment case for domestic energy independence."
      },
      {
        heading: "Broad Investment Opportunity Across Sub-Sectors",
        body: "Geothermal, battery storage, EVs, and waste-to-energy through biopellets are all expected to attract substantial public and private investment as India pursues greater energy independence. These sectors represent the next wave of capital deployment beyond solar."
      }
    ],
    conclusion: "Alternative energy in India is at an inflection point — policy frameworks are in place, capital is beginning to flow, and the hyperscaler-driven demand narrative from the US is beginning to replicate domestically. The most attractive opportunities lie at the intersection of proven technology, policy support, and private capital deployment, particularly in nuclear and geothermal where India currently lacks sufficient domestic capital."
  },
  {
    id: "it-services",
    title: "IT Services",
    subtitle: "AI Disruption & the Next Generation of Indian Consulting",
    sector: "Technology",
    date: "2025",
    status: "published",
    image: "https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?w=1200&q=80&auto=format&fit=crop",
    execSummary: "The introduction of AI into the corporate workforce is fundamentally restructuring the global IT services and consulting landscape. Traditional outsourcing models are under structural pressure, and the firms — and investors — that correctly identify the emerging AI-native model will be best positioned for the next decade of value creation.",
    usThemes: [
      {
        heading: "AI Commoditising Traditional Consulting Functions",
        body: "Traditional consulting functions — including pattern recognition, data analysis, and report generation — have become increasingly commoditised. Software programming and maintenance activities are also becoming more accessible through LLMs, fundamentally altering the unit economics of the consulting model and compressing margins on legacy service lines."
      },
      {
        heading: "Shift to Agile, AI-Native Firms",
        body: "The consulting model is shifting away from large incumbents towards smaller and more agile firms with the speed, execution capabilities, and governance frameworks required to help enterprises become AI-native. This has driven increased demand for pure-play AI projects, including agent creation for repetitive tasks across SMB and mid-market clients."
      },
      {
        heading: "Client Bifurcation: Category 1 vs Category 2",
        body: "Projects have bifurcated based on client profiles. Category 1 clients (Mag 7 and technology leaders) are focused on governance frameworks, infrastructure standards, and token optimisation. Category 2 clients (Fortune 500, mid-market, and SMBs outside tech) are primarily seeking workflow automation, productivity enhancement, and AI upskilling — representing the largest source of future demand."
      },
      {
        heading: "Outcome-Based Commercial Models",
        body: "Commercial models have shifted from fixed-fee and time-and-material contracts towards outcome-based and success-linked structures. Clients increasingly expect consulting firms to share in the productivity gains generated through AI, while traditional labour arbitrage models have become less effective as a competitive differentiator."
      },
      {
        heading: "Joint Ventures and Proprietary IP as a New Revenue Model",
        body: "An emerging model involves using proprietary IP and AI capabilities to develop new products and solutions. These initiatives are typically structured as joint ventures between clients and consulting firms, reducing upfront investment requirements while ensuring the consulting firm maintains economic alignment and long-term participation in the value created."
      }
    ],
    indiaContext: [
      {
        heading: "Reversal of the Outsourcing Model",
        body: "India has historically been the services capital of the world, with firms such as TCS, Infosys, and Wipro generating growth through exports to large US enterprises. This trend is beginning to reverse as clients increasingly bring work in-house using AI, making large outsourcing contract wins increasingly difficult to sustain at historical growth rates."
      },
      {
        heading: "Mid-Market and SMB as the Growth Pocket",
        body: "Opportunities remain within the mid-market and SMB segments, where enterprise governance expertise can support AI upskilling initiatives and Agentic AI workflow deployments. This segment is expected to be the most resilient and fastest-growing area for Indian IT services firms over the medium term."
      },
      {
        heading: "Inorganic Expansion into AI-First Markets",
        body: "Given the industry's limited organic growth outlook, Indian consulting firms have increasingly pursued strategic inorganic expansion. The US and European markets are particularly attractive, with larger players seeking acquisitions of AI-first and agile firms serving the mid-market segment."
      },
      {
        heading: "GCCs as AI Training Grounds",
        body: "Global Capability Centers (GCCs) are increasingly becoming training grounds for AI LLMs, driving a broader push towards intelligence across functions including finance, legal, sales, accounting, and customer support. India's GCC ecosystem positions it as a critical node in the global AI value chain."
      },
      {
        heading: "Co-Development and JV Models Gaining Traction",
        body: "Firms such as EY are making additional investments in strategically important projects where products and solutions can be developed alongside clients using their IP. These co-development agreements and joint ventures represent the next evolution of the Indian IT services model beyond traditional staffing."
      },
      {
        heading: "AI-First Will Define the Next Generation",
        body: "The next iteration of Indian consulting firms is likely to be AI-first. While some traditional incumbents will successfully adapt, others are unlikely to survive the transition. Project requirements are expected to continue differentiating between Category 1 and Category 2 clients, with agility and AI fluency becoming the primary competitive advantages."
      }
    ],
    conclusion: "The Indian IT services sector is undergoing a structural reset. The firms that successfully pivot from labour arbitrage to AI-native models — through organic investment, inorganic acquisition, or joint venture structures — will emerge as the defining players of the next cycle. For investors, the most attractive opportunities lie in identifying AI-first disruptors and the acquirers best positioned to consolidate the mid-market."
  },
  {
    id: "food-distribution",
    title: "Food Distribution",
    subtitle: "Agriculture, Storage & Distribution",
    sector: "Consumer & Agriculture",
    date: "2025",
    status: "published",
    image: "https://plus.unsplash.com/premium_photo-1682147934977-15db041ae233?w=1200&q=80&auto=format&fit=crop",
    execSummary: "India's food distribution sector sits at the convergence of structural inefficiency and rapid modernisation. With cold-chain infrastructure at a fraction of developed-market penetration and quick-commerce creating new demand dynamics, the sector offers substantial investment opportunities across storage, logistics, and platform businesses.",
    usThemes: [
      {
        heading: "Technology-Integrated Value Chain",
        body: "Technology has been integrated across every aspect of the food and distribution ecosystem to meet regulatory requirements and improve efficiency. AI is increasingly deployed across production, processing, storage, and distribution functions to enhance throughput and support robotics applications at scale."
      },
      {
        heading: "Food Wastage as a Core Efficiency Metric",
        body: "Food wastage is treated as a key performance indicator across the industry. Losses within processing and distribution are typically limited to 2–5% due to investments in refrigeration, storage practices, and cold-chain logistics. Retail remains the largest source of wastage at 10–15%, primarily driven by overstocking and SKU proliferation."
      },
      {
        heading: "Value Addition and Customer Engagement Enabling Premium Pricing",
        body: "Value addition initiatives are prevalent across food manufacturing businesses. Experiences such as apple picking at orchards, wine tastings at vineyards, and dining within greenhouses enhance perceived value and enable premium pricing, even when they do not directly translate into sustained brand loyalty."
      },
      {
        heading: "B2B-First Distribution Model with Tight Radius Economics",
        body: "Distribution businesses typically operate within a 2 to 2.5-hour radius, with increasing emphasis on delivery speed and SKU availability. These businesses are predominantly B2B focused, integrating directly with grocery stores and restaurants. B2C exposure is managed through marketplace partnerships with Amazon Fresh, DoorDash, and Weee for hyper-local fulfilment."
      },
      {
        heading: "Convenience Premium and Last-Mile Economics",
        body: "Most distributors rely on grocery stores and online marketplaces for last-mile delivery, with consumers willing to pay a modest premium for convenience. Operational repeatability and B2B efficiency remain the primary focus, with B2C platforms serving as an incremental revenue and brand channel."
      }
    ],
    indiaContext: [
      {
        heading: "Highly Fragmented Supply Chain with Structural Losses",
        body: "India's agricultural supply chain remains highly fragmented, with multiple intermediary layers before products reach the end consumer. APMC and Mandi-based systems alone account for losses of up to 12%, excluding losses across the broader supply chain. This fragmentation creates numerous inefficiencies and reduces incentives for investment in storage and handling technology."
      },
      {
        heading: "Cold-Chain Investment Acceleration",
        body: "The structural inefficiency of the supply chain has prompted accelerated investment in refrigeration infrastructure and cold-chain transportation. Players including Adani, Mahindra, Reliance, Indicold, and Snowman Logistics are actively building out capacity to reduce food wastage and improve distribution economics across the country."
      },
      {
        heading: "Disintermediation Through Technology Platforms",
        body: "Companies such as KisanKonnect are attempting to reduce physical handling and eliminate intermediary layers between farmers and consumers. This disintermediation trend, while at an early stage, mirrors the B2B platform consolidation seen in the US market and represents a significant long-term investment opportunity."
      },
      {
        heading: "Limited Value Addition at the Farm Level",
        body: "The fragmented nature of agricultural production limits the ability of farmers to undertake value-addition activities, resulting in crops primarily being sold as raw materials to food processors. While experiential brands such as Sula have begun to emerge, India remains in the early stages of developing consumer-facing premium food and agri-tourism offerings."
      },
      {
        heading: "Quick-Commerce Driving New B2B Infrastructure Demand",
        body: "The rise of quick-commerce platforms has created new demand for B2B distribution services and micro-fulfilment infrastructure. However, the expectation of 10-minute delivery has presented operational challenges for larger distribution centres, requiring significant investment in urban logistics networks."
      },
      {
        heading: "Traceability Investment and Greenhouse Farming",
        body: "To cater to consumers seeking both value and premium products, grocery stores and marketplaces have strengthened traceability across their sourcing and supply chains. This has driven increased investment in greenhouse farming, aquaculture, and related segments, with government subsidies providing additional support for domestic food security initiatives."
      }
    ],
    conclusion: "India's food distribution sector is transitioning from a fragmented, intermediary-heavy system towards a technology-enabled, efficiency-first model. The investment opportunity is concentrated in cold-chain infrastructure, B2B distribution platforms, and businesses that can bridge the gap between fragmented farm-level production and the growing quick-commerce demand for speed and traceability."
  }
];

const investmentIdeas = [
  {
    id: "placeholder-1",
    company: "Coming Soon",
    type: "—",
    sector: "—",
    hook: "Investment thesis in progress.",
    status: "coming-soon",
  },
  {
    id: "placeholder-2",
    company: "Coming Soon",
    type: "—",
    sector: "—",
    hook: "Investment thesis in progress.",
    status: "coming-soon",
  },
  {
    id: "placeholder-3",
    company: "Coming Soon",
    type: "—",
    sector: "—",
    hook: "Investment thesis in progress.",
    status: "coming-soon",
  },
  {
    id: "placeholder-4",
    company: "Coming Soon",
    type: "—",
    sector: "—",
    hook: "Investment thesis in progress.",
    status: "coming-soon",
  },
];

const indiaPicks = [
  {
    id: "medulance",
    name: "Medulance",
    sector: "Healthcare & Technology",
    stage: "Series A",
    status: "published",
    logo: "logo-medulance.png",
    opportunityStatus: "Personal Investment",
    website: "https://medulance.com",
    companyDescription: "India's first GPS-based technology platform for emergency medical response and ambulance services.",
    companyUpdate: "Secured funding from Namita Thapar, Aman Gupta and Peyush Bansal on Shark Tank India. Raised a $3 million Series A round led by Alkemi Growth Capital and Dexter Capital.",
    highlights: [
      {
        heading: "Evolution of Client Mix",
        body: "Prior to the Series A, a majority of Medulance's revenue was derived from government contracts and PSUs, characterised by thin margins, penalties and delayed payments that disrupted working capital cycles. Management has since shifted its focus towards corporate clients and hospitals, with these segments now accounting for over 50% of revenue compared to 23% in 2023."
      },
      {
        heading: "Introduction of New Services and Products",
        body: "Medulance has expanded beyond ambulance operations to offer MeduClinic (fully staffed medical rooms), MeduAlert (subscription-based emergency alert platform), MeduTech (AI-driven dispatching, GPS tracking and hospital telemetry integration) and Medulance Academy (training in first aid, CPR and EMT certification)."
      },
      {
        heading: "Innovation in Ambulance Fleet",
        body: "The company introduced India's first 5G-enabled ambulance, featuring AI-powered triaging and live hospital telemetry integration. This enables care providers to access critical patient information before arrival at the emergency room, reducing response times and improving patient outcomes."
      },
      {
        heading: "Scale of Operations",
        body: "Medulance operates a fleet of more than 7,500 ambulances across over 100 cities and towns through a mix of owned and leased vehicles. By scale, it is one of the largest ambulance networks in the country, operating in a segment that remains largely insulated from the disruptive effects of AI."
      },
      {
        heading: "Inelastic Demand and Structural Growth Tailwinds",
        body: "Emergency response services are essential in nature, resulting in largely inelastic demand. Corporate safety protocols and large-scale events increasingly require ambulances on-site. India's emergence as a medical tourism destination is expected to be an additional long-term demand driver."
      }
    ]
  },
  {
    id: "luzo",
    name: "Luzo",
    sector: "Consumer Technology",
    stage: "Seed",
    status: "published",
    logo: "logo-luzo.png",
    opportunityStatus: "Investment sourced for the UCLA Endowment Fund",
    website: "https://www.luzo.app",
    companyDescription: "Marketplace for premium beauty salons, spas and dermatology clinics — India's equivalent of an asset-light Airbnb for personal care.",
    companyUpdate: "Part of the 100X.VC cohort of 2023. Raised a $550k Seed round led by Enrission India Capital. Secured funding from Kunal and Viraj Bahl on Shark Tank India.",
    highlights: [
      {
        heading: "User Momentum and Growth",
        body: "Luzo has amassed over 450,000 sign-ups, with more than 70,000 users transacting on the platform. Monthly bookings have surpassed 75,000, while the supply side has grown to over 2,000 verified salons, spas and clinics across 6 cities."
      },
      {
        heading: "Marketplace Business Model",
        body: "Similar to Amazon, Uber and Airbnb, success depends on balancing demand and supply. Customers benefit from discovering providers, comparing services and booking appointments at no additional cost, while partner salons gain digital visibility and utilise Luzo as a growth partner to fill otherwise idle appointment slots."
      },
      {
        heading: "Market Fit with Rising Middle-Class Spending",
        body: "Rising per capita GDP and increasing discretionary income are driving greater spending on experiences among the Indian middle class. Luzo's offerings are well positioned for consumers seeking premium experiences while remaining value conscious. The ability to compare multiple options, read reviews and access discounts creates a mutually beneficial proposition."
      },
      {
        heading: "Consumer Data as a Competitive Moat",
        body: "Growing booking volumes have enabled Luzo to build and analyse customer data to target specific demographics, particularly young employed women with high spending power and strong personal care preferences. This data-driven approach allows promotions to be directed to the right audience at the right time, improving marketing ROI for platform partners."
      }
    ]
  },
  {
    id: "greenlit360",
    name: "GreenLit360",
    sector: "Sustainability",
    stage: "Seed",
    status: "published",
    logo: "logo-greenlit.jpeg",
    opportunityStatus: "Investment sourced for the UCLA Endowment Fund",
    website: "https://www.greenlit360.com",
    companyDescription: "Provider of end-to-end sustainability solutions for large-scale live events including concerts and conferences — working with artists including Coldplay, Ed Sheeran, A.R. Rahman and Arijit Singh.",
    companyUpdate: "Raised a Seed round from Rainmatter by Zerodha. Has worked with major global and Indian artists across their India and Middle East tours.",
    highlights: [
      {
        heading: "Business Evolution: From Products to Services",
        body: "Greenlit initially launched Refillable, a platform eliminating single-use plastics through partnerships with P&G and HUL, supplying products in steel containers with monthly refill services. The company later introduced Cupable, a reusable cup solution for concerts, which served as the entry point into broader sustainability services including carbon audits, battery energy storage systems, green logistics and waste management."
      },
      {
        heading: "Increasing Live Events Market",
        body: "The company's core revenue mix has shifted from products towards sustainability services for live events. The growing number of concerts and events, supported by rising disposable incomes, is expected to drive repeat demand, particularly as more global artists perform across India and the Middle East."
      },
      {
        heading: "Favourable Regulatory Tailwinds",
        body: "The expansion of live events has created favourable regulatory tailwinds. Municipal authorities across Tier-1 cities have introduced requirements around waste management and energy usage, increasing demand for players such as Greenlit that possess the expertise to manage compliance and support carbon offset initiatives."
      },
      {
        heading: "Content Creator and Sustainable Marketing Strategy",
        body: "Greenlit has recently partnered with sustainability-focused content creators to amplify authentic narratives around conscious consumption. The company has also launched a sustainable marketing solution enabling brands to leverage these creators and benefit from Greenlit's integration with live event audiences."
      }
    ]
  },
  {
    id: "adsys",
    name: "Adsys",
    sector: "Healthcare Technology",
    stage: "Seed",
    status: "published",
    logo: "https://adsys-assets.s3.ap-south-1.amazonaws.com/logo.png",
    opportunityStatus: "Investment sourced for the UCLA Endowment Fund",
    website: "https://adsys.in",
    companyDescription: "Developer of an AI-powered, portable complete blood count (CBC) testing machine that requires less than 0.03ml of blood — making diagnostic testing accessible in remote and resource-constrained settings.",
    companyUpdate: "Part of the 100X.VC cohort of 2023 and the Social Alpha incubator and accelerator. Raised a Seed round from Rainmatter by Zerodha.",
    highlights: [
      {
        heading: "Minimally Invasive Healthcare Technology",
        body: "Adsys is developing an AI-powered CBC testing machine that leverages recurring patterns across platelets, RBCs and WBCs to generate bloodwork insights while reducing the time, cost and maintenance associated with conventional blood testing machines. The device requires less than 0.03ml of blood and uses imaging to analyse millions of data points, enabling earlier detection of serious illnesses."
      },
      {
        heading: "Razor-and-Blade Business Model",
        body: "Adsys offers customers the option to purchase machines outright at cost price or lease them at fixed monthly payments. While the machines themselves are expected to operate at breakeven or modest losses, recurring revenues are generated through single-use slides required for each blood test — a model analogous to the approach used by printer manufacturers."
      },
      {
        heading: "Early Client Commitments Despite Prototype Stage",
        body: "Although the devices remain in the prototyping and testing stage, Adsys has already secured commitments from government and private hospitals. Approximately 20 prototype units are currently being deployed for field testing, with a conditional order for an additional 45 units subject to accuracy validation."
      },
      {
        heading: "Market Opportunity and Government Access",
        body: "Through its association with Social Alpha, Adsys has gained support in accessing government hospitals for testing and commercialisation. The combination of portability, minimal training requirements and low testing costs makes the product particularly suited for remote government-operated healthcare facilities and India's growing medical tourism sector."
      }
    ]
  }
];
