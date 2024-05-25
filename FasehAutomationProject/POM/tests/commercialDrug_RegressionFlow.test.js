import {test, expect} from '@playwright/test';
import testUrls from '../test-data/testUrls';
import testUsers from "../test-data/testUsers"
import fasehLandingPage from "../pages/fasehLandingPage"
import denrLoginPage from "../pages/denrLoginPage"
import landingPageDrug from "../pages/landingPageDrug"
import fasehRequestsPageDrug from "../pages/FasehRequestsPageDrug"
import requestFasehDrugFirstStep from "../pages/requestFasehDrugFirstStep"
import requestFasehCommercialDrugSecondStep from "../pages/requestFasehCommercialDrugSecondStep"
import requestFasehSummaryPage from "../pages/requestFasehSummaryPage"
import adminLoginPage from "../pages/adminLoginPage"
import adminHomePage from "../pages/adminHomePage"
import adminRequestListPage from "../pages/adminRequestListPage"
import centralClearanceEmpTakeDecisionPage from "../pages/centralClearanceEmpTakeDecisionPage"
import processingAdminRequestsByImporterPage from "../pages/processingAdminRequestsByImporterPage"
import inspectorTakeDecisionPage from "../pages/inspectorTakeDecisionPage"
import perviewTemplateDrugPage from "../pages/perviewTemplateDrugPage"



//const
const shippmentPolicyNumber = Math.floor(Math.random() * 100000) + 1;

let fasehLanding_Page, denrLogin_Page, landingPage_Drug, fasehRequestsPage_Drug, requestFaseh_DrugFirstStep, requestFasehCommercialDrug_SecondStep, requestFaseh_SummaryPage, adminLogin_Page, adminHome_Page, adminRequestList_Page, centralClearanceEmpTakeDecision_Page, processingAdminRequestsByImporter_Page, inspectorTakeDecision_Page, perviewTemplateDrug_Page;

test.beforeEach(async ({page}) => {
  fasehLanding_Page = new fasehLandingPage(page);
  denrLogin_Page = new denrLoginPage(page);
  landingPage_Drug = new landingPageDrug(page);
  fasehRequestsPage_Drug = new fasehRequestsPageDrug(page);
  requestFaseh_DrugFirstStep = new requestFasehDrugFirstStep(page);
  requestFasehCommercialDrug_SecondStep = new requestFasehCommercialDrugSecondStep(page);
  requestFaseh_SummaryPage = new requestFasehSummaryPage(page);
  adminLogin_Page = new adminLoginPage(page);
  adminHome_Page = new adminHomePage(page);
  adminRequestList_Page = new adminRequestListPage(page);
  centralClearanceEmpTakeDecision_Page = new centralClearanceEmpTakeDecisionPage(page);
  processingAdminRequestsByImporter_Page = new processingAdminRequestsByImporterPage(page);
  inspectorTakeDecision_Page = new inspectorTakeDecisionPage(page);
  perviewTemplateDrug_Page = new perviewTemplateDrugPage(page);

  })

// test("Commercial Drug Importer Create New Request And Add three Product", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openDrugFasehRequestsPage();
//   await fasehRequestsPage_Drug.clickOnNewRequestButton();
//   await requestFaseh_DrugFirstStep.verifyRequestFirstStepPageOpened();
//   await requestFaseh_DrugFirstStep.commercialDrugImporterFillInformationFirstStep(shippmentPolicyNumber);
//   await requestFasehCommercialDrug_SecondStep.verifyRequestSecondStepPageOpened();
//   await requestFasehCommercialDrug_SecondStep.importerAddAllKindsOfExceptionalProducts();
//   await requestFasehCommercialDrug_SecondStep.importerViewProductDetailsForAllExceptionalProducts();
//   await requestFasehCommercialDrug_SecondStep.importerAddAllKindsOfRegisteredProducts();
//   await requestFasehCommercialDrug_SecondStep.importerViewProductDetailsForAllRegisteredProducts();
//   await requestFasehCommercialDrug_SecondStep.importerAddImportPermitProduct();
//   await requestFasehCommercialDrug_SecondStep.importerViewImportPermitProductDetails();
//   await requestFasehCommercialDrug_SecondStep.importerNavigateToRequestSummaryPage();
//   await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
//   await requestFaseh_SummaryPage.importerSubmitRequest();
//   await fasehRequestsPage_Drug.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();

// })

