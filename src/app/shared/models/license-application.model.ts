//APPLICATIONS

export interface SubmitDTO {
  applicationId: number;
}
export interface Application {
  applicationId: number;
  currentStep: number;
  applicationType: number;
  applicationStatus: number;
  otherApplicationType: number;
  submissionDate: any;
}

export interface ApplicationDTO {
  applicationType: number,
  subApplicationType: number
}

export interface LicenseApplicationDTO {
  id: string;
  applicationId: number;
  currentStep: number;
  applicationType: number;
  otherApplicationType: number;
  applicant: Applicant;
  business: Business;
  contactPerson: ContactPerson;
  applicationDocuments: any[],
  price: number,
  licenseFee: number,
  licenseApplication: LicenseApplication,
  clearanceGeneratingSetImportation: ClearanceApplication,
  meteringServiceProviderCertificate: MeteringApplication,
  paymentDetails:PaymentDetails,
  licenseFeeDetails:PaymentDetails,
  qrCodePath: string,
  submissionDate: string;
  expiryDate: string,
  effectiveDate: string,
  updatedAt: string,
  meterAssetProviderFor: string,
  fobCharge: string,
  invoiceNumber: string,
  fuelType: string,
  meteringAssetProviderCertificate: MeteringAssetProvider,
  departmentId?: number;
  signatures: Signature[]
}

export interface Signature {
  departmentName: string,
  positionName: string,
  signature: string
}

export interface MeteringAssetProvider {
  meteringAssetProviderId: number,
  applicationId: number,
  currentStep: number,
  isSecondStepSubmitted: true,
  consortiumMembers: string,
  attestation: {
    representativeDetailsId: number,
    applicationId: number,
    type: number,
    name: string,
    dateSubmitted: string,
    signature: string,
    signaturePath: string,
    fileName: string,
    tinNumber: string
  },
  companyRegistrationDetails: CompanyRegistrationDetails,
  directors: [
    {
      companyExecutiveSectionId: number,
      name: string,
      nationality: string,
      countryOfResidence: string,
      physicalAddress: string,
      detailsOfConviction: string,
      type: number,
      licenseApplicationId: number,
      emailAddress: string,
      meteringAssetProviderId: number,
      phoneNumber: string
    }
  ],
  meteringAssetProviderStepTwoDTO: {
    meteringAssetProviderStepTwoId: number,
    meteringAssetProviderId: number,
    applicantName: string,
    nameOfDistributionCompany: string,
    registeredAddressOfApplicant: string,
    addressOfApplicantInFranchiseArea: string,
    applicantWarehouseAddress: string,
    phaseMeterTypes: MeterToBeDeployed[],
    metersToBeDeployed: MeterToBeDeployed[],
    meterCost: MeterToBeDeployed,
    installationCost: MeterToBeDeployed,
    replacementCost: MeterToBeDeployed,
    maintenanceCost: MeterToBeDeployed,
    totalUpfrontCost: MeterToBeDeployed,
    amortization3Years: MeterToBeDeployed,
    amortization5Years: MeterToBeDeployed,
    amortization10Years: MeterToBeDeployed,
    amortization1numberYears: MeterToBeDeployed,
    type: MeterToBeDeployed,
    brand: MeterToBeDeployed,
    countryOfManufacturer: MeterToBeDeployed,
    technicalLife: MeterToBeDeployed,
    dateOfFirstDeployment: MeterToBeDeployed,
    monthlyNumberOfMetersToBeInstalled: MeterToBeDeployed,
    dateOfLastDeployment: MeterToBeDeployed,
    nameOfManufacturer: MeterToBeDeployed,
    addressOfManufacturer: MeterToBeDeployed,
    numberOfMeterToBeSourced: MeterToBeDeployed,
    dateOfDeploymentOfLocalMeters: MeterToBeDeployed,
    numberOfMetersManufactured: MeterToBeDeployed,
    numberOfMetersImported: MeterToBeDeployed,
    numberOfMetersInstalled: MeterToBeDeployed,
    consortiumDirectors: ConsortiumMember[],
    consortiumNames: ConsortiumMember[],
    declarationName: string,
    companyName: string,
    company: string,
    declaration: CompanyRegistrationDetails
  }
}

