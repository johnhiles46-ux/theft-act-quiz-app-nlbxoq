
export interface QuizQuestion {
  id: string;
  section: string;
  sectionTitle: string;
  text: string;
  blanks: BlankItem[];
}

export interface BlankItem {
  word: string;
  position: number;
  options: string[]; // Array of 4 options (1 correct + 3 incorrect)
}

// Comprehensive Theft Act 1968 content with key terms
export const theftActSections = [
  {
    id: '1',
    section: 'Section 1',
    title: 'Basic definition of theft',
    fullText: 'A person is guilty of theft if he dishonestly appropriates property belonging to another with the intention of permanently depriving the other of it; and "thief" and "steal" shall be construed accordingly.',
    keywords: ['dishonestly', 'appropriates', 'property', 'belonging to another', 'intention', 'permanently depriving'],
  },
  {
    id: '2',
    section: 'Section 2(1)(a)',
    title: 'Dishonesty - belief in legal right',
    fullText: 'A person\'s appropriation of property belonging to another is not to be regarded as dishonest if he appropriates the property in the belief that he has in law the right to deprive the other of it, on behalf of himself or of a third person.',
    keywords: ['dishonest', 'appropriation', 'property', 'belief', 'right to deprive', 'third person'],
  },
  {
    id: '3',
    section: 'Section 2(1)(b)',
    title: 'Dishonesty - belief in consent',
    fullText: 'A person\'s appropriation of property belonging to another is not to be regarded as dishonest if he appropriates the property in the belief that he would have the other\'s consent if the other knew of the appropriation and the circumstances of it.',
    keywords: ['dishonest', 'appropriation', 'belief', 'consent', 'circumstances'],
  },
  {
    id: '4',
    section: 'Section 2(1)(c)',
    title: 'Dishonesty - belief owner cannot be found',
    fullText: 'A person\'s appropriation of property belonging to another is not to be regarded as dishonest if he appropriates the property in the belief that the person to whom the property belongs cannot be discovered by taking reasonable steps.',
    keywords: ['dishonest', 'appropriation', 'property', 'belief', 'discovered', 'reasonable steps'],
  },
  {
    id: '5',
    section: 'Section 2(2)',
    title: 'Dishonesty - willingness to pay',
    fullText: 'A person\'s appropriation of property belonging to another may be dishonest notwithstanding that he is willing to pay for the property.',
    keywords: ['appropriation', 'property', 'dishonest', 'notwithstanding', 'willing to pay'],
  },
  {
    id: '6',
    section: 'Section 3(1)',
    title: 'Appropriation - assumption of rights',
    fullText: 'Any assumption by a person of the rights of an owner amounts to an appropriation, and this includes, where he has come by the property (innocently or not) without stealing it, any later assumption of a right to it by keeping or dealing with it as owner.',
    keywords: ['assumption', 'rights of an owner', 'appropriation', 'innocently', 'keeping', 'dealing with it'],
  },
  {
    id: '7',
    section: 'Section 3(2)',
    title: 'Appropriation - property acquired innocently',
    fullText: 'Where property or a right or interest in property is or purports to be transferred for value to a person acting in good faith, no later assumption by him of rights which he believed himself to be acquiring shall, by reason of any defect in the transferor\'s title, amount to theft of the property.',
    keywords: ['property', 'transferred', 'value', 'good faith', 'assumption', 'defect', 'title', 'theft'],
  },
  {
    id: '8',
    section: 'Section 4(1)',
    title: 'Property - general definition',
    fullText: 'Property includes money and all other property, real or personal, including things in action and other intangible property.',
    keywords: ['Property', 'money', 'real or personal', 'things in action', 'intangible property'],
  },
  {
    id: '9',
    section: 'Section 4(2)',
    title: 'Property - land exceptions',
    fullText: 'A person cannot steal land, or things forming part of land and severed from it by him or by his directions, except in certain circumstances including when he is a trustee or personal representative, or when he is not in possession of the land and appropriates anything forming part of the land by severing it or causing it to be severed.',
    keywords: ['steal', 'land', 'severed', 'trustee', 'personal representative', 'possession', 'appropriates'],
  },
  {
    id: '10',
    section: 'Section 4(3)',
    title: 'Property - wild creatures',
    fullText: 'A person who picks mushrooms growing wild on any land, or who picks flowers, fruit or foliage from a plant growing wild on any land, does not (although not in possession of the land) steal what he picks, unless he does it for reward or for sale or other commercial purpose.',
    keywords: ['picks', 'mushrooms', 'wild', 'flowers', 'fruit', 'foliage', 'steal', 'reward', 'sale', 'commercial purpose'],
  },
  {
    id: '11',
    section: 'Section 4(4)',
    title: 'Property - wild creatures exception',
    fullText: 'Wild creatures, tamed or untamed, shall be regarded as property; but a person cannot steal a wild creature not tamed nor ordinarily kept in captivity, or the carcase of any such creature, unless either it has been reduced into possession by or on behalf of another person and possession of it has not since been lost or abandoned, or another person is in course of reducing it into possession.',
    keywords: ['Wild creatures', 'tamed', 'untamed', 'property', 'steal', 'captivity', 'carcase', 'possession', 'abandoned', 'reducing'],
  },
  {
    id: '12',
    section: 'Section 5(1)',
    title: 'Belonging to another - possession and control',
    fullText: 'Property shall be regarded as belonging to any person having possession or control of it, or having in it any proprietary right or interest (not being an equitable interest arising only from an agreement to transfer or grant an interest).',
    keywords: ['Property', 'belonging to', 'possession', 'control', 'proprietary right', 'interest', 'equitable interest'],
  },
  {
    id: '13',
    section: 'Section 5(3)',
    title: 'Belonging to another - property received under obligation',
    fullText: 'Where a person receives property from or on account of another, and is under an obligation to the other to retain and deal with that property or its proceeds in a particular way, the property or proceeds shall be regarded (as against him) as belonging to the other.',
    keywords: ['receives', 'property', 'obligation', 'retain', 'deal with', 'proceeds', 'particular way', 'belonging to'],
  },
  {
    id: '14',
    section: 'Section 5(4)',
    title: 'Belonging to another - property obtained by mistake',
    fullText: 'Where a person gets property by another\'s mistake, and is under an obligation to make restoration (in whole or in part) of the property or its proceeds or of the value thereof, then to the extent of that obligation the property or proceeds shall be regarded (as against him) as belonging to the person entitled to restoration.',
    keywords: ['gets', 'property', 'mistake', 'obligation', 'restoration', 'proceeds', 'value', 'belonging to', 'entitled'],
  },
  {
    id: '15',
    section: 'Section 6(1)',
    title: 'Intention of permanently depriving - treating as own',
    fullText: 'A person appropriating property belonging to another without meaning the other permanently to lose the thing itself is nevertheless to be regarded as having the intention of permanently depriving the other of it if his intention is to treat the thing as his own to dispose of regardless of the other\'s rights.',
    keywords: ['appropriating', 'property', 'permanently to lose', 'intention', 'permanently depriving', 'treat', 'dispose of', 'regardless', 'rights'],
  },
  {
    id: '16',
    section: 'Section 6(2)',
    title: 'Intention of permanently depriving - borrowing or lending',
    fullText: 'Without prejudice to the generality of subsection (1) above, where a person, having possession or control (lawfully or not) of property belonging to another, parts with the property under a condition as to its return which he may not be able to perform, this (if done for purposes of his own and without the other\'s authority) amounts to treating the property as his own to dispose of regardless of the other\'s rights.',
    keywords: ['possession', 'control', 'property', 'parts with', 'condition', 'return', 'perform', 'authority', 'treating', 'dispose of', 'rights'],
  },
  {
    id: '17',
    section: 'Section 7',
    title: 'Theft - maximum penalty',
    fullText: 'A person guilty of theft shall on conviction on indictment be liable to imprisonment for a term not exceeding seven years.',
    keywords: ['guilty', 'theft', 'conviction', 'indictment', 'liable', 'imprisonment', 'seven years'],
  },
  {
    id: '18',
    section: 'Section 8(1)',
    title: 'Robbery - definition',
    fullText: 'A person is guilty of robbery if he steals, and immediately before or at the time of doing so, and in order to do so, he uses force on any person or puts or seeks to put any person in fear of being then and there subjected to force.',
    keywords: ['robbery', 'steals', 'immediately before', 'at the time', 'uses force', 'puts', 'fear', 'subjected to force'],
  },
  {
    id: '19',
    section: 'Section 8(2)',
    title: 'Robbery - maximum penalty',
    fullText: 'A person guilty of robbery, or of an assault with intent to rob, shall on conviction on indictment be liable to imprisonment for life.',
    keywords: ['guilty', 'robbery', 'assault', 'intent to rob', 'conviction', 'indictment', 'liable', 'imprisonment', 'life'],
  },
  {
    id: '20',
    section: 'Section 9(1)(a)',
    title: 'Burglary - entering with intent',
    fullText: 'A person is guilty of burglary if he enters any building or part of a building as a trespasser and with intent to commit any such offence as is mentioned in subsection (2) below.',
    keywords: ['burglary', 'enters', 'building', 'part of a building', 'trespasser', 'intent', 'offence'],
  },
  {
    id: '21',
    section: 'Section 9(1)(b)',
    title: 'Burglary - entering and committing offence',
    fullText: 'A person is guilty of burglary if having entered any building or part of a building as a trespasser he steals or attempts to steal anything in the building or that part of it or inflicts or attempts to inflict on any person therein any grievous bodily harm.',
    keywords: ['burglary', 'entered', 'building', 'trespasser', 'steals', 'attempts to steal', 'inflicts', 'grievous bodily harm'],
  },
  {
    id: '22',
    section: 'Section 9(2)',
    title: 'Burglary - specified offences',
    fullText: 'The offences referred to in subsection (1)(a) above are offences of stealing anything in the building or part of a building in question, of inflicting on any person therein any grievous bodily harm or raping any person therein, and of doing unlawful damage to the building or anything therein.',
    keywords: ['offences', 'stealing', 'building', 'inflicting', 'grievous bodily harm', 'raping', 'unlawful damage'],
  },
  {
    id: '23',
    section: 'Section 9(3)',
    title: 'Burglary - inhabited vehicle or vessel',
    fullText: 'A person guilty of burglary shall on conviction on indictment be liable to imprisonment for a term not exceeding fourteen years if the building or part of a building in question is a dwelling, and ten years in any other case.',
    keywords: ['guilty', 'burglary', 'conviction', 'indictment', 'liable', 'imprisonment', 'fourteen years', 'dwelling', 'ten years'],
  },
  {
    id: '24',
    section: 'Section 10(1)',
    title: 'Aggravated burglary - with weapon',
    fullText: 'A person is guilty of aggravated burglary if he commits any burglary and at the time has with him any firearm or imitation firearm, any weapon of offence, or any explosive.',
    keywords: ['aggravated burglary', 'commits', 'burglary', 'at the time', 'firearm', 'imitation firearm', 'weapon of offence', 'explosive'],
  },
  {
    id: '25',
    section: 'Section 10(2)',
    title: 'Aggravated burglary - maximum penalty',
    fullText: 'A person guilty of aggravated burglary shall on conviction on indictment be liable to imprisonment for life.',
    keywords: ['guilty', 'aggravated burglary', 'conviction', 'indictment', 'liable', 'imprisonment', 'life'],
  },
  {
    id: '26',
    section: 'Section 12(1)',
    title: 'Taking motor vehicle without authority',
    fullText: 'A person shall be guilty of an offence if, without having the consent of the owner or other lawful authority, he takes any conveyance for his own or another\'s use or, knowing that any conveyance has been taken without such authority, drives it or allows himself to be carried in or on it.',
    keywords: ['guilty', 'offence', 'consent', 'owner', 'lawful authority', 'takes', 'conveyance', 'drives', 'carried'],
  },
  {
    id: '27',
    section: 'Section 12(5)',
    title: 'Taking conveyance - definition',
    fullText: 'In this section "conveyance" means any conveyance constructed or adapted for the carriage of a person or persons whether by land, water or air, except that it does not include a conveyance constructed or adapted for use only under the control of a person not carried in or on it.',
    keywords: ['conveyance', 'constructed', 'adapted', 'carriage', 'person', 'land', 'water', 'air', 'control'],
  },
  {
    id: '28',
    section: 'Section 13',
    title: 'Abstracting electricity',
    fullText: 'A person who dishonestly uses without due authority, or dishonestly causes to be wasted or diverted, any electricity shall on conviction on indictment be liable to imprisonment for a term not exceeding five years.',
    keywords: ['dishonestly', 'uses', 'due authority', 'wasted', 'diverted', 'electricity', 'conviction', 'indictment', 'imprisonment', 'five years'],
  },
  {
    id: '29',
    section: 'Section 15(1)',
    title: 'Obtaining property by deception',
    fullText: 'A person who by any deception dishonestly obtains property belonging to another, with the intention of permanently depriving the other of it, shall be guilty of an offence.',
    keywords: ['deception', 'dishonestly', 'obtains', 'property', 'belonging to another', 'intention', 'permanently depriving', 'guilty', 'offence'],
  },
  {
    id: '30',
    section: 'Section 15(4)',
    title: 'Deception - definition',
    fullText: 'For purposes of this section "deception" means any deception (whether deliberate or reckless) by words or conduct as to fact or as to law, including a deception as to the present intentions of the person using the deception or any other person.',
    keywords: ['deception', 'deliberate', 'reckless', 'words', 'conduct', 'fact', 'law', 'present intentions'],
  },
  {
    id: '31',
    section: 'Section 16(1)',
    title: 'Obtaining pecuniary advantage by deception',
    fullText: 'A person who by any deception dishonestly obtains for himself or another any pecuniary advantage shall on conviction on indictment be liable to imprisonment for a term not exceeding five years.',
    keywords: ['deception', 'dishonestly', 'obtains', 'pecuniary advantage', 'conviction', 'indictment', 'liable', 'imprisonment', 'five years'],
  },
  {
    id: '32',
    section: 'Section 17(1)',
    title: 'False accounting',
    fullText: 'Where a person dishonestly, with a view to gain for himself or another or with intent to cause loss to another, destroys, defaces, conceals or falsifies any account or any record or document made or required for any accounting purpose, he shall be guilty of an offence.',
    keywords: ['dishonestly', 'view to gain', 'intent', 'cause loss', 'destroys', 'defaces', 'conceals', 'falsifies', 'account', 'record', 'document', 'accounting purpose', 'guilty', 'offence'],
  },
  {
    id: '33',
    section: 'Section 17(2)',
    title: 'False accounting - maximum penalty',
    fullText: 'A person guilty of an offence under this section shall on conviction on indictment be liable to imprisonment for a term not exceeding seven years.',
    keywords: ['guilty', 'offence', 'conviction', 'indictment', 'liable', 'imprisonment', 'seven years'],
  },
  {
    id: '34',
    section: 'Section 20(2)',
    title: 'Suppression of documents',
    fullText: 'A person who dishonestly, with a view to gain for himself or another or with intent to cause loss to another, destroys, defaces or conceals any valuable security, any will or other testamentary document or any original document of or belonging to, or filed or deposited in, any court of justice or any government department shall be guilty of an offence.',
    keywords: ['dishonestly', 'view to gain', 'intent', 'cause loss', 'destroys', 'defaces', 'conceals', 'valuable security', 'will', 'testamentary document', 'court of justice', 'government department', 'guilty', 'offence'],
  },
  {
    id: '35',
    section: 'Section 21(1)',
    title: 'Blackmail - definition',
    fullText: 'A person is guilty of blackmail if, with a view to gain for himself or another or with intent to cause loss to another, he makes any unwarranted demand with menaces.',
    keywords: ['guilty', 'blackmail', 'view to gain', 'intent', 'cause loss', 'unwarranted demand', 'menaces'],
  },
  {
    id: '36',
    section: 'Section 21(2)',
    title: 'Blackmail - unwarranted demand',
    fullText: 'A demand with menaces is unwarranted unless the person making it does so in the belief that he has reasonable grounds for making the demand and that the use of the menaces is a proper means of reinforcing the demand.',
    keywords: ['demand', 'menaces', 'unwarranted', 'belief', 'reasonable grounds', 'proper means', 'reinforcing'],
  },
  {
    id: '37',
    section: 'Section 21(3)',
    title: 'Blackmail - maximum penalty',
    fullText: 'A person guilty of blackmail shall on conviction on indictment be liable to imprisonment for a term not exceeding fourteen years.',
    keywords: ['guilty', 'blackmail', 'conviction', 'indictment', 'liable', 'imprisonment', 'fourteen years'],
  },
  {
    id: '38',
    section: 'Section 22(1)',
    title: 'Handling stolen goods - definition',
    fullText: 'A person handles stolen goods if (otherwise than in the course of the stealing) knowing or believing them to be stolen goods he dishonestly receives the goods, or dishonestly undertakes or assists in their retention, removal, disposal or realisation by or for the benefit of another person, or if he arranges to do so.',
    keywords: ['handles', 'stolen goods', 'course of the stealing', 'knowing', 'believing', 'dishonestly', 'receives', 'undertakes', 'assists', 'retention', 'removal', 'disposal', 'realisation', 'benefit', 'arranges'],
  },
  {
    id: '39',
    section: 'Section 22(2)',
    title: 'Handling stolen goods - maximum penalty',
    fullText: 'A person guilty of handling stolen goods shall on conviction on indictment be liable to imprisonment for a term not exceeding fourteen years.',
    keywords: ['guilty', 'handling', 'stolen goods', 'conviction', 'indictment', 'liable', 'imprisonment', 'fourteen years'],
  },
  {
    id: '40',
    section: 'Section 24(1)',
    title: 'Scope of offences relating to stolen goods',
    fullText: 'The provisions of this Act relating to goods which have been stolen shall apply whether the stealing occurred in England or Wales or elsewhere, and whether it occurred before or after the commencement of this Act, provided that the stealing (if not an offence under this Act) amounted to an offence where and at the time when the goods were stolen.',
    keywords: ['provisions', 'goods', 'stolen', 'stealing', 'England', 'Wales', 'elsewhere', 'commencement', 'offence'],
  },
  {
    id: '41',
    section: 'Section 24(2)',
    title: 'When goods cease to be stolen',
    fullText: 'For purposes of those provisions references to stolen goods shall include, in addition to the goods originally stolen and parts of them (whether in their original state or not), any other goods which directly or indirectly represent or have at any time represented the stolen goods in the hands of the thief as being the proceeds of any disposal or realisation of the whole or part of the goods stolen or of goods so representing the stolen goods.',
    keywords: ['stolen goods', 'originally stolen', 'parts', 'original state', 'directly', 'indirectly', 'represent', 'proceeds', 'disposal', 'realisation', 'thief'],
  },
  {
    id: '42',
    section: 'Section 24(3)',
    title: 'Goods ceasing to be stolen',
    fullText: 'But no goods shall be regarded as having continued to be stolen goods after they have been restored to the person from whom they were stolen or to other lawful possession or custody, or after that person and any other person claiming through him have otherwise ceased to have any right to restitution in respect of the theft.',
    keywords: ['goods', 'stolen goods', 'restored', 'person', 'lawful possession', 'custody', 'ceased', 'right to restitution', 'theft'],
  },
  {
    id: '43',
    section: 'Section 24(4)',
    title: 'Goods obtained by blackmail or deception',
    fullText: 'For purposes of the provisions of this Act relating to goods which have been stolen (including subsections (1) to (3) above) goods obtained in England or Wales or elsewhere either by blackmail or in the circumstances described in section 15(1) of this Act shall be regarded as stolen.',
    keywords: ['goods', 'stolen', 'obtained', 'England', 'Wales', 'elsewhere', 'blackmail', 'circumstances', 'regarded'],
  },
  {
    id: '44',
    section: 'Section 25(1)',
    title: 'Going equipped for stealing',
    fullText: 'A person shall be guilty of an offence if, when not at his place of abode, he has with him any article for use in the course of or in connection with any burglary, theft or cheat.',
    keywords: ['guilty', 'offence', 'place of abode', 'has with him', 'article', 'use', 'course of', 'connection with', 'burglary', 'theft', 'cheat'],
  },
  {
    id: '45',
    section: 'Section 25(3)',
    title: 'Going equipped - maximum penalty',
    fullText: 'A person guilty of an offence under this section shall on conviction on indictment be liable to imprisonment for a term not exceeding three years.',
    keywords: ['guilty', 'offence', 'conviction', 'indictment', 'liable', 'imprisonment', 'three years'],
  },
  {
    id: '46',
    section: 'Section 27(3)',
    title: 'Husband and wife',
    fullText: 'A person shall have the same right to bring proceedings against his wife for any offence (whether under this Act or otherwise) as if they were not married, and a person bringing any such proceedings shall be competent to give evidence for the prosecution at every stage of the proceedings.',
    keywords: ['right', 'proceedings', 'wife', 'offence', 'married', 'competent', 'evidence', 'prosecution', 'stage'],
  },
  {
    id: '47',
    section: 'Section 30(1)',
    title: 'Spouses and civil partners',
    fullText: 'This Act shall apply in relation to the parties to a marriage, and to property belonging to the wife or husband whether or not by reason of an interest derived from the marriage, as it would apply if they were not married and any such interest subsisted independently of the marriage.',
    keywords: ['apply', 'parties', 'marriage', 'property', 'belonging to', 'wife', 'husband', 'interest', 'derived', 'subsisted', 'independently'],
  },
  {
    id: '48',
    section: 'Section 30(4)',
    title: 'Theft in course of family arrangement',
    fullText: 'Notwithstanding section 1 above, a person shall not be guilty of theft by reason only of his appropriation of property belonging to another if the appropriation is made in the course of a bona fide claim of right made in good faith.',
    keywords: ['guilty', 'theft', 'reason only', 'appropriation', 'property', 'belonging to another', 'course of', 'bona fide', 'claim of right', 'good faith'],
  },
  {
    id: '49',
    section: 'Section 34(1)',
    title: 'Interpretation - general',
    fullText: 'In this Act "gain" and "loss" are to be construed as extending only to gain or loss in money or other property, but as extending to any such gain or loss whether temporary or permanent.',
    keywords: ['gain', 'loss', 'construed', 'extending', 'money', 'property', 'temporary', 'permanent'],
  },
  {
    id: '50',
    section: 'Section 34(2)',
    title: 'Interpretation - gain and loss',
    fullText: 'For purposes of this Act "gain" includes a gain by keeping what one has, as well as a gain by getting what one has not; and "loss" includes a loss by not getting what one might get, as well as a loss by parting with what one has.',
    keywords: ['gain', 'keeping', 'getting', 'loss', 'not getting', 'might get', 'parting with'],
  },
];

