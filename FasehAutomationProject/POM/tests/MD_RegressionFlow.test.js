import {test, expect} from '@playwright/test';
import testUrls from '../test-data/testUrls';
import testUsers from "../test-data/testUsers"
import fasehLandingPage from "../pages/fasehLandingPage"
import ghadLoginPage from "../pages/ghadLoginPage"
import landingPageMD from "../pages/landingPageMD"
import fasehRequestsPageMD from "../pages/fasehRequestsPageMD"
import requestFasehMDFirstStep from "../pages/requestFasehMDFirstStep"
import requestFasehMDSecondStep from "../pages/requestFasehMDSecondStep"
import requestFasehSummaryPage from "../pages/requestFasehSummaryPage"
import docRegisteredMdProductPage from "../pages/docRegisteredMdProductPage"
import adminLoginPage from "../pages/adminLoginPage"
import adminHomePage from "../pages/adminHomePage"
import adminRequestListPage from "../pages/adminRequestListPage"
import centralClearanceEmpTakeDecisionPage from "../pages/centralClearanceEmpTakeDecisionPage"
import processingAdminRequestsByImporterPage from "../pages/processingAdminRequestsByImporterPage"
import inspectorTakeDecisionPage from "../pages/inspectorTakeDecisionPage"
import perviewTemplateMdPage from "../pages/perviewTemplateMdPage"



//const
const shippmentPolicyNumber = Math.floor(Math.random() * 100000) + 1;

let fasehLanding_Page, ghadLogin_Page, landingPage_MD, fasehRequestsPage_MD, requestFaseh_MDFirstStep, requestFaseh_MDSecondStep, requestFaseh_SummaryPage, doc_RegisteredMdProductPage, adminLogin_Page, adminHome_Page, adminRequestList_Page, centralClearanceEmpTakeDecision_Page, processingAdminRequestsByImporter_Page, inspectorTakeDecision_Page, perviewTemplateMd_Page;

test.beforeEach(async ({page}) => {
  fasehLanding_Page = new fasehLandingPage(page);
  ghadLogin_Page = new ghadLoginPage(page);
  landingPage_MD = new landingPageMD(page);
  fasehRequestsPage_MD = new fasehRequestsPageMD(page);
  requestFaseh_MDFirstStep = new requestFasehMDFirstStep(page);
  requestFaseh_MDSecondStep = new requestFasehMDSecondStep(page);
  requestFaseh_SummaryPage = new requestFasehSummaryPage(page);
  doc_RegisteredMdProductPage = new docRegisteredMdProductPage(page);
  adminLogin_Page = new adminLoginPage(page);
  adminHome_Page = new adminHomePage(page);
  adminRequestList_Page = new adminRequestListPage(page);
  centralClearanceEmpTakeDecision_Page = new centralClearanceEmpTakeDecisionPage(page);
  processingAdminRequestsByImporter_Page = new processingAdminRequestsByImporterPage(page);
  inspectorTakeDecision_Page = new inspectorTakeDecisionPage(page);
  perviewTemplateMd_Page = new perviewTemplateMdPage(page);

  })
    

