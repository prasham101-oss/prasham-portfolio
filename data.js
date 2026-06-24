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
    execSummary: "",
    usThemes: [
      {
        heading: "Pilot-Stage Capital Formation",
        body: "Companies with first-of-a-kind technologies at the pilot or demonstration stage are attracting significant interest from late-stage and infrastructure investors. Those raising capital at a combined entity level, with equity allocated across both the technology and execution layers, have been particularly well received."
      },
      {
        heading: "Narrowing Valley of Death",
        body: "The funding gap between pilot and FID has narrowed considerably leading to what was earlier known as the valley of death for energy start-ups to shrink in size."
      },
      {
        heading: "Hyperscaler Offtake Agreements",
        body: "Data centre hyperscalers such as Google, Meta and Amazon are signing offtake agreements and PPAs with next-generation energy companies that have validated their technologies through proof-of-concept and test runs, despite not yet reaching FID."
      },
      {
        heading: "Sizeable Series Rounds Reducing Project Finance Dependence",
        body: "Next-generation energy companies are raising sizeable Series rounds, often in excess of hundreds of millions of dollars, to fund development from test runs through COD. This reduces dependence on project finance markets amid geopolitical uncertainty and heightened energy price volatility."
      },
      {
        heading: "Operational Exposure Requirements Across the Supply Chain",
        body: "Capital raises across the supply chain are increasingly incorporating structures that require providers to have operational exposure. For example, SMR component manufacturers and reactor technology providers are expected to maintain equity participation in first commercial projects until operational status is achieved."
      },
      {
        heading: "Public Market Access Post-COD",
        body: "A growing number of companies are accessing public markets through IPOs and SPACs to fund late-stage development following COD of their first projects and ahead of revenue realization from hyperscaler PPAs. While data centres currently rely on natural gas turbines to ease pressure on the grid, the long-term transition is expected to favour geothermal and nuclear solutions."
      }
    ],
    indiaContext: [
      {
        heading: "Policy Framework Mirrors the US Inflation Reduction Act",
        body: "India has introduced legislation and initiatives such as the SHANTI Act, Nuclear Energy Mission, National Policy on Geo-thermal and National Green Hydrogen Mission. These developments resemble the policy groundwork observed in the US similar to the Inflation Reduction Act, which was the catalyst for accelerated investments across the alternative energy sector."
      },
      {
        heading: "Solar Land Constraints Creating Nuclear and Geothermal Tailwinds",
        body: "Solar remains India's largest renewable energy source and continues to grow at a CAGR approaching 40%. However, land availability remains a structural constraint which is expected to become more pronounced over time with population growth, limiting the scalability of industrial sized solar farms."
      },
      {
        heading: "100GW Nuclear Target Requires Private Capital",
        body: "Due to this constraint with solar there has been a stronger push towards nuclear energy, with a stated target of 100GW of capacity by 2047. While India has demonstrated expertise in thorium reactors and fuel innovation, these technologies remain at the prototyping/testing stages. Achieving the target of 220 indigenous SMRs will require private capital despite the sector currently being tightly controlled by NTPCI."
      },
      {
        heading: "Evolution Towards a PPP Model for Nuclear",
        body: "Over time, this is likely to evolve closer to a PPP model where NTPCI will retain responsibility for fuel supply and governance, while reactors are operated by Indian private sector conglomerates backed by external capital."
      },
      {
        heading: "Macro Factors Accelerating the Energy Transition",
        body: "External factors such as the Iran War and the depreciation of the INR against the USD have accelerated the shift towards alternative energy as oil and gas prices continue to rise. Sectors including geothermal, battery storage, EVs and waste-to-energy through biopellets are expected to attract substantial public and private investment as India pursues greater energy independence."
      }
    ],
    conclusion: ""
  },
  {
    id: "it-services",
    title: "IT Services",
    subtitle: "AI Disruption & the Next Generation of Indian Consulting",
    sector: "Technology",
    date: "2025",
    status: "published",
    image: "https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?w=1200&q=80&auto=format&fit=crop",
    execSummary: "",
    usThemes: [
      {
        heading: "AI Commoditising Traditional Consulting Functions",
        body: "With the introduction of AI into the corporate workforce, many traditional consulting functions such as pattern recognition, data analysis and report generation have become increasingly commoditized. Software programming and maintenance activities are also becoming more accessible through LLMs."
      },
      {
        heading: "Shift to Agile, AI-Native Firms",
        body: "Due to this disruption, the consulting model has shifted away from large incumbents towards smaller and more agile firms with the speed, execution capabilities and governance frameworks required to help enterprises become AI-native. This has driven increased demand for pure-play AI projects, including agent creation for repetitive tasks across SMB and mid-market clients."
      },
      {
        heading: "Client Bifurcation: Category 1 vs Category 2",
        body: "Projects have increasingly bifurcated based on client profiles: Category 1 clients comprising the Mag 7 and technology leaders, and Category 2 clients comprising Fortune 500 companies, mid-market businesses and SMBs outside the technology sector. Category 1: Technology leaders are at the forefront of AI adoption, with employees increasingly using vibe coding to develop solutions for day-to-day challenges. Projects in this segment are largely focused on building governance frameworks and infrastructure to ensure internally developed solutions adhere to enterprise standards and do not disrupt existing products or systems. A growing area of focus is token optimization and educating employees on efficient token usage amid rising AI-related spending. Category 2: These clients are generally AI laggards, with projects primarily centered around workflow automation, productivity enhancement and AI education and upskilling initiatives. This segment is expected to be the largest source of future demand for AI-related services."
      },
      {
        heading: "Outcome-Based Commercial Models",
        body: "Commercial models have shifted from fixed-fee and time-and-material contracts towards outcome-based and success-linked structures. Clients increasingly expect consulting firms to share the productivity gains generated through AI, while traditional labour arbitrage models have become less effective."
      },
      {
        heading: "Joint Ventures and Proprietary IP as a New Revenue Model",
        body: "Another emerging model involves using proprietary IP and AI capabilities to develop new products and solutions. These initiatives are typically structured as joint ventures between clients and consulting firms, reducing upfront investment requirements for clients while ensuring the consulting firm maintains economic alignment and long-term participation."
      }
    ],
    indiaContext: [
      {
        heading: "Reversal of the Outsourcing Model",
        body: "India has historically been the services capital of the world, with firms such as TCS, Infosys and Wipro generating growth through exports to large US enterprises. This trend is beginning to reverse as clients increasingly bring work in-house using AI, making large outsourcing contracts wins a thing of the past."
      },
      {
        heading: "Mid-Market and SMB as the Growth Pocket",
        body: "Traditional staffing and outsourcing projects are becoming less relevant, with the need to be agile and AI-first emerging as the primary challenge for both companies and investors. However, opportunities remain within the mid-market and SMB segments, where enterprise governance expertise can support AI upskilling initiatives and Agentic AI workflow deployments."
      },
      {
        heading: "Inorganic Expansion into AI-First Markets",
        body: "Given the industry's limited growth outlook, consulting firms have increasingly pursued strategic inorganic expansion. The US and European markets are particularly attractive, with larger players seeking acquisitions of AI-first and agile firms serving the mid-market segment."
      },
      {
        heading: "GCCs as AI Training Grounds",
        body: "Global Capability Centers (GCCs) are increasingly becoming training grounds for AI LLMs, driving a broader push towards intelligence across functions such as finance, legal, sales, accounting and customer support."
      },
      {
        heading: "Co-Development and JV Models Gaining Traction",
        body: "Firms such as EY are making additional investments in strategically important projects where products and solutions can be developed alongside clients using their IP. These initiatives are typically structured through co-development agreements or joint ventures."
      },
      {
        heading: "AI-First Will Define the Next Generation",
        body: "The next iteration of Indian consulting firms is likely to be AI-first. While some traditional incumbents will successfully adapt, others are unlikely to survive the transition. Project requirements are also expected to continue differentiating based on Category 1 and Category 2 clients."
      }
    ],
    conclusion: ""
  },
  {
    id: "food-distribution",
    title: "Food Distribution",
    subtitle: "Agriculture, Storage & Distribution",
    sector: "Consumer & Agriculture",
    date: "2025",
    status: "published",
    image: "https://plus.unsplash.com/premium_photo-1682147934977-15db041ae233?w=1200&q=80&auto=format&fit=crop",
    execSummary: "",
    usThemes: [
      {
        heading: "Technology-Integrated Value Chain",
        body: "Technology has been integrated across every aspect of the food and distribution ecosystem to meet stringent regulatory requirements and improve efficiency. Most operators focus on a specific segment of the value chain, including production, processing and value addition, storage or distribution. AI is increasingly being deployed across these functions to enhance efficiency and support robotics applications."
      },
      {
        heading: "Food Wastage as a Core Efficiency Metric",
        body: "Food wastage is treated as a key efficiency metric. Losses within processing and distribution are typically limited to 2-5% due to investments in refrigeration, storage practices and cold-chain logistics. In contrast, retail remains the largest source of wastage, with losses of 10-15% primarily driven by overstocking."
      },
      {
        heading: "Value Addition and Customer Engagement Enabling Premium Pricing",
        body: "Value addition and customer engagement initiatives are prevalent across food manufacturing businesses. Experiences such as apple picking at orchards, wine tastings at vineyards and dining within greenhouses enhance perceived value and enable premium pricing, even when they do not directly translate into brand loyalty."
      },
      {
        heading: "B2B-First Distribution Model with Tight Radius Economics",
        body: "Distribution businesses typically operate within a radius of 2 to 2.5 hours, with an increasing emphasis on delivery speed and SKU availability throughout the day. These businesses are predominantly B2B focused, integrating with grocery stores and restaurants into their systems to ensure repeatability. On the B2C side, partnerships with marketplaces such as Amazon Fresh, DoorDash and Weee enable hyper-local fulfilment."
      },
      {
        heading: "Convenience Premium and Last-Mile Economics",
        body: "Most distributors rely on grocery stores and online marketplaces for last-mile delivery, with consumers willing to pay a modest premium for convenience. The primary focus remains on the B2B model, where operational repeatability drives efficiency."
      }
    ],
    indiaContext: [
      {
        heading: "Highly Fragmented Supply Chain with Structural Losses",
        body: "India's agricultural supply chain remains highly fragmented, with multiple intermediaries involved before products reach the end consumer. This creates numerous points of food wastage and reduces incentives for investment in technologies such as refrigeration, crate storage, packaging and grading systems. APMC & Mandis alone account for losses of up to 12%, excluding losses across the broader supply chain."
      },
      {
        heading: "Cold-Chain Investment Acceleration",
        body: "This has prompted increased investments in refrigeration infrastructure and cold-chain transportation, with players such as Adani, Mahindra, Reliance, Indicold and Snowman Logistics focusing on reducing food wastage. Companies such as KisanKonnect are also attempting to reduce physical handling and eliminate intermediary layers between farmers and consumers."
      },
      {
        heading: "Limited Value Addition at the Farm Level",
        body: "The fragmented nature of agricultural production limits the ability of farmers to undertake value-addition activities, resulting in crops primarily being sold as raw materials to food processors. Although customer engagement initiatives have begun to emerge through brands such as Sula and its wine tasting experiences, India remains in the early stages of developing experiential offerings. Demand is expected to increase as the Indian middle class becomes more willing to pay for such experiences."
      },
      {
        heading: "Quick-Commerce Driving New B2B Infrastructure Demand",
        body: "The rise of quick-commerce platforms has created demand for B2B distribution services, although the expectation of 10-minute delivery has presented challenges for larger distribution centers. While consumers have become increasingly accustomed to paying for convenience, they remain highly value conscious and are unlikely to pay excessive premiums."
      },
      {
        heading: "Traceability Investment and Greenhouse Farming",
        body: "To cater to consumers seeking both value and premium products, grocery stores and marketplaces have strengthened traceability across their sourcing and supply chains. This has driven increased investment in greenhouse farming, aquaculture and related segments, with government subsidies providing additional support."
      }
    ],
    conclusion: ""
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
    companyUpdate: [
      "Secured funding from Namita Thapar, Aman Gupta and Peyush Bansal on Shark Tank India.",
      "Raised a $3 million Series A round led by Alkemi Growth Capital and Dexter Capital."
    ],
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
    companyUpdate: [
      "Part of the 100X.VC cohort of 2023.",
      "Raised a $550k Seed round led by Enrission India Capital.",
      "Secured funding from Kunal and Viraj Bahl on Shark Tank India."
    ],
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
    companyUpdate: [
      "Raised a Seed round from Rainmatter by Zerodha.",
      "Has worked with major global and Indian artists across their India and Middle East tours."
    ],
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
    logo: "logo-adsys.avif",
    opportunityStatus: "Investment sourced for the UCLA Endowment Fund",
    website: "https://adsys.in",
    companyDescription: "Developer of an AI-powered, portable complete blood count (CBC) testing machine that requires less than 0.03ml of blood — making diagnostic testing accessible in remote and resource-constrained settings.",
    companyUpdate: [
      "Part of the 100X.VC cohort of 2023 and the Social Alpha incubator and accelerator.",
      "Raised a Seed round from Rainmatter by Zerodha."
    ],
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