// Criminal Damage Act 1971 content
export const criminalDamageActSections = [
  {
    id: 'cd1',
    section: 'Section 1(1)',
    title: 'Destroying or damaging property',
    fullText: 'A person who without lawful excuse destroys or damages any property belonging to another intending to destroy or damage any such property or being reckless as to whether any such property would be destroyed or damaged shall be guilty of an offence.',
    keywords: ['lawful excuse', 'destroys', 'damages', 'property', 'belonging to another', 'intending', 'reckless', 'guilty', 'offence'],
  },
  {
    id: 'cd2',
    section: 'Section 1(2)',
    title: 'Destroying or damaging property with intent to endanger life',
    fullText: 'A person who without lawful excuse destroys or damages any property, whether belonging to himself or another, intending to destroy or damage any property or being reckless as to whether any property would be destroyed or damaged and intending by the destruction or damage to endanger the life of another or being reckless as to whether the life of another would be thereby endangered, shall be guilty of an offence.',
    keywords: ['lawful excuse', 'destroys', 'damages', 'property', 'intending', 'reckless', 'endanger the life', 'another', 'guilty', 'offence'],
  },
  {
    id: 'cd3',
    section: 'Section 1(3)',
    title: 'Maximum penalty for simple criminal damage',
    fullText: 'An offence committed under this section by destroying or damaging property by fire shall be charged as arson.',
    keywords: ['offence', 'destroying', 'damaging', 'property', 'fire', 'charged', 'arson'],
  },
  {
    id: 'cd4',
    section: 'Section 2',
    title: 'Threats to destroy or damage property',
    fullText: 'A person who without lawful excuse makes to another a threat, intending that that other would fear it would be carried out, to destroy or damage any property belonging to that other or a third person; or to destroy or damage his own property in a way which he knows is likely to endanger the life of that other or a third person; shall be guilty of an offence.',
    keywords: ['lawful excuse', 'threat', 'intending', 'fear', 'carried out', 'destroy', 'damage', 'property', 'endanger the life', 'guilty', 'offence'],
  },
  {
    id: 'cd5',
    section: 'Section 3',
    title: 'Possessing anything with intent to destroy or damage property',
    fullText: 'A person who has anything in his custody or under his control intending without lawful excuse to use it or cause or permit another to use it to destroy or damage any property belonging to some other person; or to destroy or damage his own or the user\'s property in a way which he knows is likely to endanger the life of some other person; shall be guilty of an offence.',
    keywords: ['custody', 'control', 'intending', 'lawful excuse', 'use', 'cause', 'permit', 'destroy', 'damage', 'property', 'endanger the life', 'guilty', 'offence'],
  },
  {
    id: 'cd6',
    section: 'Section 4(1)',
    title: 'Maximum penalties - simple damage',
    fullText: 'A person guilty of arson under section 1 above or of an offence under section 1(2) above (whether arson or not) shall on conviction on indictment be liable to imprisonment for life.',
    keywords: ['guilty', 'arson', 'offence', 'conviction', 'indictment', 'liable', 'imprisonment', 'life'],
  },
  {
    id: 'cd7',
    section: 'Section 4(2)',
    title: 'Maximum penalties - other offences',
    fullText: 'A person guilty of an offence under section 1(1) above (other than arson) shall on conviction on indictment be liable to imprisonment for a term not exceeding ten years.',
    keywords: ['guilty', 'offence', 'arson', 'conviction', 'indictment', 'liable', 'imprisonment', 'ten years'],
  },
  {
    id: 'cd8',
    section: 'Section 5(1)',
    title: 'Without lawful excuse - general',
    fullText: 'This section applies to any offence under section 1(1) above and any offence under section 2 or 3 above other than one involving a threat by the person charged to destroy or damage property in a way which he knows is likely to endanger the life of another or involving an intent by the person charged to use or cause or permit the use of something in his custody or under his control so to destroy or damage property.',
    keywords: ['offence', 'threat', 'destroy', 'damage', 'property', 'endanger the life', 'intent', 'custody', 'control'],
  },
  {
    id: 'cd9',
    section: 'Section 5(2)(a)',
    title: 'Lawful excuse - belief in consent',
    fullText: 'A person charged with an offence to which this section applies shall, whether or not he would be treated for the purposes of this Act as having a lawful excuse apart from this subsection, be treated for those purposes as having a lawful excuse if at the time of the act or acts alleged to constitute the offence he believed that the person or persons whom he believed to be entitled to consent to the destruction of or damage to the property in question had so consented, or would have so consented to it if he or they had known of the destruction or damage and its circumstances.',
    keywords: ['charged', 'offence', 'lawful excuse', 'believed', 'entitled', 'consent', 'destruction', 'damage', 'property', 'circumstances'],
  },
  {
    id: 'cd10',
    section: 'Section 5(2)(b)',
    title: 'Lawful excuse - protection of property',
    fullText: 'A person charged with an offence to which this section applies shall be treated as having a lawful excuse if he destroyed or damaged or threatened to destroy or damage the property in question or, in the case of a charge of an offence under section 3 above, intended to use or cause or permit the use of something to destroy or damage it, in order to protect property belonging to himself or another or a right or interest in property which was or which he believed to be vested in himself or another, and at the time of the act or acts alleged to constitute the offence he believed that the property, right or interest was in immediate need of protection; and that the means of protection adopted or proposed to be adopted were or would be reasonable having regard to all the circumstances.',
    keywords: ['charged', 'offence', 'lawful excuse', 'destroyed', 'damaged', 'threatened', 'property', 'protect', 'right', 'interest', 'vested', 'believed', 'immediate need', 'protection', 'reasonable', 'circumstances'],
  },
  {
    id: 'cd11',
    section: 'Section 5(3)',
    title: 'Honest belief sufficient',
    fullText: 'For the purposes of this section it is immaterial whether a belief is justified or not if it is honestly held.',
    keywords: ['immaterial', 'belief', 'justified', 'honestly held'],
  },
  {
    id: 'cd12',
    section: 'Section 5(4)',
    title: 'Belief induced by intoxication',
    fullText: 'For the purposes of this section a right or interest in property includes any right or privilege in or over land, whether created by grant, licence or otherwise.',
    keywords: ['right', 'interest', 'property', 'privilege', 'land', 'grant', 'licence'],
  },
  {
    id: 'cd13',
    section: 'Section 5(5)',
    title: 'Rights and interests in property',
    fullText: 'This section shall not be construed as casting doubt on any defence recognised by law as a defence to criminal charges.',
    keywords: ['construed', 'casting doubt', 'defence', 'recognised', 'law', 'criminal charges'],
  },
  {
    id: 'cd14',
    section: 'Section 10(1)',
    title: 'Interpretation - property',
    fullText: 'In this Act "property" means property of a tangible nature, whether real or personal, including money and including wild creatures which have been tamed or are ordinarily kept in captivity, and any other wild creatures or their carcases if, but only if, they have been reduced into possession which has not been lost or abandoned or are in the course of being reduced into possession; but property does not include mushrooms growing wild on any land or flowers, fruit or foliage of a plant growing wild on any land.',
    keywords: ['property', 'tangible nature', 'real', 'personal', 'money', 'wild creatures', 'tamed', 'captivity', 'carcases', 'possession', 'abandoned', 'mushrooms', 'flowers', 'fruit', 'foliage'],
  },
  {
    id: 'cd15',
    section: 'Section 10(2)',
    title: 'Interpretation - belonging to another',
    fullText: 'Property shall be treated for the purposes of this Act as belonging to any person having the custody or control of it; having in it any proprietary right or interest (not being an equitable interest arising only from an agreement to transfer or grant an interest); or having a charge on it.',
    keywords: ['Property', 'treated', 'belonging to', 'custody', 'control', 'proprietary right', 'interest', 'equitable interest', 'charge'],
  },
  {
    id: 'cd16',
    section: 'Section 10(3)',
    title: 'Property of person with limited interest',
    fullText: 'Where property is subject to a trust, the persons to whom it belongs shall be so treated as including any person having a right to enforce the trust.',
    keywords: ['property', 'subject to', 'trust', 'belongs', 'treated', 'right', 'enforce'],
  },
  {
    id: 'cd17',
    section: 'Section 10(4)',
    title: 'Property of corporation sole',
    fullText: 'Property of a corporation sole shall be so treated as belonging to the corporation notwithstanding a vacancy in the corporation.',
    keywords: ['Property', 'corporation sole', 'treated', 'belonging to', 'corporation', 'notwithstanding', 'vacancy'],
  },
];