export interface ConsortiumMember  {
  consortiumMemberId: number,
  meteringAssetProviderStepTwoId: number,
  meteringAssetProviderId: number,
  name: string,
  address: string
}


export interface MeterToBeDeployed {
  phaseMeterTypeId: number,
  meteringAssetProviderId: number,
  meteringAssetProviderStepTwoId: number,
  year: string,
  singlePhaseMeterType: string,
  threePhaseMeterType: string,
  type: number
}

export interface ApplicantRepresentativeDTO{
  representativeDetailsId: number,
  applicationId: number,
  type: number,
  name: string,
  dateSubmitted: string,
  signature: string,
  signaturePath: string,
  fileName: string,
  tinNumber: string
}

export const INITIAL_APPLICATION_DATA = {
  LicenseApplicationId: null,
  applicant: null,
  business: null,
  contactPerson: null,
  applicantLegalStatus: 0,
  additionalLegalStatus: null,
  shareholders: [],
  directors: [],
  licenseType: 0,
  generationType: 0,
  hasExistingIssuedLicense: false,
  ownTenPercentShareholdingLicense: false,
  isLicenseSuspended: false,
  licenseSuspensionDetails: null,
  existingLicneseIssued: null,
  tenPercentShareholdingLicense: null,
  shareCapitalOfApplicantAuthorized: null,
  shareCapitalOfApplicantFullyPaid: null,
  shareCapitalOfApplicantIndebtedness: null,
  referees: [],
  bankers: [],
  shareCapitalContribution: 0,
  loanCapital: null,
  otherSourcesOfFunding: null,
  businessActivity: null,
  technicalCapacity: null,
  managerialCompetence: null,
  domesticTechnicalSupport: null,
  foreignTechnicalSupport: null,
  projectDescription: null,
  projectSite: null,
  latitudeLocationOfProjectSite: null,
  longitudeLocationOfProjectSite: null,
  siteMap: null,
  technicalAspect: null,
  projectCapacity: null,
  futureCapacity: null,
  implementationSchedule: null,
  landUse: null,
  landAccess: null,
  isOccupiedFederalMinistryOfDefence: false,
  environmentalImpact: null,
  geographicalArea: null,
  authorityConsents: [],
  CurrentStep: 0,
};

export interface Applicant {
  postal: string;
  homePhone: string;
  fax: string;
  website: string;
  id: number;
  name: string;
  address: string;
  email: string;
  alternativeEmail: string;
  mobilePhone: string;
  applicationId?: number;
}

export interface LicenseApplication {
  licenseApplicationId: number | undefined,
  applicantLegalStatus: number,
  additionalLegalStatus: string,
  shareholders: ShareHolder[];
  directors: ShareHolder[];
  licenseType: number;
  generationType: number;
  generationTypeVolume: number;
  fuelType: number;
  otherTechnologyType: string,
  hasExistingIssuedLicense: boolean;
  ownTenPercentShareholdingLicense: boolean;
  isLicenseSuspended: boolean;
  licenseSuspensionDetails: string;
  existingLicneseIssued: LicenseIssued;
  tenPercentShareholdingLicense: LicenseIssued;
  shareCapitalOfApplicantAuthorized: string;
  shareCapitalOfApplicantFullyPaid: string;
  shareCapitalOfApplicantIndebtedness: string;
  referees: Referee[];
  price: number;
  licenseFee: number;
  bankers: Referee[];
  shareCapitalContribution: number;
  loanCapital: string;
  otherSourcesOfFunding: string;
  businessActivity: string;
  technicalCapacity: string;
  managerialCompetence: string;
  domesticTechnicalSupport: string;
  foreignTechnicalSupport: string;
  projectDescription: string;
  projectSite: string;
  latitudeLocationOfProjectSite: string;
  longitudeLocationOfProjectSite: string;
  siteMap: string;
  technicalAspect: string;
  projectCapacity: string;
  futureCapacity: string;
  implementationSchedule: string;
  landUse: string;
  landAccess: string;
  isOccupiedFederalMinistryOfDefence: boolean;
  environmentalImpact: string;
  geographicalArea: string;
  authorityConsents: Consent[];
  licenseApplicationType: number,
  licenseApplicationDeclarationDto: DeclarationDTO,
  isFreshApplication: boolean,
  powerplantDescription: PowerPlant,
  technicalData: TechnicalData
}

