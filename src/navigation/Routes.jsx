import { Route, Routes } from "react-router-dom";

// Accounts Elements
import AccountsLab from "../modules/Accounts/AccountsLab/AccountsLab";
import AccountsLogs from "../modules/Accounts/AccountsLogs/AccountsLogs";
import AccountsUsers from "../modules/Accounts/AccountsUsers/AccountsUsers";
import AccountsRoles from "modules/Accounts/AccountsRoles/AccountsRoles";

// Lab Elements
import LabSampleReception from "../modules/Lab/LabSampleReception/LabSampleReception";
import LabDataEntry from "modules/Lab/LabDataEntry/LabDataEntry";
import LabResolution from "../modules/Lab/LabResolution/LabResolution";
import LabLogs from "../modules/Lab/LabLogs/LabLogs";

// Maketing Elements
import MarketingDashboard from "../modules/Marketing/MarketingDashboard/MarketingDashboard";
import MarketingHCPAccounts from "../modules/Marketing/MarketingHcpAccounts/MarketingHCPAccounts";
import MarketingPracticeAccounts from "../modules/Marketing/MarketingPracticeAccounts/MarketingPracticeAccounts";
import MarketingPanelAndItems from "../modules/Marketing/MarketingPanelAndItems/MarketingPanelAndItems";
import MarketingProfile from "../modules/Marketing/MarketingProfile/MarketingProfile";
import MarketingPromotions from "../modules/Marketing/MarketingPromotions/MarketingPromotions";

import MarketingSalesFunnel from "../modules/Marketing/MarketingSalesFunnel/MarketingSalesFunnel";
import MarketingLogs from "../modules/Marketing/MarketingLogs/MarketingLogs";

// Logistics Elements
import LogisticsDashboard from "../modules/Logistics/LogisticsDashboard/LogisticsDashboard";
import LogisticsRoutes from "../modules/Logistics/LogisticsRoutes/LogisticsRoutes";
import LogisticsRiders from "../modules/Logistics/LogisticsRiders/LogisticsRiders";
import LogisticsLogs from "../modules/Logistics/LogisticsLogs/LogisticsLogs";

// CRM Elements
import CRMDashboard from "../modules/CRM/CRMDashboard";
import CRMCallCenter from "../modules/CRM/CRMCallCenter";
import CRMLogs from "../modules/CRM/CRMLogs";

import Dashboard from "../modules/Dashboard/Dashboard";
import Finance from "../modules/Finance/Finance";
import Inventory from "../modules/Inventory/Inventory";

import { routes } from "./config";
import ResetPasswordPage from "modules/Login/ResetPasswordPage";
import LoginPage from "../modules/Login/LoginPage";
import ForgotPasswordPage from "../modules/Login/ForgotPasswordPage";
import NotFoundPage from "components/NotFoundPage/NotFoundPage";
import ProtectRoutes from "components/Auth/ProtectRoutes";
import RoleBasedProtectedRoutes from "components/Auth/RoleBasedProtectedRoutes";
import { useSelector } from "react-redux";
import Settings from "modules/Settings/Settings";
// import ComingSoonPage from "components/NotFoundPage/ComingSoonPage";