test("MdCreateNewRequestAndAddFourProducts", async () => {
  await fasehLanding_Page.navigateToPublicUrl();
  await fasehLanding_Page.clickOnLoginIconMD();
  await ghadLogin_Page.loginWithGhad(testUsers.emailGhad,testUsers.passwordGhad);
  await landingPage_MD.openFasehRequestsPage();
  await fasehRequestsPage_MD.clickOnNewRequestButton();
  await fasehRequestsPage_MD.selectGhadAccount();
  await requestFaseh_MDFirstStep.verifyRequestFirstStepPageOpened();
  await requestFaseh_MDFirstStep.importerFillInformationFirstStep(shippmentPolicyNumber);
  await requestFaseh_MDSecondStep.verifyRequestSecondStepPageOpened();
  await requestFaseh_MDSecondStep.importerAddExceptionalProduct();
  await requestFaseh_MDSecondStep.importerViewExceptionalProductDetails();
  await requestFaseh_MDSecondStep.importerAddRegisteredProduct();
  await requestFaseh_MDSecondStep.importerViewRegisteredProductDetails();
  await requestFaseh_MDSecondStep.importerAddLicenseProduct();
  await requestFaseh_MDSecondStep.importerViewLicenseProductDetails();
  await requestFaseh_MDSecondStep.importerAddImportPermitProduct();
  await requestFaseh_MDSecondStep.importerViewImportPermitProductDetails();
  await requestFaseh_MDSecondStep.importerNavigateToDocPage();
  await doc_RegisteredMdProductPage.importerAttachDocFileRequiredForRegisteredProduct();
  await doc_RegisteredMdProductPage.importerNavigateToRequestSummaryPage();
  await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
  await requestFaseh_SummaryPage.importerSubmitRequest();
  await fasehRequestsPage_MD.validateFasehRequestsPageOpened();
  await fasehLanding_Page.importerLogout();

})

// test("MdTakeFasehDecisionOnProduct", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconMD();
//   await ghadLogin_Page.loginWithGhad(testUsers.emailGhad,testUsers.passwordGhad);
//   await landingPage_MD.openFasehRequestsPage();
//   await fasehRequestsPage_MD.clickOnNewRequestButton();
//   await fasehRequestsPage_MD.selectGhadAccount();
//   await requestFaseh_MDFirstStep.verifyRequestFirstStepPageOpened();
//   await requestFaseh_MDFirstStep.importerFillInformationFirstStep(shippmentPolicyNumber);
//   await requestFaseh_MDSecondStep.verifyRequestSecondStepPageOpened();
//   await requestFaseh_MDSecondStep.importerAddRegisteredProduct();
//   await requestFaseh_MDSecondStep.importerViewRegisteredProductDetails();
//   await requestFaseh_MDSecondStep.importerNavigateToDocPage();
//   await doc_RegisteredMdProductPage.importerAttachDocFileRequiredForRegisteredProduct();
//   await doc_RegisteredMdProductPage.importerNavigateToRequestSummaryPage();
//   await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
//   await requestFaseh_SummaryPage.importerSubmitRequest();
//   await fasehRequestsPage_MD.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForMdRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await centralClearanceEmpTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnRegisteredProductMD();
//   await centralClearanceEmpTakeDecision_Page.takeFasehDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
// })

// test("MdTakeRejectDecisionOnProduct", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconMD();
//   await ghadLogin_Page.loginWithGhad(testUsers.emailGhad,testUsers.passwordGhad);
//   await landingPage_MD.openFasehRequestsPage();
//   await fasehRequestsPage_MD.clickOnNewRequestButton();
//   await fasehRequestsPage_MD.selectGhadAccount();
//   await requestFaseh_MDFirstStep.verifyRequestFirstStepPageOpened();
//   await requestFaseh_MDFirstStep.importerFillInformationFirstStep(shippmentPolicyNumber);
//   await requestFaseh_MDSecondStep.verifyRequestSecondStepPageOpened();
//   await requestFaseh_MDSecondStep.importerAddRegisteredProduct();
//   await requestFaseh_MDSecondStep.importerViewRegisteredProductDetails();
//   await requestFaseh_MDSecondStep.importerNavigateToDocPage();
//   await doc_RegisteredMdProductPage.importerAttachDocFileRequiredForRegisteredProduct();
//   await doc_RegisteredMdProductPage.importerNavigateToRequestSummaryPage();
//   await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
//   await requestFaseh_SummaryPage.importerSubmitRequest();
//   await fasehRequestsPage_MD.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForMdRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await centralClearanceEmpTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnRegisteredProductMD();
//   await centralClearanceEmpTakeDecision_Page.takeRejectDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
// })

