export const links = Object.freeze({
  root: "/",

  // -------- For Accounts----------
  defaultAccounts: "/accounts/lab/lab-list",
  // For Accounts Lab Tabs
  accountsLabList: "/accounts/lab/lab-list",
  accountsLabAddEditLab: "/accounts/lab/add_edit-lab",

  // For Accounts Users Tabs
  accountsUsersList: "/accounts/users-list",
  accountsUsersAddEditUsers: "/accounts/users-add-edit-users",

  // For Accounts Roles Tabs
  accountsRolesList: "/accounts/roles-list",
  accountsRolesAddEditUsers: "/accounts/roles-add-edit",

  //For Accounts Logs Tabs
  accountsLogs: "/accounts/logs",

  // --------- For Lab ---------
  defaultlab: "/lab/sample-reception/check-in",
  // For Lab Sample Reception Tabs
  labSampleReceptionCheckIn: "/lab/sample-reception/check-in",
  labSampleReceptionSampleValidation: "/lab/sample-reception/sample-validation",
  labSampleReceptionOrderList: "/lab/sample-reception/order-list",
  labSampleReceptionEOrderView: "/lab/sample-reception/eorder-view",

  // For Lab Data Entry Tabs
  labDataEntry: "/lab/data-entry/dashboard",
  labDataEntryScannedDocumentList: "/lab/data-entry/scanned-document-list",
  labDataEntryPaperOrderActivation: "/lab/data-entry/paper-order-activation",

  // For Lab Resolution Tabs
  labResolutionList: "/lab/resolution/resolution-list",
  labResolutionProblemResolution: "/lab/resolution/problem-resolution",

  // For Lab Logs Tabs
  labLogs: "/lab/logs/lab-logs",
  labAuditLogs: "/lab/logs/audit-logs",

  // --------- For Marketing ---------
  defaultMarketing: "/marketing/dashboard",

  //FOR MARKETING DASHBOARD
  marketingDashboard: "/marketing/dashboard",

  //For Marketing HCP DATABASE
  marketingHCPAccounts: "/marketing/hcp-accounts",

  //For Marketing Practice Accounts
  marketingPracticeAccounts: "/marketing/practice-accounts",

  //For Marketing Panel and Items
  marketingPanelDatabase: "/marketing/panel-&-items/panel-database",
  marketingPanelItems: "/marketing/panel-&-items/item-database",

  //For Marketing profile
  marketingProfile: "/marketing/profile",

  //For Marketing Promotions Rate Card and Rate History
  marketingPromotionsRateCard: "/marketing/promotions/rate-card",
  marketingPromtionsRateHistory: "/marketing/promotions/rate-history",

  //For Marketing Sales and Funnel
  marketingSalesClientFunnel: "/marketing/sales-funnel/client-funnel",
  marketingSalesCompaignFunnel: "/marketing/sales-funnel/compaign-funnel",

  //For Marketing Logs
  marketingLogs: "/marketing/logs",

  // --------- For Logistics ---------
  defaultLogistics: "/logistics/dashboard/overview",

  // For Logistics Dashboard Tabs
  logisticsDashboardOverview: "/logistics/dashboard/overview",
  logisticsDashboardRecollect: "/logistics/dashboard/recollect",
  logisticsDashboardHistory: "/logistics/dashboard/history",

  // For Logistics Routes Tab
  logisticsRoutes: "/logistics/routes",

  // For Logistics Riders Tab
  logisticsRidersList: "/logistics/riders/riders-list",
  logisticsAddRiders: "/logistics/riders/add-riders",
  logisticsEditRiders: "/logistics/riders/edit-riders",


  // For Logistics Analytics and Logs Tab
  logisticsLogsDispatchAnalytics:
    "/logistics/analytics-&-logs/dispatch-analytics",
  logisticsLogsRiderAnalytics: "/logistics/analytics-&-logs/rider-analytics",
  logisticsLogsDemandAnalytics: "/logistics/analytics-&-logs/demand-analytics",
  logisticsLogsAudidLogs: "/logistics/analytics-&-logs/audit-logs",

  defaultInventory: "/inventory",
  defaultFinance: "/finance",

  // --------- For CRM ---------
  defaultCRM: "/crm/dashboard",
  crmDashboard: "/crm/dashboard",
  crmCallCenter: "/crm/call-center",
  crmCallCenterClientSelection: "/crm/call-center/client-selection",
  crmCallCenterActions: "/crm/call-center/actions",
  crmLogs: "/crm/logs/crmLogs",
  crmAuditLogs: "/crm/logs/audit-logs",

  // --------- For Registration ---------
  login: "/login",
  forgotPassword: "/forgot-password",
  resetPassword: "/password/edit",

  //  ----------For 404 Page --------------
  notfoundpage: "*",

  //  ----------For Settings --------------
  settings: "/settings",
});