export interface PowerPlant {
  powerplantDescriptionId: number,
  plantType: string,
  totalCapacityOfPlant: string,
  locationofPlant: string,
  isPlantNew: true,
  licenseApplicationId: number,
  numberOfYearsOfOperation: number,
}

export interface TechnicalData {
  technicalDataId: number,
  installedCapacity: string,
  fuelType: string,
  otherTechnologyType: string,
  ratedPowerFactory: string,
  reactivePowerCapability: string,
  noiseLevel: string,
  outputVoltage: string,
  unitFrequency: string,
  unitEfficiency: string,
  dateOfInstallation: string,
  serialNumberOfGenerator: string,
  dateOfManufactureOfGenerator: string,
  informationOnEffluent: string,
  licenseApplicationId: number
}

export interface DeclarationDTO {
  licenseApplicationDeclarationId: number,
  knowledgeDate: string,
  swornOnDate: string,
  licenseApplicationId: number,
  licenseApplicationDeclarationDetails: LicenseApplicationDeclarationDetails[]
}

export interface LicenseApplicationDeclarationDetails {
  licenseApplicationDeclarationDetailId: number,
  licenseApplicationDocumentTypeId: number,
  name: string,
  licenseApplicationDeclarationId: number,
  textName: string,
  uploadName: string,
  title: string,
  subText: string
}

export interface ClearanceApplication {
  clearanceGeneratingSetImportationId: number,
  quantityToBeImported: number,
  capacity: number,
  noiseLevel: string,
  pollutionControl: string,
  generatorMaker: string,
  technicalRating: string,
  purposeOfImportation: string,
  countryOfOrigin: string,
  applicantRepresentative: ApplicantRepresentativeDTO,
  generatingSetGenerators: GeneratingSetGenerator[],
  applicationId?: number,
}

export interface GeneratingSetGenerator {
  generatingSetGeneratorId: number,
  clearanceGeneratingSetImportationId: number,
  generatorCapacity: string,
  quantity: number
}

export interface MeteringApplication {
  meteringServiceProviderCertificateId: number,
  meteringType: number,
  installerClass: string,
  installerCategory: string,
  detailsOfInstallation: string,
  qualification: string,
  factoryAddress: string,
  isFreshApplication: boolean,
  certificateNumber: string,
  detailsOfVendorExperience: string,
  warehouseAddress: string,
  repairShopAddress: string,
  purposeOfImportation: string,
  countryOfOrigin: string,
  yearOfManufacture: string,
  metersDetails: MeteringDetails,
  technicalData: MeteringTechnicalData,
  applicantRepresentative: ApplicantRepresentativeDTO,
  applicationId?: number,
}

export interface MeteringDetails {
  meteringSystemMetersDetailsId: number,
  makerOfMeter: string,
  typeOfMeter: string,
  quantityToBeSupplied: number,
  quantityToBeImported: number,
  typeOfMeteringDetails: number,
  annualProductionCapacity: string,
  meteringServiceProviderCertificateId: number
}

export interface MeteringTechnicalData {
  meteringSystemTechnicalDataId: number,
  normalVoltage: string,
  operatingVoltage: string,
  accuracyClass: string,
  currentRating: string,
  frequency: string,
  operatingTemperature: string,
  storageTemperature: string,
  lifeSpanOfMeter: string,
  type: number,
  meteringServiceProviderCertificateId: number
}