// test("Commercial Drug Request Take Faseh Decision On Product", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openDrugFasehRequestsPage();
//   await fasehRequestsPage_Drug.clickOnNewRequestButton();
//   await requestFaseh_DrugFirstStep.verifyRequestFirstStepPageOpened();
//   await requestFaseh_DrugFirstStep.commercialDrugImporterFillInformationFirstStep(shippmentPolicyNumber);
//   await requestFasehCommercialDrug_SecondStep.verifyRequestSecondStepPageOpened();
//   await requestFasehCommercialDrug_SecondStep.importerAddExceptionalEducationalProduct();
//   await requestFasehCommercialDrug_SecondStep.importerNavigateToRequestSummaryPage();
//   await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
//   await requestFaseh_SummaryPage.importerSubmitRequest();
//   await fasehRequestsPage_Drug.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForDrugRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await centralClearanceEmpTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await centralClearanceEmpTakeDecision_Page.takeFasehDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await centralClearanceEmpTakeDecision_Page.requestPledgeFromImporter();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openDrugFasehRequestsPage();
//   await fasehRequestsPage_Drug.searchByRequestNumber();
//   await fasehRequestsPage_Drug.selectModifyRequestOption();
//   await processingAdminRequestsByImporter_Page.importerConfirmPledgeRequestedByAdmin();
//   await fasehRequestsPage_Drug.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
// })

// test("Commercial Drug Request Take Reject Decision On Product", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openDrugFasehRequestsPage();
//   await fasehRequestsPage_Drug.clickOnNewRequestButton();
//   await requestFaseh_DrugFirstStep.verifyRequestFirstStepPageOpened();
//   await requestFaseh_DrugFirstStep.commercialDrugImporterFillInformationFirstStep(shippmentPolicyNumber);
//   await requestFasehCommercialDrug_SecondStep.verifyRequestSecondStepPageOpened();
//   await requestFasehCommercialDrug_SecondStep.importerAddExceptionalEducationalProduct();
//   await requestFasehCommercialDrug_SecondStep.importerNavigateToRequestSummaryPage();
//   await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
//   await requestFaseh_SummaryPage.importerSubmitRequest();
//   await fasehRequestsPage_Drug.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForDrugRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await centralClearanceEmpTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await centralClearanceEmpTakeDecision_Page.takeRejectDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
// })

// test("Commercial Drug Request Take Partial Release Decision On Product", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openDrugFasehRequestsPage();
//   await fasehRequestsPage_Drug.clickOnNewRequestButton();
//   await requestFaseh_DrugFirstStep.verifyRequestFirstStepPageOpened();
//   await requestFaseh_DrugFirstStep.commercialDrugImporterFillInformationFirstStep(shippmentPolicyNumber);
//   await requestFasehCommercialDrug_SecondStep.verifyRequestSecondStepPageOpened();
//   await requestFasehCommercialDrug_SecondStep.importerAddExceptionalEducationalProduct();
//   await requestFasehCommercialDrug_SecondStep.importerNavigateToRequestSummaryPage();
//   await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
//   await requestFaseh_SummaryPage.importerSubmitRequest();
//   await fasehRequestsPage_Drug.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForDrugRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await centralClearanceEmpTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await centralClearanceEmpTakeDecision_Page.takeNeedPartialReleaseDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await centralClearanceEmpTakeDecision_Page.requestPledgeFromImporter();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openDrugFasehRequestsPage();
//   await fasehRequestsPage_Drug.searchByRequestNumber();
//   await fasehRequestsPage_Drug.selectModifyRequestOption();
//   await processingAdminRequestsByImporter_Page.importerConfirmPledgeRequestedByAdmin();
//   await fasehRequestsPage_Drug.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
// })