export const routes = Object.freeze({
  root: links.root,

  // For Accounts

  // For Accounts Lab Tabs
  accountsLabList: links.accountsLabList,
  accountsLabAddEditLab: links.accountsLabAddEditLab,

  // For Accounts Users Tabs
  accountsUsersList: links.accountsUsersList,
  accountsUsersAddEditUsers: links.accountsUsersAddEditUsers,

  // For Accounts Roles Tabs
  accountsRolesList: links.accountsRolesList,
  accountsRolesAddEditUsers: links.accountsRolesAddEditUsers,

  //For Accounts Logs Tabs
  accountsLogs: links.accountsLogs,

  // --------- For Lab ---------

  // For Lab Sample Reception Tabs
  labSampleReceptionCheckIn: links.labSampleReceptionCheckIn,
  labSampleReceptionSampleValidation: links.labSampleReceptionSampleValidation,
  labSampleReceptionOrderList: links.labSampleReceptionOrderList,
  labSampleReceptionEOrderView: links.labSampleReceptionEOrderView,

  // For Lab Resolution Tabs
  labResolutionList: links.labResolutionList,
  labResolutionProblemResolution: links.labResolutionProblemResolution,
  labDataEntryPaperOrderActivation: links.labDataEntryPaperOrderActivation,

  // For Lab Data Entry Tabs
  labDataEntry: links.labDataEntry,
  labDataEntryScannedDocumentList: links.labDataEntryScannedDocumentList,

  // For Lab Logs Tabs
  labLogs: links.labLogs,
  labAuditLogs: links.labAuditLogs,

  // --------- For Marketing ---------

  // For Marketing Dashboard Tab
  marketingDashboard: links.marketingDashboard,

  // For Marketing HCP Tab
  marketingHCPAccounts: links.marketingHCPAccounts,

  // For Marketing Practice Account Tab
  marketingPracticeAccounts: links.marketingPracticeAccounts,

  // For Marketing Panel & Items Tabs
  marketingPanelDatabase: links.marketingPanelDatabase,
  marketingPanelItems: links.marketingPanelItems,

  //For Marketing Profile
  marketingProfile: links.marketingProfile,

  //For Marketing Promotions Rate Card and Rate History
  marketingPromotionsRateCard: links.marketingPromotionsRateCard,
  marketingPromtionsRateHistory: links.marketingPromtionsRateHistory,

  //For Marketing Sales Client and Sales Compaign Funnel
  marketingSalesClientFunnel: links.marketingSalesClientFunnel,
  marketingSalesCompaignFuneel: links.marketingSalesCompaignFunnel,

  //For Marketing Logs
  marketingLogs: links.marketingLogs,

  // --------- For Logistics ---------

  // For Logistics Dashboard Tabs
  logisticsDashboardOverview: links.logisticsDashboardOverview,
  logisticsDashboardRecollect: links.logisticsDashboardRecollect,
  logisticsDashboardHistory: links.logisticsDashboardHistory,

  // For Logistics routes Tabs
  logisticsRoutes: links.logisticsRoutes,

  // For Logistics riders Tabs
  logisticsRidersList: links.logisticsRidersList,
  logisticsAddRiders: links.logisticsAddRiders,
  logisticsEditRiders: links.logisticsEditRiders,

  // For Logistics Analytics and Logs Tab
  logisticsLogsDispatchAnalytics: links.logisticsLogsDispatchAnalytics,
  logisticsLogsRiderAnalytics: links.logisticsLogsRiderAnalytics,
  logisticsLogsDemandAnalytics: links.logisticsLogsDemandAnalytics,
  logisticsLogsAudidLogs: links.logisticsLogsAudidLogs,

  inventory: links.inventory,
  finance: links.finance,

  // --------- For CRM ---------
  crmDashboard: links.crmDashboard,
  crmCallCenter: links.crmCallCenter,
  crmLogs: links.crmLogs,
  crmCallCenterClientSelection: links.crmCallCenterClientSelection,
  crmCallCenterActions: links.crmCallCenterActions,
  crmAuditLogs: links.crmAuditLogs,

  // --------- For Registration ---------
  login: links.login,
  forgotPassword: links.forgotPassword,
  resetPassword: links.resetPassword,

  //----------For 404 Page --------------
  notfoundpage: links.notfoundpage,

  //----------For Settings --------------
  settings: links.settings,
});