export interface PaymentDetails {
  hasPaid: boolean;
  paymentStatus: string;
  paymentTransactionId :string
}

export interface Business {
  postal: string;
  homePhone: string;
  fax: string;
  website: string;
  id: number;
  name: string;
  address: string;
  email: string;
  alternativeEmail: string;
  mobilePhone: string;
  licenseApplicationId: number;
  dateOfSubmission: string,
  signaturePath: string,
  fileName: string,
  signature: string
}

export interface ContactPerson {
  postal: string;
  homePhone: string;
  fax: string;
  website: string;
  id: number;
  name: string;
  address: string;
  email: string;
  alternativeEmail: string;
  mobilePhone: string;
  licenseApplicationId: number;
}

export interface CompanyRegistrationDetails {
  representativeDetailsId: number,
  applicationId: number,
  type: number,
  name: string,
  dateSubmitted: string,
  signature: string,
  signaturePath: string,
  fileName: string,
  tinNumber: string
}

export interface ShareHolder {
  companyExecutiveSectionId: number;
  name: string;
  emailAddress: string;
  nationality: string;
  countryOfResidence: string;
  physicalAddress: string;
  detailsOfConviction: string;
  licenseApplicationId: number;
}

export interface Declaration {
  licenseApplicationId: number,
  licenseApplicationDeclarationId: number,
  knowledgeDate: string,
  swornOnDate: string,
  licenseApplicationDeclarationDetails: licenseApplicationDeclarationDetails[]
}

export interface licenseApplicationDeclarationDetails {
  LicenseApplicationDeclarationDetailId: number,
  LicenseApplicationDocumentTypeId: number,
  Name: string,
  LicenseApplicationDeclarationId: number,
  textName: string,
  uploadName: string,
  title: string
}

export interface LicenseIssued {
  existingLicenseDetailsId: number;
  natureOfLicense: string;
  dateIssued: string;
  licenseNumber: string;
  nameOfEntity: string;
  type: number;
  licenseApplicationId: number;
}

export interface Referee {
  id: number;
  name: string;
  address: string;
  email: string;
  mobilePhone: string;
  licenseApplicationId: number;
}

export interface Consent {
  licenseAuthorityConsentId: number;
  name: string;
  activity: string;
  legalProvision: string;
  status: number;
  licenseApplicationId: number;
}

export const INITIAL_ATTACHMENT_FORM_DATA = {
  id: null,
  licenseApplicationId: null,
  file: null,
  type: null,
};

export interface AttachmentRes {
  attachments: Attachment[];
  hasPaidForApplication: boolean;
}
export interface Attachment {
  documentName:string;
  documentPath: string;
  applicationDocumentId: number;
  applicationDocumentTypeId: number;
  applicationId: number;
  year: string;
  isDeleting?: boolean

}

export interface DocumentType {
  createdDate: string;
  documentCount: number;
  documentTypeId: number;
  isActive: boolean;
  canAcceptMultiple: boolean;
  licenseApplicationDocumentTypeDepartments: Department[];
  name:string;
  isDeclarationDocument: boolean;
  applicationNameTypeResponse: LicenseApplicationNameType
}

export interface LicenseApplicationNameType {
  licenseApplicationNameTypeId: number,
  textName: string,
  uploadName: string
}

export interface Department  {
  departmentId: number,
  departmentName: string
}

//ENUMS

export enum LCType {
  IRREVOCABLE = 1,
  CONFIRMED = 2,
  UNCONFIRMED = 3,
  CONFIRMATION_LINE = 4,
  RED_CLAUSE = 5,
  TRANSFERRABLE = 6,
}
export class AttachmentRequestDTO {
  constructor(
    public applicationId: any,
    public applicationDocumentTypeId: any,
    public file: File,
    public year?: string | undefined |null,
    public departmentId?: any,
  ) {}
}