// Combine all sections for question generation
export const allSections = [...theftActSections, ...criminalDamageActSections];

// Expanded pool of incorrect options for generating distractors
const incorrectOptionsPool = [
  // Honesty and mental state terms
  'honestly', 'recklessly', 'negligently', 'knowingly', 'intentionally', 'carelessly',
  'deliberately', 'innocently', 'mistakenly', 'accidentally', 'unwittingly',
  
  // Action verbs
  'borrows', 'lends', 'uses', 'holds', 'keeps', 'retains', 'maintains',
  'takes', 'seizes', 'acquires', 'obtains', 'procures', 'receives', 'accepts',
  'removes', 'transfers', 'conveys', 'delivers', 'surrenders', 'relinquishes',
  
  // Property and ownership terms
  'goods', 'chattels', 'possessions', 'assets', 'belongings', 'effects',
  'ownership', 'custody', 'bailment', 'license', 'easement', 'tenure',
  'title', 'claim', 'entitlement', 'interest', 'stake', 'share',
  
  // Time-related terms
  'temporarily', 'briefly', 'momentarily', 'indefinitely', 'perpetually',
  'immediately', 'subsequently', 'eventually', 'ultimately', 'presently',
  
  // Legal concepts
  'conviction', 'acquittal', 'sentence', 'penalty', 'punishment', 'sanction',
  'liability', 'responsibility', 'culpability', 'guilt', 'innocence',
  'jurisdiction', 'authority', 'power', 'right', 'privilege', 'immunity',
  
  // Force and violence terms
  'violence', 'threat', 'coercion', 'intimidation', 'pressure', 'duress',
  'compulsion', 'constraint', 'restraint', 'detention', 'confinement',
  
  // Building and location terms
  'structure', 'dwelling', 'premises', 'residence', 'property', 'estate',
  'facility', 'establishment', 'compound', 'enclosure', 'area', 'zone',
  
  // Person status terms
  'intruder', 'visitor', 'guest', 'occupant', 'tenant', 'resident',
  'owner', 'possessor', 'holder', 'custodian', 'guardian', 'trustee',
  
  // Deception and fraud terms
  'fraud', 'misrepresentation', 'falsehood', 'lie', 'trick', 'ruse',
  'pretense', 'fabrication', 'forgery', 'counterfeit', 'imitation',
  
  // Handling and dealing terms
  'storing', 'preserving', 'safeguarding', 'protecting', 'securing',
  'sale', 'transfer', 'distribution', 'allocation', 'assignment',
  'conversion', 'liquidation', 'monetization', 'exchange', 'barter',
  
  // Belief and knowledge terms
  'suspicion', 'awareness', 'understanding', 'recognition', 'perception',
  'assumption', 'presumption', 'supposition', 'conjecture', 'speculation',
  
  // Consent and permission terms
  'permission', 'authorization', 'approval', 'sanction', 'endorsement',
  'agreement', 'assent', 'acquiescence', 'compliance', 'conformity',
  
  // Harm and damage terms
  'injury', 'damage', 'harm', 'hurt', 'wound', 'trauma',
  'impairment', 'detriment', 'prejudice', 'disadvantage', 'loss',
  
  // Intent and purpose terms
  'purpose', 'objective', 'aim', 'goal', 'target', 'end',
  'motive', 'reason', 'cause', 'basis', 'ground', 'justification',
  
  // Criminal Damage specific terms
  'arson', 'fire', 'explosion', 'vandalism', 'defacement', 'mutilation',
  'demolition', 'destruction', 'ruination', 'wreckage', 'devastation',
  'endangerment', 'peril', 'jeopardy', 'hazard', 'risk', 'menace',
];

