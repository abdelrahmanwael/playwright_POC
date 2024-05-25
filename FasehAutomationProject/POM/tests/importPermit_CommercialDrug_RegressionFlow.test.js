import {test, expect} from '@playwright/test';
import testUrls from '../test-data/testUrls';
import testUsers from "../test-data/testUsers"
import fasehLandingPage from "../pages/fasehLandingPage"
import denrLoginPage from "../pages/denrLoginPage"
import landingPageDrug from "../pages/landingPageDrug"
import importPermitRequestsDrugPage from "../pages/importPermitRequestsDrugPage"
import importPermitCommercialDrugFirstStepPage from "../pages/importPermitCommercialDrugFirstStepPage"
import importPermitCommercialDrugSecondStepPage from "../pages/importPermitCommercialDrugSecondStepPage"
import importPermitCommercialDrugThirdStepPage from "../pages/importPermitCommercialDrugThirdStepPage"
import importPermitCommercialDrugFourthStepPage from "../pages/importPermitCommercialDrugFourthStepPage"
import importPermitDrugSummaryPage from "../pages/importPermitDrugSummaryPage"
import adminLoginPage from "../pages/adminLoginPage"
import adminHomePage from "../pages/adminHomePage"
import adminRequestListPage from "../pages/adminRequestListPage"
import importPermitReviewerTakeDecisionPage from "../pages/importPermitReviewerTakeDecisionPage"
import importPermitSupervisorTakeDecisionPage from "../pages/importPermitSupervisorTakeDecisionPage"



//const

let fasehLanding_Page, denrLogin_Page, landingPage_Drug, importPermitRequestsDrug_Page, importPermitCommercialDrugFirstStep_Page, importPermitCommercialDrugSecondStep_Page, importPermitCommercialDrugThirdStep_Page, importPermitCommercialDrugFourthStep_Page, importPermitDrugSummary_Page, adminLogin_Page, adminHome_Page, adminRequestList_Page, importPermitReviewerTakeDecision_Page, importPermitSupervisorTakeDecision_Page;

test.beforeEach(async ({page}) => {
  fasehLanding_Page = new fasehLandingPage(page);
  denrLogin_Page = new denrLoginPage(page);
  landingPage_Drug = new landingPageDrug(page);
  importPermitRequestsDrug_Page = new importPermitRequestsDrugPage(page);
  importPermitCommercialDrugFirstStep_Page = new importPermitCommercialDrugFirstStepPage(page);
  importPermitCommercialDrugSecondStep_Page = new importPermitCommercialDrugSecondStepPage(page);
  importPermitCommercialDrugThirdStep_Page = new importPermitCommercialDrugThirdStepPage(page);
  importPermitCommercialDrugFourthStep_Page = new importPermitCommercialDrugFourthStepPage(page);
  importPermitDrugSummary_Page = new importPermitDrugSummaryPage(page);
  adminLogin_Page = new adminLoginPage(page);
  adminHome_Page = new adminHomePage(page);
  adminRequestList_Page = new adminRequestListPage(page);
  importPermitReviewerTakeDecision_Page = new importPermitReviewerTakeDecisionPage(page);
  importPermitSupervisorTakeDecision_Page = new importPermitSupervisorTakeDecisionPage(page);
  })

// test("Indvidual Drug Importer Create New Import Permit Request", async () => {
//   await fasehLanding_Page.navigateToPublicUrl();
//   await fasehLanding_Page.clickOnLoginIconDrug();
//   await denrLogin_Page.loginWithDenr(testUsers.userDenr,testUsers.passwordDenr);
//   await landingPage_Drug.openImportPermitRequestsPage();
//   await importPermitRequestsDrug_Page.clickOnNewRequestButton();
//   await importPermitCommercialDrugFirstStep_Page.fillFirstStepDetails();
//   await importPermitCommercialDrugSecondStep_Page.verifyRequestSecondStepPageOpened();
//   await importPermitCommercialDrugSecondStep_Page.importerAddUnRegisteredProduct();
//   await importPermitCommercialDrugSecondStep_Page.importerViewUnRegisteredProductDetails();
//   await importPermitCommercialDrugSecondStep_Page.importerAddRegisteredProduct();
//   await importPermitCommercialDrugSecondStep_Page.importerViewRegisteredProductDetails();
//   await importPermitCommercialDrugSecondStep_Page.importerGoToNextStepPage();
//   await importPermitCommercialDrugThirdStep_Page.fillThirdStepDetails();
//   await importPermitCommercialDrugFourthStep_Page.fillFourthStepDetails();
//   await importPermitDrugSummary_Page.importerSubmitRequest();
//   await importPermitRequestsDrug_Page.validateImportPermitRequestsPageOpened();
//   await fasehLanding_Page.importerLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.importPermitReviewerEmail,testUsers.importPermitReviewerPassword);
//   await adminHome_Page.adminOpenImportPermitRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForImportPermitDrugRequests();
//   await adminRequestList_Page.adminSearchByImportPermitRequestNumber();
//   await importPermitReviewerTakeDecision_Page.importPermitReviewerRecieveRequest();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchByImportPermitRequestNumber();
//   await importPermitReviewerTakeDecision_Page.importPermitReviewerTakeDecisionOnRequest();
//   await importPermitReviewerTakeDecision_Page.importPermitReviewerTakeAcceptDecisionOnCommercialRequestUnRegisteredProduct();
//   await importPermitReviewerTakeDecision_Page.importPermitReviewerTakeAcceptDecisionOnCommercialRequestRegisteredProduct();
//   await importPermitReviewerTakeDecision_Page.importPermitReviewerClickAcceptBtn();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminHome_Page.adminLogout();
//   await adminLogin_Page.navigateToAdminUrl();
//   await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.importPermitSupervisorEmail,testUsers.importPermitSupervisorPassword);
//   await adminHome_Page.adminOpenImportPermitRequestList();
//   await adminRequestList_Page.validateRequestListPageOpened();
//   await adminRequestList_Page.adminSearchForImportPermitDrugRequests();
//   await adminRequestList_Page.adminSearchByImportPermitRequestNumber();
//   await importPermitSupervisorTakeDecision_Page.importPermitSupervisorTakeAcceptDecisionOnRequestOnCommercialRequest();
//   await adminHome_Page.adminLogout();
// })