export enum AttachmentEnum {
  CertificateOfRegistration = 1,
  CertificateOfIncorporation = 2,
  CoverLetter = 3,
  ArticleOfAssociation = 4,
  DeedOfPartnership = 5,
  DetailedFeasibilityStudy = 6,
  SiteMap = 7,
  DocumentContainingConsent = 8,
  EnvironmentalImpact = 9,
  PowerPurchaseAgreements = 10,
  BusinessPlan = 11,
  FinancialStatement1 = 12,
  FinancialStatement2 = 13,
  FinancialStatement3 = 14,
}

export enum ApplicantlegalStatusEnum {
  Other = 6,
  SoleProprietorship = 1,
  Partnership = 2,
  PublicLimitedLiabilityCompany = 3,
  PrivateLimitedLiabilityCompany = 4,
  CooperativeSociety = 5,
}

export const ApplicantlegalStatuses = [
  {
    name: 'Sole proprietorship',
    id: ApplicantlegalStatusEnum.SoleProprietorship,
  },
  {
    name: 'Partnership',
    id: ApplicantlegalStatusEnum.Partnership,
  },
  {
    name: 'Public Limited Liability Company',
    id: ApplicantlegalStatusEnum.PublicLimitedLiabilityCompany,
  },
  {
    name: 'Private Limited Liability Company',
    id: ApplicantlegalStatusEnum.PrivateLimitedLiabilityCompany,
  },
  {
    name: 'Cooperative Society',
    id: ApplicantlegalStatusEnum.CooperativeSociety,
  },
  {
    name: 'Other',
    id: ApplicantlegalStatusEnum.Other,
  },
];
export interface RRRResponse {
  status: string;
  statusMessage: string;
  uniqueReference: string;
  rrr: string;
  statusCode: string;
}
export interface PaymentDTO {
    id: string,
    refId: string,
    firstName: string,
    lastName: string,
    naration: string,
    updatedAt: string,
    paymentStatus: string,
    paymentReference: string,
    paymentTransactionId: number,
    paymentType: number,
    amount: number,
}

export const INIT_PAYMENT = {
  id: '--',
  refId: '--',
  firstName: '--',
  lastName: '--',
  naration: '--',
  updatedAt: '',
  paymentStatus: '--',
  paymentReference: '--',
  paymentTransactionId: 0,
  paymentType: 0,
  amount: 0,
};

export enum PaymentType {
    Remita = 0,
    Generation = 1,
    Distribution = 2,
    Transmission = 3,
    SystemOperation = 4,
    Trading = 5
}
export const AttachmentTypes: { id: number; type: string }[] = [
  {
    id: 1,
    type: 'CertificateOfRegistration',
  },
  {
    id: 2,
    type: 'CertificateOfIncorporation',
  },
  {
    id: 3,
    type: 'CoverLetter',
  },
  {
    id: 4,
    type: 'ArticleOfAssociation',
  },
  {
    id: 5,
    type: 'DeedOfPartnership',
  },
  {
    id: 6,
    type: 'DetailedFeasibilityStudy',
  },
  {
    id: 7,
    type: 'SiteMap',
  },
  {
    id: 8,
    type: 'DocumentContainingConsent',
  },
  {
    id: 9,
    type: 'EnvironmentalImpact',
  },
  {
    id: 10,
    type: 'PowerPurchaseAgreements',
  },
  {
    id: 11,
    type: 'BusinessPlan',
  },
  {
    id: 12,
    type: 'FinancialStatement1',
  },
  {
    id: 13,
    type: 'FinancialStatement2',
  },
  {
    id: 14,
    type: 'FinancialStatement3',
  },
];

export const LicenceTypes: { id: number; type: string }[] = [
  {
    id: 1,
    type: 'Generation',
  },
  {
    id: 2,
    type: 'Distribution',
  },
  {
    id: 3,
    type: 'Transmission',
  },
  {
    id: 4,
    type: 'System Operation',
  },
  {
    id: 5,
    type: 'Trading',
  },
];