const AppRoutes = () => {
  const { permissions } = useSelector((state) => state.loginReducer);
  return (
    <Routes>
      <Route element={<ProtectRoutes />}>
        <Route path={routes.root} element={<Dashboard />} />

        <Route
          path={routes.marketingDashboard}
          element={<MarketingDashboard />}
        />
        <Route path={routes.defaultInventory} element={<Inventory />} />
        <Route path={routes.defaultFinance} element={<Finance />} />

        {/* ------------------ Accounts Routes ------------------ */}
        {/* For Accounts Lab Tabs */}
        {[
          routes.accountsLabList,
          `${routes.accountsLabList}/:id`,
          routes.accountsLabAddEditLab,
          `${routes.accountsLabAddEditLab}/:id`,
        ].map((path, index) => (
          <Route
            element={
              <RoleBasedProtectedRoutes
                permissions={{
                  show: permissions?.accounts?.labs?.show,
                  update:
                    (permissions?.accounts?.labs?.show &&
                      permissions?.accounts?.labs?.create) ||
                    (permissions?.accounts?.labs?.show &&
                      permissions?.accounts?.labs?.update),
                }}
              />
            }
            key={index}
          >
            <Route path={path} element={<AccountsLab />} />
          </Route>
        ))}

        {/* For Accounts Users Tabs */}
        {[
          routes.accountsUsersList,
          routes.accountsUsersAddEditUsers,
          `${routes.accountsUsersAddEditUsers}/:id`,
        ].map((path, index) => (
          <Route
            element={
              <RoleBasedProtectedRoutes
                permissions={{
                  show: permissions?.accounts?.employees?.show,
                  update:
                    (permissions?.accounts?.employees?.show &&
                      permissions?.accounts?.employees?.create) ||
                    (permissions?.accounts?.employees?.show &&
                      permissions?.accounts?.employees?.update),
                }}
              />
            }
            key={index}
          >
            <Route path={path} element={<AccountsUsers />} />
          </Route>
        ))}

        {/* For Accounts Roles Tabs */}
        {[
          routes.accountsRolesList,
          routes.accountsRolesAddEditUsers,
          `${routes.accountsRolesAddEditUsers}/:id`,
        ].map((path, index) => (
          <Route
            element={
              <RoleBasedProtectedRoutes
                permissions={{
                  show: permissions?.accounts?.roles?.show,
                  update:
                    (permissions?.accounts?.roles?.show &&
                      permissions?.accounts?.roles?.create) ||
                    (permissions?.accounts?.roles?.show &&
                      permissions?.accounts?.roles?.update),
                }}
              />
            }
            key={index}
          >
            <Route path={path} element={<AccountsRoles />} />
          </Route>
        ))}

        {/*For Accounts Logs Tabs */}
        <Route path={routes.accountsLogs} element={<AccountsLogs />} />

        {/* ------------------ For Lab ------------------ */}
        {/* For Lab Sample Reception Tabs*/}
        {[
          routes.labSampleReceptionCheckIn,
          routes.labSampleReceptionSampleValidation,
          routes.labSampleReceptionOrderList,
          routes.labSampleReceptionEOrderView,
        ].map((path, index) => (
          <Route path={path} element={<LabSampleReception />} key={index} />
        ))}
        {/* For Lab Data Entry Tabs*/}
        {[
          routes.labDataEntry,
          routes.labDataEntryScannedDocumentList,
          routes.labDataEntryPaperOrderActivation,
        ].map((path, index) => (
          <Route path={path} element={<LabDataEntry />} key={index} />
        ))}
        {/* For Lab Resolution Tabs*/}
        {[routes.labResolutionList, routes.labResolutionProblemResolution].map(
          (path, index) => (
            <Route path={path} element={<LabResolution />} key={index} />
          )
        )}
        {/* For Lab Logs Tabs*/}
        {[routes.labLogs, routes.labAuditLogs].map((path, index) => (
          <Route path={path} element={<LabLogs />} key={index} />
        ))}

        {/* ------------------ For Marketing ------------------ */}
        {/* For Marketing Dashboard */}
        <Route
          path={routes.marketingDashboard}
          element={<MarketingDashboard />}
        />
        {/* For Marketing HCP Accounts*/}
        <Route
          path={routes.marketingHCPAccounts}
          element={<MarketingHCPAccounts />}
        />

        {/* For Marketing Practice Accounts*/}
        <Route
          path={routes.marketingPracticeAccounts}
          element={<MarketingPracticeAccounts />}
        />

        {/*For Marketiong Panel and Items*/}
        {[routes.marketingPanelDatabase, routes.marketingPanelItems].map(
          (path, index) => (
            <Route
              path={path}
              element={<MarketingPanelAndItems />}
              key={index}
            />
          )
        )}

        {/*For Marketiong Profile*/}
        <Route path={routes.marketingProfile} element={<MarketingProfile />} />

        {/*For Marketiong Promotions Rate Card and Rate History*/}
        {[
          routes.marketingPromotionsRateCard,
          routes.marketingPromtionsRateHistory,
        ].map((path, index) => (
          <Route path={path} element={<MarketingPromotions />} key={index} />
        ))}

        {/*For Marketing Sales Client Funnel and Compaign Funnel*/}
        {[
          routes.marketingSalesClientFunnel,
          routes.marketingSalesCompaignFuneel,
        ].map((path, index) => (
          <Route path={path} element={<MarketingSalesFunnel />} key={index} />
        ))}

        {/*For Marketing Logs*/}
        <Route path={routes.marketingLogs} element={<MarketingLogs />} />

        {/* ------------------ For Logistics ------------------ */}
        {/* For Logistics Dashboard Tabs */}
        {[
          routes.logisticsDashboardOverview,
          routes.logisticsDashboardRecollect,
          routes.logisticsDashboardHistory,
        ].map((path, index) => (
          <Route path={path} element={<LogisticsDashboard />} key={index} />
        ))}

        {/* For Logistics Routes Tab */}
        <Route path={routes.logisticsRoutes} element={<LogisticsRoutes />} />

        {/* For Logistics Raiders Tabs */}
        {[
          routes.logisticsRidersList,
          routes.logisticsAddRiders,
          routes.logisticsEditRiders,
        ].map((path, index) => (
          <Route path={path} element={<LogisticsRiders />} key={index} />
        ))}

        {/* For Logistics Analytics and Logs Tab */}
        {[
          routes.logisticsLogsDispatchAnalytics,
          routes.logisticsLogsRiderAnalytics,
          routes.logisticsLogsDemandAnalytics,
          routes.logisticsLogsAudidLogs,
        ].map((path, index) => (
          <Route path={path} element={<LogisticsLogs />} key={index} />
        ))}

        {/* // --------- For CRM --------- */}

        <Route path={routes.crmDashboard} element={<CRMDashboard />} />

        {[routes.crmCallCenterClientSelection, routes.crmCallCenterActions].map(
          (path, index) => (
            <Route path={path} element={<CRMCallCenter />} key={index} />
          )
        )}

        {[routes.crmLogs, routes.crmAuditLogs].map((path, index) => (
          <Route path={path} element={<CRMLogs />} key={index} />
        ))}

        {/* {[
          routes.marketingDashboard,
          routes.defaultInventory,
          routes.defaultFinance,
          routes.accountsLogs,
          routes.marketingHCPAccounts,
          routes.marketingPracticeAccounts,
          routes.marketingPanelDatabase,
          routes.marketingPanelItems,
          routes.marketingProfile,
          routes.marketingPromotionsRateCard,
          routes.marketingPromtionsRateHistory,
          routes.marketingSalesClientFunnel,
          routes.marketingSalesCompaignFuneel,
          routes.marketingLogs,
          routes.logisticsDashboardOverview,
          routes.logisticsDashboardRecollect,
          routes.logisticsDashboardHistory,
          routes.LogisticsRoutes,
          routes.logisticsRidersList,
          routes.logisticsAddRiders,
          routes.logisticsEditRiders,
          routes.crmAuditLogs,
          routes.crmCallCenterClientSelection,
          routes.crmCallCenterActions,
          routes.crmDashboard,
          routes.logisticsLogsDispatchAnalytics,
          routes.logisticsLogsRiderAnalytics,
          routes.logisticsLogsDemandAnalytics,
          routes.logisticsLogsAudidLogs,
        ].map((path, index) => (
          <Route path={path} element={<ComingSoonPage />} key={index} />
        ))} */}
      </Route>

      {/* // --------- For Registration --------- */}
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.resetPassword} element={<ResetPasswordPage />} />
      <Route path={routes.forgotPassword} element={<ForgotPasswordPage />} />

      {/* // --------- For 404 Page Not Found --------- */}

      <Route path={routes.notfoundpage} element={<NotFoundPage />} />
      <Route path={routes.settings} element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