// test("MdTakePartialReleaseDecisionOnProduct", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconMD();
//   await ghadLogin_Page.loginWithGhad(testUsers.emailGhad,testUsers.passwordGhad);
//   await landingPage_MD.openFasehRequestsPage();
//   await fasehRequestsPage_MD.clickOnNewRequestButton();
//   await fasehRequestsPage_MD.selectGhadAccount();
//   await requestFaseh_MDFirstStep.verifyRequestFirstStepPageOpened();
//   await requestFaseh_MDFirstStep.importerFillInformationFirstStep(shippmentPolicyNumber);
//   await requestFaseh_MDSecondStep.verifyRequestSecondStepPageOpened();
//   await requestFaseh_MDSecondStep.importerAddRegisteredProduct();
//   await requestFaseh_MDSecondStep.importerViewRegisteredProductDetails();
//   await requestFaseh_MDSecondStep.importerNavigateToDocPage();
//   await doc_RegisteredMdProductPage.importerAttachDocFileRequiredForRegisteredProduct();
//   await doc_RegisteredMdProductPage.importerNavigateToRequestSummaryPage();
//   await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
//   await requestFaseh_SummaryPage.importerSubmitRequest();
//   await fasehRequestsPage_MD.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForMdRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await centralClearanceEmpTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnRegisteredProductMD();
//   await centralClearanceEmpTakeDecision_Page.takeNeedPartialReleaseDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await centralClearanceEmpTakeDecision_Page.requestPledgeFromImporter();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconMD();
//   await ghadLogin_Page.loginWithGhad(testUsers.emailGhad,testUsers.passwordGhad);
//   await landingPage_MD.openFasehRequestsPage();
//   await fasehRequestsPage_MD.searchByRequestNumber();
//   await fasehRequestsPage_MD.selectModifyRequestOption();
//   await processingAdminRequestsByImporter_Page.importerConfirmPledgeRequestedByAdmin();
//   await fasehRequestsPage_MD.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
// })

// test("Md_SendRequestWithTwoProductsForPullSampleAndPerviewToWarehouse", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconMD();
//   await ghadLogin_Page.loginWithGhad(testUsers.emailGhad,testUsers.passwordGhad);
//   await landingPage_MD.openFasehRequestsPage();
//   await fasehRequestsPage_MD.clickOnNewRequestButton();
//   await fasehRequestsPage_MD.selectGhadAccount();
//   await requestFaseh_MDFirstStep.verifyRequestFirstStepPageOpened();
//   await requestFaseh_MDFirstStep.importerFillInformationFirstStep(shippmentPolicyNumber);
//   await requestFaseh_MDSecondStep.verifyRequestSecondStepPageOpened();
//   await requestFaseh_MDSecondStep.importerAddExceptionalProduct();
//   await requestFaseh_MDSecondStep.importerAddImportPermitProduct();
//   await doc_RegisteredMdProductPage.importerNavigateToRequestSummaryPage();
//   await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
//   await requestFaseh_SummaryPage.importerSubmitRequest();
//   await fasehRequestsPage_MD.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForMdRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await centralClearanceEmpTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnExceptionalProductMD();
//   await centralClearanceEmpTakeDecision_Page.takePerviewDecision();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnImportPermitProductMD();
//   await centralClearanceEmpTakeDecision_Page.takePullSampleDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await centralClearanceEmpTakeDecision_Page.selectPerviewTypeWarehouse();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconMD();
//   await ghadLogin_Page.loginWithGhad(testUsers.emailGhad,testUsers.passwordGhad);
//   await landingPage_MD.openFasehRequestsPage();
//   await fasehRequestsPage_MD.searchByRequestNumber();
//   await fasehRequestsPage_MD.selectModifyRequestOption();
//   await processingAdminRequestsByImporter_Page.importerSelectWarehouseLocation();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.warehouseInspectorEmail,testUsers.warehouseInspectorPassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForMdRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await inspectorTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await inspectorTakeDecision_Page.takeDecisionOnExceptionalProductMD();
//   await perviewTemplateMd_Page.fillPerviewTemplate();
//   await inspectorTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await inspectorTakeDecision_Page.takeDecisionOnImportPermitProductMD();
//   await inspectorTakeDecision_Page.fillPullSampleDetails();
//   await inspectorTakeDecision_Page.sendDecision();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForMdRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminTakeDecisionOnRequestAfterReturningFromWarehouseOrPort();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnExceptionalProductMD();
//   await centralClearanceEmpTakeDecision_Page.takeFasehDecision();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnImportPermitProductMD();
//   await centralClearanceEmpTakeDecision_Page.takeFasehDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await centralClearanceEmpTakeDecision_Page.requestPledgeFromImporter();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconMD();
//   await ghadLogin_Page.loginWithGhad(testUsers.emailGhad,testUsers.passwordGhad);
//   await landingPage_MD.openFasehRequestsPage();
//   await fasehRequestsPage_MD.searchByRequestNumber();
//   await fasehRequestsPage_MD.selectModifyRequestOption();
//   await processingAdminRequestsByImporter_Page.importerConfirmPledgeRequestedByAdmin();
//   await fasehRequestsPage_MD.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
// })