export const ApplicationTypes: { id: number; type: string }[] = [
  {
    id: 1,
    type: 'Licence Application',
  },
  {
    id: 2,
    type: 'Permit for Generating Set Importation',
  },
  {
    id: 3,
    type: 'Captive Power Generation Permit',
  },
  {
    id: 4,
    type: 'Meter Service Provider Permit',
  },
  {
    id: 5,
    type: 'Meter Assets Provider Permit',
  },
];


export enum LicenceTypesEnum {
  NotSet = 0,
  Generation = 1,
  Distribution = 2,
  Transmission = 3,
  SystemOperation = 4,
  Trading = 5,
}

export enum LicenceTypesStringEnum {
  NotSet = 'Not Set',
  Generation = 'Generation',
  Distribution = 'Distribution',
  Transmission = 'Transmission',
  SystemOperation = 'System Operation4',
  Trading = 'Trading',
}


export const GenerationTypes: { id: number; type: string }[] = [
  {
    id: 1,
    type: 'Grid-Connected',
  },
  {
    id: 2,
    type: 'Off-Grid',
  },
  {
    id: 3,
    type: 'Embedded',
  },
];

export const CapacityOff: { id: number; type: string }[] = [
  {
    id: 1,
    type: '1 - 10',
  },
  {
    id: 2,
    type: '11 - 25',
  },
  {
    id: 3,
    type: '26 - 40',
  },
  {
    id: 4,
    type: '41 - 60',
  },
  {
    id: 5,
    type: '61 - 85',
  },
  {
    id: 6,
    type: '86 - 100',
  },
  {
    id: 7,
    type: '101 - 100',
  },
  {
    id: 8,
    type: '401 - 500',
  },
  {
    id: 9,
    type: 'Above 500',
  },
];

export const Capacity: { id: number; type: string }[] = [
  {
    id: 1,
    type: '1 - 10MW',
  },
  {
    id: 2,
    type: '11 - 50MW',
  },
  {
    id: 3,
    type: '51 - 100MW',
  },
  {
    id: 4,
    type: '101 - 200MW',
  },
  {
    id: 5,
    type: '201 - 300MW',
  },
  {
    id: 6,
    type: '301 - 400MW',
  },
  {
    id: 7,
    type: '401 - 500MW',
  },
  {
    id: 8,
    type: 'Above 500MW',
  },
];

export const fuelType: { id: number; type: string }[] = [
  {
    id: 1,
    type: 'Coal',
  },
  {
    id: 2,
    type: 'Hydro',
  },
  {
    id: 3,
    type: 'Gas',
  },
  {
    id: 4,
    type: 'Solar',
  },
  {
    id: 5,
    type: 'Wind',
  },
  {
    id: 6,
    type: 'Oil',
  },
  {
    id: 7,
    type: 'Others',
  },
];

export const ConsentStatuses: { id: number; type: string }[] = [
  {
    id: 1,
    type: 'Approved',
  },
  {
    id: 2,
    type: 'Pending',
  },
];

export const Contributions: { id: number; type: string }[] = [
  {
    id: 1,
    type: 'Foreign',
  },
  {
    id: 2,
    type: 'Local',
  },
];

export const MeteringTypes: { id: number; type: string }[] = [
  {
    id: 1,
    type: 'Importer of Metering System',
  },
  {
    id: 2,
    type: 'Installer of Metering System',
  },
  {
    id: 3,
    type: 'Vendor of Metering System',
  },
  {
    id: 4,
    type: 'Manufacturer of Metering System',
  },
];

export enum MeteringType {
  Importer = 1,
  Installer = 2,
  Vendor = 3,
  Manufacturer = 4
}


