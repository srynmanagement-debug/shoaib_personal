export interface DevelopmentProject {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Hospitality" | "Land Development" | "Specialised Developments";
  location: string;
  region: "North Goa" | "South Goa" | "Central Goa";
  status: "Unpublished Feasibility Study" | "Draft Masterplan Concept" | "Private Advisory Placement";
  isPlaceholder: boolean;
  tagline: string;
  overview: string;
  developmentThesis: string;
  landOrBuiltArea: string;
  suitableFor: string[];
  keyAttributes: string[];
  imageUrl: string;
  imageAlt: string;
}

export const developmentProjects: DevelopmentProject[] = [
  {
    id: "proj-01",
    slug: "residential-enclave-concept",
    title: "[Draft Concept] Low-Density Residential Enclave",
    category: "Residential",
    location: "North Goa (Confidential / Pre-Approval)",
    region: "North Goa",
    status: "Unpublished Feasibility Study",
    isPlaceholder: true,
    tagline: "Topography-led residential concept balancing native canopy with contemporary privacy.",
    overview: "Illustrative masterplan feasibility study evaluating contour-based villa footprints, tree preservation, and rainwater percolation. Displayed as an unpublished structural placeholder awaiting client development pipeline clearance.",
    developmentThesis: "Demonstrates Suheb Naik's methodology for evaluating buildable slopes and natural drainage before finalizing low-density residential densities.",
    landOrBuiltArea: "Preliminary Feasibility Envelope (Subject to Title Vetting)",
    suitableFor: ["Private Residential Buyers", "Boutique Villa Investors", "Co-Development Partners"],
    keyAttributes: [
      "Natural slope contours integrated into split-level footprints",
      "Rainwater harvesting & sustainable drainage circulation",
      "Private access road planning with vernacular stone detailing",
      "Placeholder data: formal client project metrics pending sign-off",
    ],
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Representative architectural study of a modern tropical residence (stock visual reference, not an actual project)",
  },
  {
    id: "proj-02",
    slug: "hospitality-retreat-concept",
    title: "[Draft Concept] Hinterland Hospitality & Eco-Retreat",
    category: "Hospitality",
    location: "Goa Hinterland (Site Under Evaluation)",
    region: "North Goa",
    status: "Draft Masterplan Concept",
    isPlaceholder: true,
    tagline: "Eco-sensitive hospitality concept with light-touch pavilions and agrarian buffers.",
    overview: "Conceptual zoning feasibility model exploring a low-impact wellness retreat. Positioned to test water table sustainability, acoustic buffers, and vernacular architecture away from congested coastal strips.",
    developmentThesis: "High-yield hospitality demand shifting from noisy beachfronts toward tranquil, regenerative wellness sanctuaries with high average daily rates.",
    landOrBuiltArea: "Preliminary Masterplan Envelope (Unpublished Draft)",
    suitableFor: ["Boutique Hoteliers", "Hospitality Investment Funds", "NRI Investors"],
    keyAttributes: [
      "Lightweight stilted construction minimizing ground disruption",
      "Regenerative landscape design with native orchards",
      "Central pavilion housing wellness and dining facilities",
      "Placeholder data: subject to formal statutory filings and client release",
    ],
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Representative architectural photograph of a tropical resort pavilion (stock visual reference, not an actual project)",
  },
  {
    id: "proj-03",
    slug: "riverfront-heritage-adaptation",
    title: "[Draft Concept] Riverfront Heritage Conservation & Estate",
    category: "Specialised Developments",
    location: "Central Goa (Riparian Zone Study)",
    region: "Central Goa",
    status: "Unpublished Feasibility Study",
    isPlaceholder: true,
    tagline: "Heritage conservation framework with riverfront buffers and ancestral laterite stabilization.",
    overview: "Methodological study for evaluating an ancestral riverfront structure. Evaluates laterite conservation, CRZ setback compliances, and sustainable private jetty ingress.",
    developmentThesis: "Heritage conservation married to sustainable waterfront infrastructure offers irreplaceable cultural value and generational wealth security.",
    landOrBuiltArea: "Riparian Parcel Feasibility (Under Diligence)",
    suitableFor: ["Heritage Collectors", "Private Family Offices", "Restoration Enthusiasts"],
    keyAttributes: [
      "Ancestral laterite masonry conservation methodology",
      "CRZ and riparian zone strict compliance planning",
      "Waterfront approach and slope protection analysis",
      "Placeholder entry: actual heritage assets pending client disclosure",
    ],
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Representative architectural photo of a riverfront villa terrace (stock visual reference, not an actual project)",
  },
  {
    id: "proj-04",
    slug: "land-parcel-subdivision-advisory",
    title: "[Draft Concept] Plateau Land Due Diligence & Masterplan",
    category: "Land Development",
    location: "North Goa (Advisory Framework)",
    region: "North Goa",
    status: "Private Advisory Placement",
    isPlaceholder: true,
    tagline: "Strategic land acquisition and zoning subdivision advisory methodology.",
    overview: "Technical diligence framework inspecting legal right-of-way, Form I & XIV revenue boundaries, TCP settlement zoning ratios, and monsoon stormwater engineering.",
    developmentThesis: "Thorough ground-level physical and legal vetting of raw land converts unorganized acreage into secure, high-potential development assets.",
    landOrBuiltArea: "Aggregated Land Parcel Study (Confidential Diligence)",
    suitableFor: ["Land Investors", "Consortium Buyers", "Long-term Land Bankers"],
    keyAttributes: [
      "Rigorous title diligence framework and ancestral mutation checks",
      "Contour-guided access road network & stormwater engineering",
      "Buildable envelope calculations under Town & Country Planning norms",
      "Placeholder entry: specific investor opportunities held under private NDA",
    ],
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Representative landscape photograph of Goa countryside (stock visual reference, not an actual project)",
  },
];