// test("Md_SendRequestWithTwoProductsForPullSampleAndPerviewToPort", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconMD();
//   await ghadLogin_Page.loginWithGhad(testUsers.emailGhad,testUsers.passwordGhad);
//   await landingPage_MD.openFasehRequestsPage();
//   await fasehRequestsPage_MD.clickOnNewRequestButton();
//   await fasehRequestsPage_MD.selectGhadAccount();
//   await requestFaseh_MDFirstStep.verifyRequestFirstStepPageOpened();
//   await requestFaseh_MDFirstStep.importerFillInformationFirstStep(shippmentPolicyNumber);
//   await requestFaseh_MDSecondStep.verifyRequestSecondStepPageOpened();
//   await requestFaseh_MDSecondStep.importerAddExceptionalProduct();
//   await requestFaseh_MDSecondStep.importerAddImportPermitProduct();
//   await doc_RegisteredMdProductPage.importerNavigateToRequestSummaryPage();
//   await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
//   await requestFaseh_SummaryPage.importerSubmitRequest();
//   await fasehRequestsPage_MD.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForMdRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await centralClearanceEmpTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnExceptionalProductMD();
//   await centralClearanceEmpTakeDecision_Page.takePerviewDecision();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnImportPermitProductMD();
//   await centralClearanceEmpTakeDecision_Page.takePullSampleDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await centralClearanceEmpTakeDecision_Page.selectPerviewTypePort();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.portInspectorEmail,testUsers.portInspectorPassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForMdRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await inspectorTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await inspectorTakeDecision_Page.takeDecisionOnExceptionalProductMD();
//   await perviewTemplateMd_Page.fillPerviewTemplate();
//   await inspectorTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await inspectorTakeDecision_Page.takeDecisionOnImportPermitProductMD();
//   await inspectorTakeDecision_Page.fillPullSampleDetails();
//   await inspectorTakeDecision_Page.sendDecision();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForMdRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminTakeDecisionOnRequestAfterReturningFromWarehouseOrPort();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnExceptionalProductMD();
//   await centralClearanceEmpTakeDecision_Page.takeFasehDecision();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnImportPermitProductMD();
//   await centralClearanceEmpTakeDecision_Page.takeFasehDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await centralClearanceEmpTakeDecision_Page.requestPledgeFromImporter();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconMD();
//   await ghadLogin_Page.loginWithGhad(testUsers.emailGhad,testUsers.passwordGhad);
//   await landingPage_MD.openFasehRequestsPage();
//   await fasehRequestsPage_MD.searchByRequestNumber();
//   await fasehRequestsPage_MD.selectModifyRequestOption();
//   await processingAdminRequestsByImporter_Page.importerConfirmPledgeRequestedByAdmin();
//   await fasehRequestsPage_MD.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
// })