// Function to generate contextually relevant incorrect options
function generateIncorrectOptions(correctAnswer: string, allKeywords: string[]): string[] {
  const incorrectOptions: string[] = [];
  const correctLower = correctAnswer.toLowerCase();
  
  // Strategy 1: Use other keywords from the same section (most relevant)
  const otherKeywords = allKeywords.filter(
    keyword => keyword.toLowerCase() !== correctLower
  );
  
  // Shuffle and take up to 2 from other keywords
  const shuffledKeywords = [...otherKeywords].sort(() => Math.random() - 0.5);
  incorrectOptions.push(...shuffledKeywords.slice(0, 2));
  
  // Strategy 2: Find semantically similar words from the pool
  const similarWords = incorrectOptionsPool.filter(option => {
    const optionLower = option.toLowerCase();
    // Avoid exact matches and already selected options
    if (optionLower === correctLower || 
        incorrectOptions.some(opt => opt.toLowerCase() === optionLower)) {
      return false;
    }
    
    // Check for semantic similarity (same word family, similar length, etc.)
    const correctRoot = correctLower.replace(/ly$|ing$|ed$|s$/, '');
    const optionRoot = optionLower.replace(/ly$|ing$|ed$|s$/, '');
    
    // Include if roots are similar or if they're in the same category
    return correctRoot.includes(optionRoot) || 
           optionRoot.includes(correctRoot) ||
           Math.abs(correctLower.length - optionLower.length) <= 3;
  });
  
  // Shuffle similar words and add some
  const shuffledSimilar = [...similarWords].sort(() => Math.random() - 0.5);
  incorrectOptions.push(...shuffledSimilar.slice(0, 1));
  
  // Strategy 3: Fill remaining slots with random pool options
  if (incorrectOptions.length < 3) {
    const remainingPool = incorrectOptionsPool.filter(option => 
      option.toLowerCase() !== correctLower &&
      !incorrectOptions.some(opt => opt.toLowerCase() === option.toLowerCase())
    );
    
    const shuffledPool = [...remainingPool].sort(() => Math.random() - 0.5);
    incorrectOptions.push(...shuffledPool.slice(0, 3 - incorrectOptions.length));
  }
  
  // Ensure we have exactly 3 incorrect options
  return incorrectOptions.slice(0, 3);
}