// test("Commercial Drug Request Take Perview and Pull Sample Decision On Products in Warehouse", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openDrugFasehRequestsPage();
//   await fasehRequestsPage_Drug.clickOnNewRequestButton();
//   await requestFaseh_DrugFirstStep.verifyRequestFirstStepPageOpened();
//   await requestFaseh_DrugFirstStep.commercialDrugImporterFillInformationFirstStep(shippmentPolicyNumber);
//   await requestFasehCommercialDrug_SecondStep.verifyRequestSecondStepPageOpened();
//   await requestFasehCommercialDrug_SecondStep.importerAddExceptionalEducationalProduct();
//   await requestFasehCommercialDrug_SecondStep.importerAddImportPermitProduct();
//   await requestFasehCommercialDrug_SecondStep.importerNavigateToRequestSummaryPage();
//   await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
//   await requestFaseh_SummaryPage.importerSubmitRequest();
//   await fasehRequestsPage_Drug.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForDrugRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await centralClearanceEmpTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnExceptionalDrug();
//   await centralClearanceEmpTakeDecision_Page.takePerviewDecision();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnImportPermitDrug();
//   await centralClearanceEmpTakeDecision_Page.takePullSampleDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await centralClearanceEmpTakeDecision_Page.selectPerviewTypeWarehouse();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openDrugFasehRequestsPage();
//   await fasehRequestsPage_Drug.searchByRequestNumber();
//   await fasehRequestsPage_Drug.selectModifyRequestOption();
//   await processingAdminRequestsByImporter_Page.importerSelectWarehouseLocation();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.warehouseInspectorEmail,testUsers.warehouseInspectorPassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await inspectorTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await perviewTemplateDrug_Page.fillPerviewTemplate();
//   await inspectorTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await inspectorTakeDecision_Page.takeDecisionOnImportPermitDrug();
//   await inspectorTakeDecision_Page.fillPullSampleDetails();
//   await inspectorTakeDecision_Page.sendDecision();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminTakeDecisionOnRequestAfterReturningFromWarehouseOrPort();
//   await centralClearanceEmpTakeDecision_Page.takeFasehDecision();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnImportPermitDrug();
//   await centralClearanceEmpTakeDecision_Page.takeFasehDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await centralClearanceEmpTakeDecision_Page.requestPledgeFromImporter();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openDrugFasehRequestsPage();
//   await fasehRequestsPage_Drug.searchByRequestNumber();
//   await fasehRequestsPage_Drug.selectModifyRequestOption();
//   await processingAdminRequestsByImporter_Page.importerConfirmPledgeRequestedByAdmin();
//   await fasehRequestsPage_Drug.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
// })

// test("Commercial Drug Request Take Perview and Pull Sample Decision On Products in Port", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openDrugFasehRequestsPage();
//   await fasehRequestsPage_Drug.clickOnNewRequestButton();
//   await requestFaseh_DrugFirstStep.verifyRequestFirstStepPageOpened();
//   await requestFaseh_DrugFirstStep.commercialDrugImporterFillInformationFirstStep(shippmentPolicyNumber);
//   await requestFasehCommercialDrug_SecondStep.verifyRequestSecondStepPageOpened();
//   await requestFasehCommercialDrug_SecondStep.importerAddExceptionalEducationalProduct();
//   await requestFasehCommercialDrug_SecondStep.importerAddImportPermitProduct();
//   await requestFasehCommercialDrug_SecondStep.importerNavigateToRequestSummaryPage();
//   await requestFaseh_SummaryPage.verifyRequestSummaryPageOpened();
//   await requestFaseh_SummaryPage.importerSubmitRequest();
//   await fasehRequestsPage_Drug.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForDrugRequests();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await centralClearanceEmpTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnExceptionalDrug();
//   await centralClearanceEmpTakeDecision_Page.takePerviewDecision();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnImportPermitDrug();
//   await centralClearanceEmpTakeDecision_Page.takePullSampleDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await centralClearanceEmpTakeDecision_Page.selectPerviewTypeWarehouse();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.portInspectorEmail,testUsers.portInspectorPassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminRecieveRequestUsingCheckBox();
//   await inspectorTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await perviewTemplateDrug_Page.fillPerviewTemplate();
//   await inspectorTakeDecision_Page.validateRequestNumberAfterOpeningRequest();
//   await inspectorTakeDecision_Page.takeDecisionOnImportPermitDrug();
//   await inspectorTakeDecision_Page.fillPullSampleDetails();
//   await inspectorTakeDecision_Page.sendDecision();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.centralClearanceEmployeeEmail,testUsers.centralClearanceEmployeePassword);
//   await adminHome_Page.adminOpenRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchByRequestNumber();
//   await adminRequestList_Page.adminTakeDecisionOnRequestAfterReturningFromWarehouseOrPort();
//   await centralClearanceEmpTakeDecision_Page.takeFasehDecision();
//   await centralClearanceEmpTakeDecision_Page.takeDecisionOnImportPermitDrug();
//   await centralClearanceEmpTakeDecision_Page.takeFasehDecision();
//   await centralClearanceEmpTakeDecision_Page.sendDecision();
//   await centralClearanceEmpTakeDecision_Page.requestPledgeFromImporter();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openDrugFasehRequestsPage();
//   await fasehRequestsPage_Drug.searchByRequestNumber();
//   await fasehRequestsPage_Drug.selectModifyRequestOption();
//   await processingAdminRequestsByImporter_Page.importerConfirmPledgeRequestedByAdmin();
//   await fasehRequestsPage_Drug.validateFasehRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
// })