export interface commentAction {
  positionName: string,
  name: string,
  applicationSubmitted: {
    status: boolean,
    isCurrentStep: boolean,
    view: string,
    type: number,
    createdAt: string,
    createdByDetails: any
  },
  empFlaggedApplication: {
    status: boolean,
    isCurrentStep: boolean,
    view: string,
    type: number,
    createdAt: string,
    createdByDetails: any
  },
  llcFlaggedApplication: {
    status: boolean,
    isCurrentStep: boolean,
    view: string,
    type: number,
    createdAt: string,
    createdByDetails: any
  },
  llcStepTwoFlaggedApplication: {
    status: boolean,
    isCurrentStep: boolean,
    view: string,
    type: number,
    createdAt: string,
    createdByDetails: any
  },
  mcrFlaggedApplication: {
    status: boolean,
    isCurrentStep: boolean,
    view: string,
    type: number,
    createdAt: string,
    createdByDetails: any
  },
  mcrStepTwoFlaggedApplication: {
    status: boolean,
    isCurrentStep: boolean,
    view: string,
    type: number,
    createdAt: string,
    createdByDetails: any
  },
  publicationApproved: {
    status: boolean,
    isCurrentStep: boolean,
    view: string,
    type: number,
    licenseApplicationRouteId: number,
    createdAt: string,
    createdByDetails: any,
    isActionCompleted: boolean
  },
  requestedApproved: {
    status: boolean,
    isCurrentStep: boolean,
    view: string,
    type: number,
    createdAt: string,
    createdByDetails: any,
    isActionCompleted: boolean
  },
  licenseCertificate: {
    status: boolean,
    isCurrentStep: boolean,
    view: string,
    type: number,
    createdAt: string,
    createdByDetails: any
  },
  licenseDenied: {
    status: boolean,
    isCurrentStep: boolean,
    view: string,
    type: number,
    createdAt: string,
    createdByDetails: any
  },
}

export const MeteringInstallerTypes: { id: number; type: string }[] = [
  {
    id: 1,
    type: 'Category C2',
  },
  {
    id: 2,
    type: 'Category C1',
  },
  {
    id: 3,
    type: 'Category B2',
  },
  {
    id: 4,
    type: 'Category B1',
  },
  {
    id: 5,
    type: 'Category A2',
  },
  {
    id: 6,
    type: 'Category A1',
  },
];

export enum MeteringServiceInstallerType {
  CategoryC2 = 1,
  CategoryC1 = 2,
  CategoryB2 = 3,
  CategoryB1 = 4,
  CategoryA2 = 5,
  CategoryA1 = 6,
}

export const GeneratorCaptiveCapacities: { id: number; type: string }[] = [
  {
    id: 1,
    type: 'Above 1 - 10',
  },
  {
    id: 2,
    type: '11 - 20',
  },
  {
    id: 3,
    type: '21 - 30',
  },
  {
    id: 4,
    type: '31 - 40',
  },
  {
    id: 5,
    type: '41 - 50',
  },
  {
    id: 6,
    type: '51 - 100',
  },
  {
    id: 6,
    type: 'Above 100',
  },
];

export enum GeneratorCaptiveCapacity
{
    MW1To10 = 1,
    MW11To20 = 2,
    MW21To30 = 3,
    MW31To40 = 4,
    MW41To50 = 5,
    MW51To100 = 6,
    MWAbove100 = 7
}

export const SizeOfClearanceGenerators: { id: number; type: string }[] = [
  {
    id: 1,
    type: '0.45 - 2,5',
  },
  {
    id: 2,
    type: 'Above 2.5 - 5',
  },
  {
    id: 3,
    type: 'Above 5 - 25',
  },
  {
    id: 4,
    type: 'Above 25 - 100',
  },
  {
    id: 5,
    type: 'Above 100',
  },
];


export enum SizeOfClearanceGenerator {
  UpTo2 = 1,
  UpTo5 = 2,
  UpTo25 = 3,
  UpTo100 = 4,
  GreaterThan100 = 5
}


export enum TechnologyType {
  Coal = 1,
  Hydro = 2,
  Gas = 3,
  Solar = 4,
  Wind = 5,
  Oil = 6,
  Other = 7,
}
