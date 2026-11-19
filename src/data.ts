export interface Question {
  id: number;
  c: string;  // category
  q: string;  // question
  a: string[]; // answers
  r: number;  // correct answer index
  e: string;  // explanation
}

export const CATEGORIES = [
  "MI License Law",
  "Agency",
  "Fair Housing",
  "Contracts",
  "Ownership",
  "Financing",
  "Math",
  "Appraisal",
  "Closing & Title",
  "MI-Specific",
];

export const questions: Question[] = [
  // ── PROPERTY OWNERSHIP ──────────────────────────────────────────────────────
  {
    id: 0,
    c: "Ownership",
    q: "John who owns his farm as a tenant by the entirety wishes to sell 2 acres out of his 5000-acre farm. What must he be concerned with?",
    a: ["His heir's approval", "His spouse's approval", "His tenant's occupancy rights", "Government rights"],
    r: 1,
    e: "Tenancy by the entirety is a form of ownership available only to married couples. Both spouses must consent to any conveyance of property."
  },
  {
    id: 1,
    c: "Ownership",
    q: "John received a 90-day permission to cross his neighbor's property with his vehicle. What type of arrangement did he have with his neighbor?",
    a: ["An easement", "An encroachment", "A license", "An appurtenance"],
    r: 2,
    e: "A license is a personal, temporary, revocable permission to use another's land. It does not run with the land and cannot be assigned."
  },
  {
    id: 2,
    c: "Ownership",
    q: "Sharon owns several investment properties. Occasionally, she falls behind on her bills and a lien is placed against the properties. Which of the following liens would most likely be a general (blanket) lien?",
    a: ["Property tax lien", "Construction lien", "Special assessments lien", "Income tax lien"],
    r: 3,
    e: "An income tax lien is a general (blanket) lien that attaches to all of a debtor's property. Property tax, construction, and special assessment liens are specific liens attached to a particular property."
  },
  {
    id: 3,
    c: "Ownership",
    q: "Which of the following involves obtaining a court order allowing access for property that is landlocked?",
    a: ["A granted easement", "An easement by reservation", "An easement by necessity", "A gross easement"],
    r: 2,
    e: "An easement by necessity is created by court order when a parcel of land is landlocked (has no access to a public road). The court grants the owner access across neighboring property."
  },
  {
    id: 4,
    c: "Ownership",
    q: "Seller wishes to take the perennial rose bushes with him upon selling the house. What should the agent advise the seller to do?",
    a: [
      "Nothing — roses are personal property and not included in the sale unless the buyer specifically asks",
      "The seller should exclude the roses in the purchase agreement",
      "The seller can remove the roses but only at the end of the season",
      "Any plants on the property must stay and be included in the sale"
    ],
    r: 1,
    e: "Perennial plantings are considered real estate (fixtures) because they grow back without annual cultivation. To remove them, the seller must exclude them in writing in the purchase agreement."
  },
  {
    id: 5,
    c: "Ownership",
    q: "Sue, John, Bill and Kimberly received a deed made to all of them as tenants in common. If the deed does not mention their ownership interest, what shares would be allocated to them?",
    a: [
      "Equal shares because they must have the unity of interest",
      "Equal shares because the deed does not specify that one of them would receive a larger interest than the other",
      "Unequal shares and the deed must be corrected because tenants in common may or may not have equal shares",
      "Unequal shares, because each one of the ladies will only receive 100% entireties"
    ],
    r: 1,
    e: "When a deed to tenants in common does not specify shares, the law presumes equal ownership. Tenants in common can hold unequal shares, but only if stated in the deed."
  },
  {
    id: 6,
    c: "Ownership",
    q: "A method of legally describing land that involves baselines and range lines is the:",
    a: ["Informal reference system", "Lot subdivision method", "Metes-and-bounds", "Rectangular survey system"],
    r: 3,
    e: "The Government Rectangular Survey System (rectangular survey system) uses principal meridians, base lines, range lines, and township lines to describe land. Michigan uses one principal meridian and one base line."
  },
  {
    id: 7,
    c: "Ownership",
    q: "An area of land that is one mile by one-mile square is called:",
    a: ["A township", "A section", "An acre", "A check"],
    r: 1,
    e: "A section is 1 mile × 1 mile = 640 acres. A township contains 36 sections. 1 acre = 43,560 square feet."
  },
  {
    id: 8,
    c: "Ownership",
    q: "An owner of property whose property is located next to a small body of water or a stream has:",
    a: ["Littoral rights", "Erosion rights", "Encroachment rights", "Riparian rights"],
    r: 3,
    e: "Riparian rights apply to property adjacent to rivers, streams, or inland lakes. The owner has the right to reasonable use of the water and owns to the middle of the stream. Littoral rights apply to navigable lakes and oceans."
  },
  {
    id: 9,
    c: "Ownership",
    q: "Regarding condominiums, which of the following is NOT true?",
    a: [
      "Common elements are owned by all co-owners",
      "Association fees are paid to maintain common elements and insure them",
      "If a co-owner does not use a common element such as a swimming pool, she does not have to pay her share of the association dues",
      "All co-owners must honor the bylaws"
    ],
    r: 2,
    e: "All co-owners must pay association fees for common elements regardless of personal use. Association fees are mandatory for all unit owners."
  },

  // ── LAND USE CONTROLS ───────────────────────────────────────────────────────
  {
    id: 10,
    c: "Ownership",
    q: "Property assessed value is $36,725, and the tax rate is 37 mills. What is the amount of tax due to the city?",
    a: ["$1,250", "$1,359", "$2,718", "$5,435"],
    r: 1,
    e: "$36,725 × 0.037 = $1,358.83 ≈ $1,359. One mill equals $1 per $1,000 of assessed value, or 0.001."
  },
  {
    id: 11,
    c: "Ownership",
    q: "The street in your neighborhood has been paved by the city. How will that affect your tax bill?",
    a: ["Millage rate will increase", "Assessed value will decrease", "You may receive a bill for special assessments", "Your property tax will be lowered"],
    r: 2,
    e: "When the government makes local improvements (paving streets, installing sewer lines), it may charge benefiting property owners through special assessments. This is separate from regular property taxes."
  },
  {
    id: 12,
    c: "Ownership",
    q: "John purchases property zoned for multiple units and plans to build an apartment complex, but discovers a deed restriction limiting use to single family only. You should tell John that:",
    a: [
      "The deed restriction has no power against a zoning ordinance",
      "Based on the restriction, he could build single-family homes or apartments as he wishes",
      "The deed restriction will supersede the zoning ordinance because it is more restrictive",
      "The zoning ordinance must be honored because government's rights are superior to private rights"
    ],
    r: 2,
    e: "When a deed restriction is more restrictive than the zoning ordinance, the deed restriction prevails. Both public zoning laws AND private deed restrictions must be honored — whichever is more restrictive controls."
  },
  {
    id: 13,
    c: "Ownership",
    q: "A clause in the law that allows an individual to continue a non-conforming use after a zoning law has changed is called:",
    a: ["A zoning ordinance", "A deed restriction", "A restrictive covenant", "A grandfather clause"],
    r: 3,
    e: "A grandfather clause (legal non-conforming use) allows a property owner to continue using property in a way that no longer complies with current zoning, as long as the use existed before the zoning change."
  },
  {
    id: 14,
    c: "Ownership",
    q: "When the use of property does not match the zoning allowed, the situation is best referred to as:",
    a: ["A grandfather clause", "A zoning variance", "Illegal", "Non-conforming use"],
    r: 3,
    e: "A non-conforming use is a lawful use that existed before a zoning ordinance was enacted or changed. It is allowed to continue but cannot be expanded or rebuilt if destroyed."
  },
  {
    id: 15,
    c: "Ownership",
    q: "A developer who wants to build houses in a subdivision with a 20-foot setback instead of the 30 feet required by ordinance must obtain a:",
    a: ["Setback use", "Special ordinance ruling", "Variance", "Permit restriction"],
    r: 2,
    e: "A variance is an exception to zoning regulations granted when strict compliance would cause undue hardship. It allows a property to be used in a way not normally permitted by the zoning rules."
  },
  {
    id: 16,
    c: "Ownership",
    q: "When the deed limits the use of the property, this is known as:",
    a: ["Deed zoning", "Deed variance", "Restrictive covenant (deed restriction)", "Owner's restriction"],
    r: 2,
    e: "A restrictive covenant (deed restriction) is a private limitation placed in the deed by a seller that controls present and future use of the property. It runs with the land and binds all future owners."
  },
  {
    id: 17,
    c: "Ownership",
    q: "Sharon wants to build a department store on land zoned residential single family. She must apply for and receive:",
    a: ["A zoning variance", "A deed covenant", "Code permission", "Grandfather variance"],
    r: 0,
    e: "Sharon needs a zoning variance to build a commercial structure on residentially-zoned land. A variance is an official exception to the zoning ordinance."
  },
  {
    id: 18,
    c: "Ownership",
    q: "A law that establishes the minimum distance between the lot line and where improvements can be erected is known as the:",
    a: ["Frontage distance", "Setback ordinance", "Bulk zoning distance", "Building distance"],
    r: 1,
    e: "A setback ordinance establishes minimum distances that structures must be from property lines. This prevents structures from being built too close to lot lines or streets."
  },
  {
    id: 19,
    c: "Ownership",
    q: "When zoning law allows a certain use but deed restriction limits that same use, the one that would prevail is the:",
    a: ["Zoning law", "Deed restriction", "Building permit", "Setback authority"],
    r: 1,
    e: "A deed restriction that is MORE restrictive than the zoning law will prevail. The more restrictive limitation always controls. The property owner must comply with both, so the stricter one governs."
  },

  // ── VALUATION & MARKET ANALYSIS ─────────────────────────────────────────────
  {
    id: 20,
    c: "Appraisal",
    q: "An apartment building grosses $2,000 per month with expenses averaging 35% of gross income. What is the net operating income (NOI) for the project?",
    a: ["$1,300", "$24,000", "$15,600", "$8,400"],
    r: 2,
    e: "Annual gross income: $2,000 × 12 = $24,000. Expenses: $24,000 × 35% = $8,400. NOI = $24,000 − $8,400 = $15,600."
  },
  {
    id: 21,
    c: "Appraisal",
    q: "Of the different methods of appraising property, which is most appropriate for appraising vacant land?",
    a: ["The cost approach", "The gross rent multiplier approach", "The capitalization approach", "Market data (comparison) approach"],
    r: 3,
    e: "The sales comparison (market data) approach is the most appropriate for appraising vacant land, since there are no improvements to cost or income to capitalize. It compares recent sales of similar parcels."
  },
  {
    id: 22,
    c: "Appraisal",
    q: "When using the market/sales comparison approach, an appraiser takes into consideration:",
    a: [
      "Income and expenses of property",
      "Capitalization expected by investors",
      "Features that the property has in comparison to other property sold in the neighborhood",
      "Depreciation on improvements"
    ],
    r: 2,
    e: "The sales comparison approach uses comparable sales and adjusts for differences in features, location, age, and condition between the subject property and the comparables."
  },
  {
    id: 23,
    c: "Appraisal",
    q: "Property value is least affected by:",
    a: ["Supply and demand", "Quality and features", "Activity of buyers in an area", "The owner's acquisition cost"],
    r: 3,
    e: "The owner's acquisition cost (what they paid) does not affect current market value. Value is determined by the market, not by what the owner paid. Supply and demand, features, and buyer activity all directly affect value."
  },
  {
    id: 24,
    c: "Appraisal",
    q: "Which of the following indicates functional obsolescence?",
    a: [
      "Leak in the roof",
      "Sewage treatment plant next to the property",
      "One-car garage in a neighborhood of mostly two-car garages",
      "High property taxes"
    ],
    r: 2,
    e: "Functional obsolescence is a loss in value due to deficiencies or outdated design features within the property itself. A one-car garage in a two-car area is a functional inadequacy that reduces value."
  },
  {
    id: 25,
    c: "Appraisal",
    q: "When a house is located in a neighborhood with several boarded-up houses and gangs on the street, this property loses value due to:",
    a: ["Physical deterioration", "Functional obsolescence", "Economic obsolescence", "Crime effect on occupants"],
    r: 2,
    e: "Economic obsolescence (external obsolescence) is a loss of value caused by factors outside the property itself, such as neighborhood decline, crime, or economic conditions. It is incurable."
  },
  {
    id: 26,
    c: "Appraisal",
    q: "When appraising a brand-new house surrounded by older houses, the best method used is the:",
    a: [
      "Income approach",
      "Market comparison approach",
      "Actual cash paid to the builder to erect improvements",
      "Cost approach"
    ],
    r: 3,
    e: "The cost approach is best for new construction because there is little depreciation and the cost to build closely reflects market value. It's also used when no comparable sales exist."
  },
  {
    id: 27,
    c: "Appraisal",
    q: "Which of the following is true about income property evaluation?",
    a: [
      "The cost of land must be estimated separately and then the cost of improvements added to it",
      "Appraiser must look at acquisition cost when property was purchased",
      "The capitalization approach is the most suitable",
      "Expenses such as property taxes, maintenance and insurance are seldom taken into consideration"
    ],
    r: 2,
    e: "The income (capitalization) approach is the most suitable method for evaluating income-producing properties. It converts the net operating income into a value estimate using a capitalization rate."
  },
  {
    id: 28,
    c: "Appraisal",
    q: "All of the following are taken into consideration when using the market comparison approach EXCEPT:",
    a: [
      "The price of the sold comparables in the neighborhood",
      "The subject property features such as square footage, number of bathrooms, garage, etc.",
      "Property location and age in comparison to the sold comparables",
      "The capitalization rate an investor would reasonably accept"
    ],
    r: 3,
    e: "The capitalization rate is used in the income approach, not the market comparison approach. The comparison approach focuses on comparable sales, property features, location, and age."
  },
  {
    id: 29,
    c: "Appraisal",
    q: "The price that a willing buyer will most probably pay a willing seller under no pressure, provided the property is available on the market for a reasonable length of time, is known as:",
    a: ["Market price", "Economic price", "Market value", "The buyer's value"],
    r: 2,
    e: "Market value is the most probable price a property should sell for in a competitive, open market, with both buyer and seller acting prudently and knowledgeably, with neither under pressure."
  },

  // ── FINANCING ───────────────────────────────────────────────────────────────
  {
    id: 30,
    c: "Financing",
    q: "All of the following are true regarding a Veteran's Administration Loan EXCEPT:",
    a: [
      "The loan is guaranteed by the Veteran's Administration",
      "Any credit worthy individual including non-veterans can assume the loan",
      "The Administration obtains a certificate of reasonable value and requires the house to be brought up to code",
      "The veteran must put down at least 3% down payment"
    ],
    r: 3,
    e: "A key benefit of the VA loan is NO down payment requirement for eligible veterans. The VA guarantees the loan, requires a certificate of reasonable value (CRV), and allows creditworthy non-veterans to assume the loan."
  },
  {
    id: 31,
    c: "Financing",
    q: "All of the following are examples of primary lenders EXCEPT:",
    a: ["Savings and loans", "Credit unions", "Commercial banks", "GNMA"],
    r: 3,
    e: "GNMA (Government National Mortgage Association — Ginnie Mae) is a secondary market institution that buys and securitizes mortgages. It is not a primary lender. Primary lenders originate loans directly to borrowers."
  },
  {
    id: 32,
    c: "Financing",
    q: "All of the following are true regarding government-related loans EXCEPT:",
    a: [
      "An FHA loan is insured by the Federal Housing Administration",
      "A VA loan is guaranteed by the Veteran's Administration",
      "An FHA loan requires payment of insurance premiums",
      "A VA loan may be granted to an investor who intends to rent the entire property"
    ],
    r: 3,
    e: "VA loans require owner-occupancy — the veteran must intend to live in the property. VA loans cannot be used for investment properties intended solely for rental income."
  },
  {
    id: 33,
    c: "Financing",
    q: "A type of mortgage suitable for those thinking of semi-retirement that involves receiving regular monthly payments for a specified period is known as:",
    a: ["Retirement mortgage", "Graduated mortgage", "Amortized mortgage", "Reverse mortgage"],
    r: 3,
    e: "A reverse mortgage allows homeowners (typically 62+) to convert home equity into cash payments. The loan balance grows over time and is repaid when the homeowner sells, moves, or dies."
  },
  {
    id: 34,
    c: "Financing",
    q: "When financing property with a lender, which instrument is required to create a lien on the property being financed?",
    a: ["The promissory note", "The land contract", "The mortgage contract", "The deed"],
    r: 2,
    e: "The mortgage (deed of trust) is the security instrument that creates a lien against the property. The promissory note is the promise to repay. The mortgage pledges the property as collateral."
  },
  {
    id: 35,
    c: "Financing",
    q: "Regarding a VA loan, all of the following are true EXCEPT:",
    a: [
      "Applicant must be entitled to receive VA loan",
      "Applicant must intend to live in the house",
      "Property must not be larger than four units",
      "Applicant must be willing to pay an insurance premium"
    ],
    r: 3,
    e: "VA loans do NOT require mortgage insurance premiums — that is a feature of FHA loans. This is one of the major advantages of a VA loan."
  },
  {
    id: 36,
    c: "Financing",
    q: "An individual may qualify for an FHA loan. Where would you refer him?",
    a: [
      "To the Department of Housing and Urban Development",
      "To the Federal Housing Administration",
      "To any participating primary lender",
      "To the Federal Home Loan Mortgage Corporation"
    ],
    r: 2,
    e: "FHA loans are obtained through any approved primary lender (bank, savings & loan, credit union). The FHA only insures the loan — it does not make loans directly to borrowers."
  },
  {
    id: 37,
    c: "Financing",
    q: "A relatively short-term loan that involves regular monthly payments and a lump sum due at the end of the loan term is:",
    a: ["A reverse mortgage", "Partially amortized loan", "A subprime loan", "Adjustable-rate loan"],
    r: 1,
    e: "A partially amortized (balloon) loan has regular monthly payments that do not fully pay off the balance. The remaining balance (balloon payment) is due in full at the end of the loan term."
  },
  {
    id: 38,
    c: "Financing",
    q: "Kim refinanced her property to raise cash for purchasing another investment property. This type of mortgage loan is known as:",
    a: ["A balloon mortgage", "A bridge loan", "A fully amortized mortgage", "A reverse mortgage"],
    r: 1,
    e: "A bridge loan (swing loan) is short-term financing used when buying a new property before selling the existing one, or to access equity for another purchase. It bridges the gap between transactions."
  },
  {
    id: 39,
    c: "Financing",
    q: "A land contract gives the buyer all of the following EXCEPT:",
    a: [
      "The right to live on the property",
      "The right to lease out the property",
      "The right to sell the property",
      "Legal title to the property"
    ],
    r: 3,
    e: "In a land contract (contract for deed), the seller retains legal title until the buyer pays off the contract. The buyer has equitable title and may possess, use, and sell the property, but does not get the deed until full payment."
  },

  // ── PRINCIPLES OF AGENCY ─────────────────────────────────────────────────────
  {
    id: 40,
    c: "Agency",
    q: "Which of the following is true regarding an open listing given to 4 different brokers if one of them sold it?",
    a: [
      "They all split the commission",
      "50% goes to the one who sold it and 50% is distributed between the other brokers",
      "An open listing is illegal",
      "Only the broker who sold the property receives a commission and the others get nothing"
    ],
    r: 3,
    e: "In an open listing, only the broker who actually produces a buyer earns a commission. The other brokers receive nothing. This is why most brokers prefer exclusive listings."
  },
  {
    id: 41,
    c: "Agency",
    q: "All but which one of the following are proper responsibilities of the listing agent?",
    a: [
      "Loyalty to the principal",
      "Due diligence and skill",
      "Accounting for funds and indemnification",
      "Obtaining the best possible financing for the buyer"
    ],
    r: 3,
    e: "The listing agent's fiduciary duties run to the seller (principal), not the buyer. Obtaining the best financing for the buyer is NOT a duty of the listing agent — the agent represents the seller."
  },
  {
    id: 42,
    c: "Agency",
    q: "A listing agent knows the seller is anxious and willing to take less than the listing price. The buyer asks if the agent recommends any other price. The agent must:",
    a: [
      "Be honest and indicate that seller will accept less",
      "Tell the buyer that the seller will not accept less under any circumstances",
      "Tell the buyer that he could make an offer but the agent can guarantee nothing",
      "Call the seller and ask if he should tell the buyer the seller will take less"
    ],
    r: 2,
    e: "The listing agent owes loyalty to the seller and must protect confidential seller information (like willingness to accept less). The agent should not reveal the seller's bottom line, but should not lie either."
  },
  {
    id: 43,
    c: "Agency",
    q: "As a buyer's agent, a broker feels the property is overpriced, but the buyer indicates willingness to offer full price. The broker must:",
    a: [
      "Have the buyer sign a full price offer and present it for a fast sale",
      "Tell the buyer to offer less and refuse to present an offer unless the buyer lowers the price",
      "Advise the buyer as to what the fair market value should be and leave it up to her",
      "Urge the buyer to offer full price because the broker always has duty to the seller"
    ],
    r: 2,
    e: "A buyer's agent owes fiduciary duties to the buyer, including the duty to inform. The agent should share market value information and counsel the buyer, but ultimately respect the buyer's decision."
  },
  {
    id: 44,
    c: "Agency",
    q: "As agent of the buyer, you know a certain bank is offering lower interest rates than what the buyer thinks he can get elsewhere. His mortgage loan officer is a friend. Your duty is to:",
    a: [
      "Leave the buyer alone since he is a client and should not be bothered",
      "Contact the loan officer directly and tell him",
      "Inform the buyer of the other lender's rates and urge him to take the savings",
      "Ignore the lower rates to avoid delays and hard feelings between the two friends"
    ],
    r: 2,
    e: "A buyer's agent owes the duty of loyalty and obedience to the buyer's best financial interests. The agent must inform the buyer of better financing options available, regardless of personal relationships."
  },
  {
    id: 45,
    c: "Agency",
    q: "A broker under an exclusive right-to-sell listing is told by the owner that his daughter is buying the house directly from him. The broker should:",
    a: [
      "Terminate the listing",
      "Insist that the daughter write the offer through the broker's company",
      "Inform the seller that he will owe a commission",
      "Advise the seller to wait until the listing expires, then sell to avoid paying a commission"
    ],
    r: 2,
    e: "Under an exclusive right-to-sell listing, the broker earns a commission if the property sells during the listing period — regardless of who sells it. The broker must inform the seller of this obligation."
  },
  {
    id: 46,
    c: "Agency",
    q: "A person who authorizes another person to act on his/her behalf is called:",
    a: ["The salesperson", "The fiduciary", "The agent", "The principal"],
    r: 3,
    e: "The principal (also called the client) is the person who authorizes an agent to act on their behalf. The agent acts for the principal. The fiduciary is a person in a position of trust."
  },
  {
    id: 47,
    c: "Agency",
    q: "A listing agent is LEAST likely responsible for telling a prospective buyer that:",
    a: [
      "House has a potential structural defect",
      "Zoning makes the potential use of property non-conforming",
      "Inspection of a house has shown some signs of termite damage",
      "An owner will accept less for a property than what it is listed for"
    ],
    r: 3,
    e: "While listing agents must disclose material facts about the property's condition (structural defects, termite damage, zoning issues), they are NOT required to disclose confidential seller information like willingness to accept a lower price."
  },
  {
    id: 48,
    c: "Agency",
    q: "After showing a property many times without an acceptable offer, the broker decides to buy the property himself. He must:",
    a: [
      "Wait until the listing expires and then submit an offer to purchase",
      "Make his/her true position known to the seller",
      "Buy it through a third party",
      "Split the profit with the owner"
    ],
    r: 1,
    e: "An agent interested in purchasing the listed property must fully disclose their position as a licensee to the seller. This prevents conflicts of interest and ensures the seller can make an informed decision."
  },
  {
    id: 49,
    c: "Agency",
    q: "The listing broker owes a direct fiduciary responsibility to whom?",
    a: ["The listing salesperson", "The buyer", "The listing owner", "The cooperating broker"],
    r: 2,
    e: "The listing broker owes fiduciary duties (loyalty, disclosure, obedience, reasonable care, accounting, confidentiality) directly to the listing owner (seller), who is the principal/client."
  },

  // ── PROPERTY CONDITION & DISCLOSURE ─────────────────────────────────────────
  {
    id: 50,
    c: "Contracts",
    q: "The purpose of the seller's disclosure statement is to:",
    a: [
      "Determine all defects with the property",
      "Inform a potential buyer of conditions known to the seller",
      "Be able to sue the seller for any defects with the property",
      "Stop the buyer from withdrawing from the sale before closing"
    ],
    r: 1,
    e: "The Seller Disclosure Act requires sellers to inform buyers of material defects known to the seller. It discloses conditions the seller is AWARE of — it is not a warranty or inspection report."
  },
  {
    id: 51,
    c: "Contracts",
    q: "A buyer signed a purchase agreement and was later able to legally withdraw and receive a refund of the deposit. Under which circumstance was the buyer able to rescind?",
    a: [
      "The buyer could not be approved for a loan at favorable interest rates",
      "The buyer was surprised his employer was transferring him to another city",
      "The buyer heard that someone was killed in the house",
      "The buyer did not receive a seller's disclosure statement"
    ],
    r: 3,
    e: "Under Michigan's Seller Disclosure Act, if the seller fails to provide the disclosure statement, the buyer has the right to rescind the purchase agreement and receive a full refund of the deposit."
  },
  {
    id: 52,
    c: "Contracts",
    q: "All of the following are material facts EXCEPT:",
    a: ["Leak in the roof", "Crack in the basement wall", "Problem with plumbing", "Seller is anxious to sell"],
    r: 3,
    e: "Material facts are facts that would affect a buyer's decision to buy or the price offered. Physical defects (roof leaks, cracks, plumbing problems) are material. The seller's motivation to sell is confidential information, not a material fact about the property."
  },
  {
    id: 53,
    c: "Contracts",
    q: "Seller's disclosure statement must be provided to buyer:",
    a: [
      "No later than nine business days after signing the offer to purchase",
      "Before an offer to purchase is signed",
      "Any time before closing",
      "No later than two days after closing"
    ],
    r: 1,
    e: "Under Michigan law, the seller's disclosure statement must be provided to the buyer BEFORE the purchase agreement is signed. If provided after signing, the buyer may rescind within a specified period."
  },
  {
    id: 54,
    c: "Contracts",
    q: "The listing salesperson has NO duty to inform a buyer that:",
    a: [
      "Zoning is a problem for the property",
      "Leaks from a nearby toxic waste dump site have caused underground pollution",
      "Seller indicated that she will accept less for the property",
      "The city inspector will probably not issue a permit to build unless a cleanup takes place"
    ],
    r: 2,
    e: "A listing agent represents the seller and must keep seller's confidential information private. The seller's willingness to accept less is confidential. However, all material physical defects affecting the property must be disclosed."
  },
  {
    id: 55,
    c: "Contracts",
    q: "An owner asks the salesperson if his company will accept less commission. The salesperson must:",
    a: [
      "Leave the commission blank after signing the listing agreement",
      "Tell the owner that all commissions are set by the state and nothing can be done",
      "Lower the commission to any reasonable amount agreed upon",
      "Tell the owner that the decision must be made by the broker and he has no authority to accept less commission"
    ],
    r: 3,
    e: "Commission decisions are made by the broker, not individual salespersons. A salesperson cannot independently agree to change the commission — that must be approved by the employing broker."
  },
  {
    id: 56,
    c: "Contracts",
    q: "An agent inspects a new listing and notices obvious leaks in the roof and water in the basement (seller says warranty will cover it). Which is NOT considered proper behavior by the agent?",
    a: [
      "Make sure that the leaks and the furnace issue are disclosed",
      "Recommend an inspection to a potential buyer just in case there are more defects",
      "Since the basement issue is covered by warranty, there is no need to be concerned with it",
      "Provide a completed seller's disclosure statement to the buyer before signing the purchase agreement"
    ],
    r: 2,
    e: "The agent must disclose ALL known defects, including the basement water issue, regardless of the seller's warranty claim. The fact that repairs are under warranty does not eliminate the duty to disclose."
  },
  {
    id: 57,
    c: "Contracts",
    q: "A provision placed in the deed by the seller aimed at controlling the present and future use of property is called:",
    a: ["Seller restriction", "Land use regulation", "Unnecessary burden on the buyer", "Deed restriction"],
    r: 3,
    e: "A deed restriction (restrictive covenant) is placed in the deed to control the use of property. It runs with the land, binding all future owners."
  },
  {
    id: 58,
    c: "Contracts",
    q: "An agent is selling a vacant lot in a neighborhood not served with sanitary sewers. The agent should make the purchase agreement subject to:",
    a: ["A foundation inspection", "A percolation test", "A soil sampling inspection", "A building permit"],
    r: 1,
    e: "A percolation (perc) test determines if the soil will absorb sewage for a septic system. When no municipal sewer is available, the sale should be contingent on a satisfactory perc test to ensure the land can support a septic system."
  },
  {
    id: 59,
    c: "Contracts",
    q: "When the street in your neighborhood has been paved by the city, how will that affect your tax bill?",
    a: ["Millage rate will increase", "Assessed value will decrease", "You may receive a bill for special assessments", "Your property tax will be lowered"],
    r: 2,
    e: "Public improvements that benefit specific properties are funded through special assessments charged to those property owners. Street paving is a classic example of a special assessment situation."
  },

  // ── CONTRACTS ───────────────────────────────────────────────────────────────
  {
    id: 60,
    c: "Contracts",
    q: "When the parties to a contract agree to close by a certain deadline with absolutely no extensions, what must the contract state?",
    a: ["Irrevocable offer clause", "Time is of the essence clause", "Time extension clause", "Absolute deadline clause"],
    r: 1,
    e: "\"Time is of the essence\" means deadlines in the contract are absolute. If a party fails to perform by the specified date, it constitutes a material breach of the contract."
  },
  {
    id: 61,
    c: "Contracts",
    q: "When a party to a contract makes a promise in exchange for another promise, this contract is:",
    a: ["Unilateral", "Bilateral", "Implied", "Executed"],
    r: 1,
    e: "A bilateral contract involves mutual promises — both parties make promises to each other (promise for a promise). A purchase agreement is bilateral. A unilateral contract involves only one party making a promise (option contract)."
  },
  {
    id: 62,
    c: "Contracts",
    q: "All of the following elements are essential to validate a contract EXCEPT:",
    a: ["Valuable consideration", "Legal capacity of the parties", "Meeting of the minds", "Witnessing"],
    r: 3,
    e: "The essential elements of a valid contract are: offer and acceptance (meeting of the minds), valuable consideration, legal capacity of the parties, and legal purpose. Witnessing is NOT required for a valid contract."
  },
  {
    id: 63,
    c: "Contracts",
    q: "A 25-year-old individual signed a contract with a 17-year-old. The contract may be subject to:",
    a: [
      "If the minor decided not to perform, he may be forced to do so by a court of law",
      "The major is not obligated to perform",
      "It is up to the minor to enforce the contract or to void it",
      "The contract is enforceable by the major but not the minor"
    ],
    r: 2,
    e: "A contract with a minor is voidable at the minor's option. The minor can choose to enforce the contract or void it. The adult cannot void the contract — only the minor has that right."
  },
  {
    id: 64,
    c: "Contracts",
    q: "A purchase agreement is signed but the price will be lowered in return for the seller not including some appliances. What must the agent do?",
    a: [
      "Do nothing; it is up to the parties to do what they want",
      "Close the deal based on the new terms; just make sure the closing statement reflects the new price",
      "Cancel the purchase agreement and have them sign a new one",
      "Draw an amendment reflecting the changes and have the parties sign it before closing"
    ],
    r: 3,
    e: "Any changes to a signed purchase agreement must be documented in a written amendment signed by all parties. The agent should prepare an amendment to avoid disputes at closing."
  },
  {
    id: 65,
    c: "Contracts",
    q: "Under an option period of six months to purchase property, all of the following are true EXCEPT:",
    a: [
      "The optionee may assign the option to a third party",
      "The optionee may exercise the option at any time within the six months",
      "The optionor may not force the optionee to perform under the option",
      "The optionor must return the option payment if the optionee does not exercise the option"
    ],
    r: 3,
    e: "An option payment is non-refundable. If the optionee chooses not to exercise the option, the optionor keeps the option payment. The optionee has the right but not the obligation to buy."
  },
  {
    id: 66,
    c: "Contracts",
    q: "When a party to a contract fails to meet its terms, this is known as:",
    a: ["Novation", "Assignment", "Breach", "Performance"],
    r: 2,
    e: "A breach of contract occurs when a party fails to perform their contractual obligations. Remedies include specific performance, rescission, or damages. Novation is substitution of a new party or contract."
  },
  {
    id: 67,
    c: "Contracts",
    q: "Seller accepted an offer and later refused to close the deal. Legally, the buyer may do which of the following?",
    a: [
      "Nothing, seller can rescind the transaction anytime before closing",
      "Ask for his deposit to be refunded, since there is no other legal remedy",
      "Sue the broker",
      "Sue for specific performance"
    ],
    r: 3,
    e: "When a seller breaches a purchase agreement, the buyer may sue for specific performance (forcing the seller to complete the sale) in addition to other remedies. Real estate is unique in that specific performance is available."
  },
  {
    id: 68,
    c: "Contracts",
    q: "A novation is:",
    a: [
      "The same as a sublease",
      "Acquiring property after encroaching on it for the statutory period",
      "The substitution of a new person or contract in place of another",
      "A nonperformance"
    ],
    r: 2,
    e: "Novation is the substitution of a new party or new obligation for an existing one, with the consent of all parties. The original party is released from obligation."
  },
  {
    id: 69,
    c: "Contracts",
    q: "Seller asks $200,000; buyer offered $180,000 (rejected). Seller countered at $190,000 (rejected by buyer). Later seller decides to accept the original $180,000. Which is true?",
    a: [
      "The buyer is obligated to buy the property for $180,000",
      "The seller has no right to accept the $180,000 price since he had rejected it",
      "It is up to the buyer to offer $180,000 again, since his original offer was rejected",
      "The buyer should have accepted the counteroffer, because counteroffers are always binding"
    ],
    r: 2,
    e: "When the seller rejected the $180,000 offer and made a counteroffer, the original offer was extinguished. The seller cannot later accept a dead offer. The buyer must make a new offer for $180,000."
  },

  // ── LEASING & PROPERTY MANAGEMENT ───────────────────────────────────────────
  {
    id: 70,
    c: "MI-Specific",
    q: "A lease that requires a tenant to pay all operating expenses such as property taxes, insurance and maintenance is:",
    a: ["A percentage lease", "A net lease", "A graduated lease", "A gross lease"],
    r: 1,
    e: "A net lease (triple net/NNN) requires the tenant to pay all operating expenses in addition to base rent. A gross lease has the landlord paying operating expenses. A percentage lease ties rent to business revenue."
  },
  {
    id: 71,
    c: "MI-Specific",
    q: "A tenant interested in purchasing the house she is leasing wants a chance to match a bid from a third party. She should obtain:",
    a: ["A lease option", "Right of first refusal", "A lease assignment", "A third-party contract"],
    r: 1,
    e: "The right of first refusal gives the holder the right to match any third-party offer before the owner can accept it. A lease option gives the tenant the right to purchase at a set price."
  },
  {
    id: 72,
    c: "MI-Specific",
    q: "The following statement is true concerning subleasing:",
    a: [
      "The lessor collects rent directly from the sublessee",
      "The sublessor is leasing from the sublessee",
      "The sublessee is the owner",
      "The sub-lessor is liable for damages caused by the sub-lessee"
    ],
    r: 3,
    e: "In a sublease, the original tenant (sublessor) remains liable to the landlord. If the sublessee damages the property or fails to pay rent, the sublessor is still responsible."
  },
  {
    id: 73,
    c: "MI-Specific",
    q: "When the tenant pays a fixed amount of rent and the landlord pays all expenses on the property, this is a:",
    a: ["Gross lease", "Net lease", "Escalation lease", "Expense paid lease"],
    r: 0,
    e: "A gross lease (full service lease) has the landlord pay all operating expenses (taxes, insurance, maintenance) while the tenant pays a fixed rent amount. This is common in residential rentals."
  },
  {
    id: 74,
    c: "MI-Specific",
    q: "Which is true about assigning a lease?",
    a: [
      "Once a lease is assigned, the assignor must be released from responsibility",
      "The assignee is automatically released from liability",
      "The landlord/lessor may or may not release the assignor/lessee of liability",
      "It is the same as a sublease"
    ],
    r: 2,
    e: "In a lease assignment, the original tenant (assignor) transfers all remaining lease obligations to the assignee. The assignor may still be liable unless the landlord specifically releases them. The landlord's release is not automatic."
  },
  {
    id: 75,
    c: "MI-Specific",
    q: "The tenant's interest in leased premises is known as:",
    a: ["A life lease", "A reversionary estate", "Tenant's rights", "A leasehold estate"],
    r: 3,
    e: "A leasehold estate is the tenant's possessory interest in real property for a period of time. The landlord has a reversionary interest (the right to regain possession when the lease ends)."
  },
  {
    id: 76,
    c: "MI-Specific",
    q: "A lease that specifies lower rent payments in the early stages and later the rent increases is known as:",
    a: ["A partially increased lease", "Graduated lease", "Percentage lease", "A low rent lease"],
    r: 1,
    e: "A graduated lease (step-up lease) provides for increases in rent at set intervals, usually tied to increased expenses or as an incentive to attract tenants with initially lower rent."
  },
  {
    id: 77,
    c: "MI-Specific",
    q: "A lease provides for increases based on future expenses of property; this is explained in the:",
    a: ["First right of refusal clause", "Net lease clause", "Escalation clause", "Expense clause"],
    r: 2,
    e: "An escalation clause in a lease allows rent increases based on future increases in expenses (taxes, insurance, maintenance). It protects the landlord against rising costs."
  },
  {
    id: 78,
    c: "MI-Specific",
    q: "A nine-month lease creates:",
    a: ["Tenancy from period to period", "Tenancy at sufferance", "Tenancy for years", "Tenancy in common"],
    r: 2,
    e: "A tenancy for years (estate for years) is any lease for a fixed, stated period — whether 9 months, 1 year, or 5 years. Despite the name, it does not need to be measured in years."
  },
  {
    id: 79,
    c: "MI-Specific",
    q: "Sharon purchases a 10-unit apartment building. Six tenants have low-rent leases; others pay low rent month-to-month. What can Sharon do?",
    a: [
      "Inform the tenants with leases that they must re-negotiate a new lease with the new owner",
      "Immediately raise rents on those who have month-to-month leases",
      "Legally, she could evict everyone and replace the units with new tenants",
      "She could raise rents for month-to-month tenants with proper written notice; for those with leases, she must wait until the leases expire"
    ],
    r: 3,
    e: "Leases run with the land — a new owner must honor existing leases until they expire. Month-to-month tenants may have rent raised with proper written notice. Leases cannot be unilaterally changed before they expire."
  },

  // ── TRANSFER OF TITLE ────────────────────────────────────────────────────────
  {
    id: 80,
    c: "Closing & Title",
    q: "In order to deliver title, the following must happen:",
    a: [
      "Grantor signs deed, grantee signs deed",
      "Grantor and grantee sign, but deed must be delivered and accepted by grantee",
      "Grantor signs and delivers deed to the grantee",
      "Grantor signs, delivers deed, and deed must be recorded"
    ],
    r: 2,
    e: "Title is transferred when the grantor (seller) signs and delivers the deed and the grantee (buyer) accepts it. Recording is important for protection against third parties but is not required for valid title transfer."
  },
  {
    id: 81,
    c: "Closing & Title",
    q: "A general warranty deed must contain:",
    a: [
      "The covenant against encumbrances",
      "A willing, able and ready seller",
      "Monetary consideration",
      "All covenants of title"
    ],
    r: 3,
    e: "A general warranty deed contains all covenants of title: seisin, quiet enjoyment, against encumbrances, further assurance, and warranty forever. It provides the greatest protection to the buyer."
  },
  {
    id: 82,
    c: "Closing & Title",
    q: "A type of deed that involves no warranties and conveys whatever interest the grantor may have in property is the:",
    a: ["Special warranty deed", "Bargain and sale deed", "Covenant deed", "Quit claim deed"],
    r: 3,
    e: "A quitclaim deed conveys whatever interest the grantor has — if any — with no warranties. It is used to clear title defects, transfer property between family members, or in divorce situations."
  },
  {
    id: 83,
    c: "Closing & Title",
    q: "Which of the following is NOT necessary to validate a deed?",
    a: ["A competent grantor", "The granting clause", "Valuable consideration", "Recording"],
    r: 3,
    e: "Recording is NOT required to make a deed valid between the parties. It is required to protect against third-party claims. A deed is valid when properly executed (signed by competent grantor, granting clause, consideration)."
  },
  {
    id: 84,
    c: "Closing & Title",
    q: "A warranty deed contains covenants as to the quality of:",
    a: ["Construction", "Environmental problems", "Title", "The type of use"],
    r: 2,
    e: "A warranty deed's covenants concern the quality of TITLE — that the grantor has the right to convey, the buyer will have quiet enjoyment, there are no undisclosed encumbrances, and the grantor will defend the title."
  },
  {
    id: 85,
    c: "Closing & Title",
    q: "John deeded property to Charles, who failed to record. Later John deeded property to Susan, who accepted it in good faith and recorded it. Who has superior rights?",
    a: [
      "Charles, because he bought it first",
      "John, because by selling it twice neither sale was valid",
      "Susan, because she recorded first",
      "Charles and Susan will split the property"
    ],
    r: 2,
    e: "Under Michigan's race-notice recording statute, Susan prevails because she recorded first without notice of the prior deed to Charles. Recording protects buyers from prior unrecorded transfers."
  },
  {
    id: 86,
    c: "Closing & Title",
    q: "When closing a transaction, property taxes that were due but not paid are:",
    a: [
      "A debit to the buyer and a credit to the seller",
      "A debit to the seller",
      "A credit to the buyer",
      "Normally not prorated"
    ],
    r: 1,
    e: "Unpaid property taxes are a debit to the seller (the seller is responsible for taxes accrued during their ownership). The buyer receives a credit for these taxes so they can pay them. In Michigan, taxes are paid in arrears."
  },
  {
    id: 87,
    c: "Closing & Title",
    q: "On the closing statement, property tax paid in advance by the owner for a period extending after the closing date is:",
    a: [
      "A debit to the seller",
      "A credit to the buyer",
      "A debit to the seller but a credit to the buyer",
      "A debit to the buyer but a credit to the seller"
    ],
    r: 3,
    e: "When the seller has prepaid taxes for a period after closing, the buyer will benefit from those prepaid taxes. Therefore, the buyer is debited (owes the seller) and the seller is credited (reimbursed) for the prepaid amount."
  },
  {
    id: 88,
    c: "Closing & Title",
    q: "To inspect for clouds on the title, you must:",
    a: ["Order a survey", "Order an environmental audit", "Order title search", "Pay a visit to the Register of Deeds office"],
    r: 2,
    e: "A title search examines the chain of title in public records to identify any clouds (defects) such as liens, encumbrances, or competing claims. It is conducted at the Register of Deeds office, usually by a title company or attorney."
  },
  {
    id: 89,
    c: "Closing & Title",
    q: "Title insurance will protect against all but which of the following?",
    a: ["A missing heir", "Forged signature", "Unrecorded lien", "Fire in the house"],
    r: 3,
    e: "Title insurance protects against title defects such as missing heirs, forged signatures, unrecorded liens, and other title issues. It does NOT protect against physical damage to the property — that requires homeowner's insurance."
  },

  // ── PRACTICE OF REAL ESTATE / FAIR HOUSING ───────────────────────────────────
  {
    id: 90,
    c: "Fair Housing",
    q: "The Equal Housing Opportunity logo is required by law to be included in:",
    a: [
      "Options to purchase but not to lease real estate",
      "Certain real estate display ads",
      "All closing statements and residential rental agreements",
      "Commercial leases only"
    ],
    r: 1,
    e: "The Equal Housing Opportunity logo is required in certain residential real estate display advertising. It signals compliance with fair housing laws and is NOT required in every closing statement."
  },
  {
    id: 91,
    c: "Fair Housing",
    q: "A minority owner requests the licensee delete the anti-discrimination clause from the listing because he is offended by it. The licensee must:",
    a: [
      "Delete the clause",
      "Get permission from the broker before the clause is deleted",
      "Ask the seller to wait until he sees the buyers in case the seller wants to discriminate",
      "Tell the seller that it is a state requirement and a listing will not be valid without it"
    ],
    r: 3,
    e: "Michigan law requires that all residential listing agreements contain an anti-discrimination clause. It cannot be removed at the client's request — it is mandatory. A listing without it is not valid."
  },
  {
    id: 92,
    c: "Fair Housing",
    q: "To suggest to property owners that their property may lose value due to entry of minorities into the neighborhood is:",
    a: [
      "Legal as long as property is not listed below fair market value",
      "Known as racial steering",
      "Called blockbusting",
      "Legal if done with government approval"
    ],
    r: 2,
    e: "Blockbusting (panic peddling) is the illegal practice of inducing homeowners to sell by suggesting that minority groups are moving into the neighborhood, implying property values will decline."
  },
  {
    id: 93,
    c: "Fair Housing",
    q: "An owner asked an agent to list property but indicated that minorities would not be allowed to buy. The agent must:",
    a: [
      "Get state approval before listing property",
      "Follow client's instructions",
      "Refuse the listing",
      "Accept the listing but show it to minorities anyway"
    ],
    r: 2,
    e: "An agent must refuse any listing that involves discriminatory conditions. Following discriminatory instructions would make the agent liable for fair housing violations, even if the owner requested it."
  },
  {
    id: 94,
    c: "Fair Housing",
    q: "A family with children was legally turned down for an apartment. Which would be an acceptable reason?",
    a: [
      "The complex was a senior citizen's complex for ages 62 or older",
      "The complex was an adult community for those eighteen years old or older",
      "The apartment building had a lot of students who would need their quiet to study",
      "The family had little babies who would cry at night and bother everyone"
    ],
    r: 0,
    e: "Familial status (having children) is a protected class under fair housing law. However, housing for older persons (55+ or 62+) is exempt. A complex for persons 62 or older may legally refuse families with children."
  },
  {
    id: 95,
    c: "Fair Housing",
    q: "A lending institution avoids making loans in areas populated mostly by minorities without stating that reason. This practice is known as:",
    a: ["Neighborhood steering", "Unethical bank lending", "Redlining", "Minority credit screening"],
    r: 2,
    e: "Redlining is the illegal practice of refusing to make loans in certain areas based on the racial or ethnic composition of the neighborhood. It violates the Equal Credit Opportunity Act and fair housing laws."
  },
  {
    id: 96,
    c: "Fair Housing",
    q: "Which of the following is permissible under civil rights acts?",
    a: [
      "Referring a buyer with AIDS to another salesperson who is HIV positive",
      "Refusing to rent to a mentally disabled individual despite her mother being available to sign the lease",
      "Refusing to rent to a blind person with a guide dog because the complex allows no pets",
      "Refusing to show a minority individual a house priced at $1.5 million when the licensee knows the buyer cannot afford it"
    ],
    r: 3,
    e: "A licensee may decline to show a property that is clearly beyond a buyer's financial means. However, this must be based on objective financial facts, not assumptions based on race or other protected characteristics."
  },
  {
    id: 97,
    c: "Fair Housing",
    q: "After a disabled tenant vacated, the manager noticed changes on the property. Which change can the manager charge the tenant to restore?",
    a: [
      "Tenant installed an elevator in the house",
      "The front door was widened, and a ramp was installed",
      "Additional lighting was added to help tenant who has poor eyesight",
      "Deaf tenant connected doorbell to lights inside the house so they blink when someone rings"
    ],
    r: 3,
    e: "Under the Fair Housing Act, a landlord may require a disabled tenant to restore the property to its original condition when they vacate. A doorbell wired to lights (a reversible modification) can be required to be restored."
  },
  {
    id: 98,
    c: "Fair Housing",
    q: "A two-story apartment building is recently placed in service. Which level must have accessibility to disabled individuals?",
    a: [
      "Both levels",
      "Upstairs only if elevators are installed",
      "The ground level only if no elevators are installed",
      "Neither level needs to be accessible unless it was used for group homes"
    ],
    r: 2,
    e: "Under the Fair Housing Act, newly constructed multi-family buildings (4+ units) must have accessible ground-floor units. Upper floors must be accessible if elevators are provided; if not, only ground floor units need to comply."
  },
  {
    id: 99,
    c: "Fair Housing",
    q: "A buyer said she would only buy the house shown if the neighborhood is 'all white.' The agent said, 'This neighborhood is, in fact, racially integrated.' Which is true?",
    a: [
      "As long as the agent was telling the truth, there is no problem",
      "Agent should recommend to buyer to drive around and inspect what type of minorities live there",
      "The agent's action may lead to 'racial steering'; the proper answer would have been, 'I am prohibited by law from discussing this matter'",
      "Agent should have screened a few neighborhoods for racial composition before bringing the buyer"
    ],
    r: 2,
    e: "Steering (directing buyers based on race) is illegal even when the agent provides accurate information. The proper response is to say, 'I am prohibited by law from discussing the racial composition of neighborhoods.'"
  },

  // ── REAL ESTATE CALCULATIONS ─────────────────────────────────────────────────
  {
    id: 100,
    c: "Math",
    q: "Quarterly interest due on a $185,000 loan is $2,775. What is the annual interest rate?",
    a: ["6%", "1.5%", "3%", "2%"],
    r: 0,
    e: "$2,775 × 4 quarters = $11,100 annual interest. $11,100 ÷ $185,000 = 0.06 = 6%."
  },
  {
    id: 101,
    c: "Math",
    q: "Property tax of $4,660/yr. paid in advance (calendar year). The seller stayed 6 months and sold the property. What is the proration at closing?",
    a: [
      "$2,330 credit buyer and debit seller",
      "$2,330 debit buyer and credit seller",
      "$4,600 debit the buyer and credit seller",
      "$4,600 debit seller and credit buyer"
    ],
    r: 1,
    e: "Seller paid taxes in advance for the full year but only owned the property 6 months. Buyer owes the seller for the remaining 6 months: $4,660 ÷ 2 = $2,330. This is a debit to buyer (they pay) and credit to seller (they receive)."
  },
  {
    id: 102,
    c: "Math",
    q: "Property tax $2,646.25 payable in advance (calendar year) but delinquent. Using exact days method, what proration is due if closing is scheduled April 28?",
    a: ["$848.25 debit seller", "$848.25 debit buyer", "$1,798 debit seller", "$1,798 debit buyer"],
    r: 0,
    e: "Daily tax = $2,646.25 ÷ 365 = $7.25/day. Days Jan 1 to Apr 27 (buyer's responsibility starts Apr 28) = 31+28+31+27 = 117 days. 117 × $7.25 = $848.25 debit seller (seller owes taxes for their ownership period)."
  },
  {
    id: 103,
    c: "Math",
    q: "Property sold for $72,650. Commission 6%. Calculate the transfer tax due to the county and the state.",
    a: ["$312.39", "$624.79", "$627.80", "$619.20"],
    r: 2,
    e: "Transfer tax is $4.30 per $500 (or fraction). $72,650 rounds up to $73,000. $73,000 ÷ $500 = 146 units. 146 × $4.30 = $627.80. Note: commission amount does not affect transfer tax."
  },
  {
    id: 104,
    c: "Math",
    q: "If price is $128,000 and loan-to-value ratio is 75% with 3 points, how much in points is due at closing?",
    a: ["$2,880", "$3,840", "$3,280", "$1,840"],
    r: 0,
    e: "Loan amount = $128,000 × 75% = $96,000. Points are paid on the loan amount. $96,000 × 3% = $2,880."
  },
  {
    id: 105,
    c: "Math",
    q: "If the salesperson's commission was $594 based on a 40% split, what was the total commission collected by the real estate company?",
    a: ["$1,485", "$2,970", "$990", "$1,980"],
    r: 0,
    e: "$594 ÷ 0.40 = $1,485. The salesperson received 40% of the total commission. The company collected $1,485 total."
  },
  {
    id: 106,
    c: "Math",
    q: "Loan amount $60,000 with 4% annual interest. Monthly payment is $300/month. What is the balance upon making the first payment?",
    a: ["$59,700", "$59,800", "$59,750", "$59,900"],
    r: 3,
    e: "Annual interest = $60,000 × 4% = $2,400. Monthly interest = $2,400 ÷ 12 = $200. Principal paid = $300 − $200 = $100. New balance = $60,000 − $100 = $59,900."
  },
  {
    id: 107,
    c: "Math",
    q: "Sue and Bill gross $90,000/yr. The lender allows 43% of their income towards PITI. If property tax is $6,000/yr. and insurance $1,200/yr. How much can they afford for mortgage payment (P&I)?",
    a: ["$2,625", "$3,225", "$2,725", "$3,125"],
    r: 0,
    e: "$90,000 × 43% = $38,700 allowed for PITI. Annual taxes + insurance = $6,000 + $1,200 = $7,200. P&I = $38,700 − $7,200 = $31,500/yr. Monthly = $31,500 ÷ 12 = $2,625."
  },
  {
    id: 108,
    c: "Math",
    q: "Two brokers cooperate to sell a $250,000 house and equally share a 7% commission. The listing salesperson splits commissions 65-35 in favor of the salesperson. How much does the salesperson receive?",
    a: ["$11,375", "$5,687.50", "$8,750", "$3,062.50"],
    r: 1,
    e: "Total commission = $250,000 × 7% = $17,500. Each broker's share = $17,500 ÷ 2 = $8,750. Listing salesperson's share = $8,750 × 65% = $5,687.50."
  },
  {
    id: 109,
    c: "Math",
    q: "What is the total depreciation deduction on residential income property purchased for $165,000 (land valued at 20%) depreciated over 27.5 years, owned for 11 years?",
    a: ["$99,000", "$66,000", "$52,800", "$79,200"],
    r: 2,
    e: "Building value = $165,000 × 80% = $132,000 (land doesn't depreciate). Annual depreciation = $132,000 ÷ 27.5 = $4,800/yr. Total for 11 years = $4,800 × 11 = $52,800."
  },

  // ── MICHIGAN RULES AND REGULATIONS ───────────────────────────────────────────
  {
    id: 110,
    c: "MI License Law",
    q: "Which of the following is NOT a purpose of the Land Division Act?",
    a: [
      "So that the size of divided parcels will not be too large to be served with streets, roads, drainage and sewers",
      "So that the price of the sold lots would not inflate beyond the CPI",
      "So that people could accurately tell the boundaries of their land using accurate legal description",
      "So that the land may be properly divided and laid out"
    ],
    r: 1,
    e: "The Michigan Land Division Act regulates how land can be subdivided to ensure proper surveying, adequate services, and legal descriptions. It does NOT control lot prices or inflation."
  },
  {
    id: 111,
    c: "MI License Law",
    q: "Under the Land Division Act, property up to 10 acres can be divided into 4 parcels. How many splits are allowed for each additional 10 acres?",
    a: ["3", "2", "1", "4"],
    r: 2,
    e: "Under Michigan's Land Division Act, property up to 10 acres may be divided into 4 parcels. For each additional 10 acres, one additional split is allowed."
  },
  {
    id: 112,
    c: "MI License Law",
    q: "If the monthly rent is $600/month, what is the most amount of money a landlord can charge a tenant to move in?",
    a: ["$1,500", "$900", "$600", "$2,100"],
    r: 0,
    e: "Under Michigan's Security Deposit Act, the maximum security deposit is 1.5 times the monthly rent. $600 × 1.5 = $900 for the deposit, plus first month's rent of $600 = $1,500 total to move in."
  },
  {
    id: 113,
    c: "MI License Law",
    q: "A landlord charging a deposit must inform the tenant of his obligation to notify the landlord of a forwarding address within _____ days after vacating.",
    a: ["4", "30", "7", "45"],
    r: 0,
    e: "Under Michigan's Security Deposit Act, the tenant must provide the landlord with a forwarding address within 4 days after vacating. The landlord then has 30 days to return the deposit or provide an itemized list of deductions."
  },
  {
    id: 114,
    c: "MI License Law",
    q: "Regarding construction of new condominiums, a purchase agreement is not binding until 9 business days after developer delivers condominium documents. Which of the following is NOT required?",
    a: [
      "Evidence of minimum 2-year warranty on construction",
      "Condominium Buyers Handbook",
      "Copy of purchase and escrow agreements",
      "Recorded master deed with attached by-laws and subdivision plans"
    ],
    r: 0,
    e: "Michigan's Condominium Act requires the developer to provide: recorded master deed, by-laws, Condominium Buyers Handbook, purchase agreement and escrow agreements. A 2-year construction warranty is NOT one of the required documents."
  },
  {
    id: 115,
    c: "MI License Law",
    q: "Interval ownership of property is reflected in which of the following?",
    a: ["Timeshare", "Lifetime stock ownership in a corporation", "Reoccurring annual lease", "Life estate"],
    r: 0,
    e: "A timeshare is interval ownership — the owner has the right to use the property for a specific time period each year. It is a form of fractional ownership."
  },
  {
    id: 116,
    c: "MI License Law",
    q: "A licensee is selling a vacant home site in an area without municipal sewers. Which of the following is true?",
    a: [
      "Vacant lots may not be sold unless they are served with municipal sewer and water",
      "10% of the purchase price must be held in escrow until served with sewer and water",
      "The purchaser is responsible for connecting the property to municipal sewers before construction",
      "The sale should be made contingent on a percolation test acceptable to the health Department"
    ],
    r: 3,
    e: "When municipal sewers are unavailable, the sale of a home site should be contingent on a satisfactory percolation test to ensure the land can support a septic system. This protects the buyer."
  },
  {
    id: 117,
    c: "MI License Law",
    q: "Which of the following is true with regards to the Michigan Condominium Act?",
    a: [
      "For new and existing condominiums, the purchase agreement is not binding until 9 business days after developer delivers documents",
      "Condominium documents must include information about the real estate company holding the deposit",
      "Recorded master deed, bylaws, purchase/escrow agreement, Condominium Buyer's Handbook, and disclosure statement must be delivered by the developer for new construction",
      "If a buyer signs a purchase agreement on new construction without required documents, buyer can withdraw within three business days"
    ],
    r: 2,
    e: "For NEW condominium construction, the developer must deliver: recorded master deed, bylaws, purchase and escrow agreements, Condominium Buyer's Handbook, and disclosure statement. The 9-day rescission period applies to new construction."
  },
  {
    id: 118,
    c: "MI License Law",
    q: "All of the following are true with regards to MSHDA EXCEPT:",
    a: [
      "Provides financing for low- and moderate-income households",
      "Borrowers must occupy the property as a principal residence",
      "Money is available for purchasing or refinancing",
      "Monies available for existing homes or new construction"
    ],
    r: 2,
    e: "MSHDA (Michigan State Housing Development Authority) provides financing for low/moderate income homebuyers for PURCHASE only — not refinancing. Borrowers must owner-occupy the property as their principal residence."
  },
  {
    id: 119,
    c: "MI License Law",
    q: "Which of the following statements is acceptable under the antitrust act?",
    a: [
      "Everyone charges the same commission rate",
      "The MLS only accepts a minimum ninety-day listing",
      "This is our market area. Tell him to stay in his own territory",
      "Our company pays a 25% referral fee if you send us business"
    ],
    r: 3,
    e: "Paying referral fees is legal under antitrust law. What is ILLEGAL under antitrust law: price-fixing (setting commission rates), market allocation (dividing territories), and group boycotts."
  },
];
