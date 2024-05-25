import {test, expect} from '@playwright/test';
import testUrls from '../test-data/testUrls';
import testUsers from "../test-data/testUsers"
import fasehLandingPage from "../pages/fasehLandingPage"
import ghadLoginPage from "../pages/ghadLoginPage"
import landingPageDrug from "../pages/landingPageDrug"
import importPermitRequestsDrugPage from "../pages/importPermitRequestsDrugPage"
import importPermitIndividualDrugFirstStepPage from "../pages/importPermitIndividualDrugFirstStepPage"
import importPermitIndividualDrugSecondStepPage from "../pages/importPermitIndividualDrugSecondStepPage"
import importPermitIndividualDrugThirdStepPage from "../pages/importPermitIndividualDrugThirdStepPage"
import importPermitDrugSummaryPage from "../pages/importPermitDrugSummaryPage"
import adminLoginPage from "../pages/adminLoginPage"
import adminHomePage from "../pages/adminHomePage"
import adminRequestListPage from "../pages/adminRequestListPage"
import importPermitReviewerTakeDecisionPage from "../pages/importPermitReviewerTakeDecisionPage"
import importPermitSupervisorTakeDecisionPage from "../pages/importPermitSupervisorTakeDecisionPage"



//const

let fasehLanding_Page, ghadLogin_Page, landingPage_Drug, importPermitRequestsDrug_Page, importPermitIndividualDrugFirstStep_Page, importPermitIndividualDrugSecondStep_Page, importPermitIndividualDrugThirdStep_Page, importPermitDrugSummary_Page, adminLogin_Page, adminHome_Page, adminRequestList_Page, importPermitReviewerTakeDecision_Page, importPermitSupervisorTakeDecision_Page;

test.beforeEach(async ({page}) => {
  fasehLanding_Page = new fasehLandingPage(page);
  ghadLogin_Page = new ghadLoginPage(page);
  landingPage_Drug = new landingPageDrug(page);
  importPermitRequestsDrug_Page = new importPermitRequestsDrugPage(page);
  importPermitIndividualDrugFirstStep_Page = new importPermitIndividualDrugFirstStepPage(page);
  importPermitIndividualDrugSecondStep_Page = new importPermitIndividualDrugSecondStepPage(page);
  importPermitIndividualDrugThirdStep_Page = new importPermitIndividualDrugThirdStepPage(page);
  importPermitDrugSummary_Page = new importPermitDrugSummaryPage(page);
  adminLogin_Page = new adminLoginPage(page);
  adminHome_Page = new adminHomePage(page);
  adminRequestList_Page = new adminRequestListPage(page);
  importPermitReviewerTakeDecision_Page = new importPermitReviewerTakeDecisionPage(page);
  importPermitSupervisorTakeDecision_Page = new importPermitSupervisorTakeDecisionPage(page);
  })

test("Indvidual Drug Importer Create New Import Permit Request", async () => {
  await fasehLanding_Page.navigateToPublicUrl();
  await fasehLanding_Page.clickOnLoginIconDrug();
  await ghadLogin_Page.loginWithGhad(testUsers.emailGhad,testUsers.passwordGhad);
  await landingPage_Drug.openImportPermitRequestsPage();
  await importPermitRequestsDrug_Page.clickOnNewRequestButton();
  await importPermitIndividualDrugFirstStep_Page.fillFirstStepDetails();
  await importPermitIndividualDrugSecondStep_Page.fillSecondStepDetails();
  await importPermitIndividualDrugThirdStep_Page.fillThirdStepDetails();
  await importPermitDrugSummary_Page.importerSubmitRequest();
  await importPermitRequestsDrug_Page.validateImportPermitRequestsPageOpened();
  await fasehLanding_Page.importerLogout();
  await adminLogin_Page.navigateToAdminUrl();
  await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.importPermitReviewerEmail,testUsers.importPermitReviewerPassword);
  await adminHome_Page.adminOpenImportPermitRequestList();
  await adminRequestList_Page.validateRequestListPageOpened();
  await adminRequestList_Page.adminSearchForImportPermitDrugRequests();
  await adminRequestList_Page.adminSearchByImportPermitRequestNumber();
  await importPermitReviewerTakeDecision_Page.importPermitReviewerRecieveRequest();
  await adminRequestList_Page.validateRequestListPageOpened();
  await adminRequestList_Page.adminSearchByImportPermitRequestNumber();
  await importPermitReviewerTakeDecision_Page.importPermitReviewerTakeDecisionOnRequest();
  await importPermitReviewerTakeDecision_Page.importPermitReviewerTakeAcceptDecisionOnIndividualRequest();
  await importPermitReviewerTakeDecision_Page.importPermitReviewerClickAcceptBtn();
  await adminRequestList_Page.validateRequestListPageOpened();
  await adminHome_Page.adminLogout();
  await adminLogin_Page.navigateToAdminUrl();
  await adminLogin_Page.loginAsAuthorizedEmployee(testUsers.importPermitSupervisorEmail,testUsers.importPermitSupervisorPassword);
  await adminHome_Page.adminOpenImportPermitRequestList();
  await adminRequestList_Page.validateRequestListPageOpened();
  await adminRequestList_Page.adminSearchForImportPermitDrugRequests();
  await adminRequestList_Page.adminSearchByImportPermitRequestNumber();
  await importPermitSupervisorTakeDecision_Page.importPermitSupervisorTakeAcceptDecisionOnRequestOnIndividualRequest();
  await adminHome_Page.adminLogout();
})