// Function to generate a random question with blanks and multiple choice options
export function generateQuestion(): QuizQuestion {
  // Select a random section from all sections (Theft Act + Criminal Damage Act)
  const section = allSections[Math.floor(Math.random() * allSections.length)];
  
  // Determine how many blanks to create (1-3, weighted towards 2)
  const rand = Math.random();
  let numBlanks: number;
  if (rand < 0.2) {
    numBlanks = 1;
  } else if (rand < 0.8) {
    numBlanks = 2;
  } else {
    numBlanks = 3;
  }
  
  numBlanks = Math.min(numBlanks, section.keywords.length);
  
  // Randomly select keywords to blank out
  const shuffledKeywords = [...section.keywords].sort(() => Math.random() - 0.5);
  const selectedKeywords = shuffledKeywords.slice(0, numBlanks);
  
  // Create blanks array with positions and options
  const blanks: BlankItem[] = [];
  let textWithBlanks = section.fullText;
  
  // Track replacements to handle multiple occurrences correctly
  const replacements: Array<{ keyword: string; index: number; position: number }> = [];
  
  selectedKeywords.forEach((keyword, index) => {
    // Find the position of the keyword in the text (case-insensitive)
    const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    const match = textWithBlanks.match(regex);
    
    if (match && match.index !== undefined) {
      const position = match.index;
      
      // Generate 3 incorrect options
      const incorrectOptions = generateIncorrectOptions(keyword, section.keywords);
      
      // Combine correct answer with incorrect options and shuffle
      const allOptions = [keyword, ...incorrectOptions].sort(() => Math.random() - 0.5);
      
      blanks.push({
        word: keyword,
        position: position,
        options: allOptions,
      });
      
      // Replace the keyword with a blank placeholder
      textWithBlanks = textWithBlanks.replace(regex, `___${index}___`);
    }
  });
  
  // Sort blanks by position to maintain correct order
  blanks.sort((a, b) => a.position - b.position);
  
  console.log(`Generated question from ${section.section}: ${section.title}`);
  console.log(`Number of blanks: ${blanks.length}`);
  
  return {
    id: section.id,
    section: section.section,
    sectionTitle: section.title,
    text: textWithBlanks,
    blanks: blanks,
  };
}

// Function to check if an answer is correct (case-insensitive, trimmed)
export function checkAnswer(userAnswer: string, correctAnswer: string): boolean {
  const normalizedUser = userAnswer.trim().toLowerCase();
  const normalizedCorrect = correctAnswer.trim().toLowerCase();
  return normalizedUser === normalizedCorrect;
}
