import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const ModuleMenuCommon = ({RoleModel}) => {
  const {url} = useContext(StoreContext)
  const [permission,setPermission] = useState({
    // admin
    CompanyRead:false,CompanyWrite:false,CompanyModify:false,
    UserRead:false,UserWrite:false,UserModify:false,UserDelete:false,
    RoleRead:false,RoleWrite:false,RoleModify:false,RoleDelete:false,SendMailRead:false,SerialSettingRead:false,SerialSettingModify:false,
    ApprovalSettingRead:false,ApprovalSettingModify:false,
    CountryMasterRead:false,CountryMasterWrite:false,CountryMasterModify:false,CountryMasterDelete:false,
    StateMasterRead:false,StateMasterWrite:false,StateMasterModify:false,StateMasterDelete:false,
    BankMasterRead:false,BankMasterWrite:false,BankMasterModify:false,BankMasterDelete:false,MasterReportRead:false,
    ManagementLogRead:false,ManagementLogWrite:false,ManagementLogModify:false,ManagementLogDelete:false,ManagementLogReportAndExport:false,
    ImportExcelRead:false,ImportExcelReportAndExport:false,FinancialYearRead:false,FinancialYearReportAndExport:false,
    MailHistoryRead:false,MailHistoryReportAndExport:false,
    // inventry
    InventryGroupRead:false,InventryGroupWrite:false,InventryGroupModify:false,InventryGroupDelete:false,
    InventryCategoryMasterRead:false,InventryCategoryMasterWrite:false,InventryCategoryMasterModify:false,InventryCategoryMasterDelete:false,
    HsnMasterRead:false,HsnMasterWrite:false,HsnMasterModify:false,HsnMasterDelete:false,HsnMasterApproved1:false,HsnMasterApproved2:false,HsnMasterApproved3:false,
    UnitMasterRead:false,UnitMasterWrite:false,UnitMasterModify:false,UnitMasterDelete:false,
    ItemMasterRead:false,ItemMasterWrite:false,ItemMasterModify:false,ItemMasterDelete:false,ItemMasterApproved1:false,ItemMasterApproved2:false,ItemMasterApproved3:false,
    PriceListRead:false,PriceListWrite:false,PriceListModify:false,PriceListDelete:false,
    VendorRead:false,VendorWrite:false,VendorModify:false,VendorDelete:false,VendorApproved1:false,VendorApproved2:false,VendorApproved3:false,
    VendorComplaintRead:false,VendorComplaintWrite:false,VendorComplaintModify:false,VendorComplaintDelete:false,
    GrnRead:false,GrnWrite:false,GrnModify:false,GrnDelete:false,GrnApproved1:false,GrnApproved2:false,GrnApproved3:false,GrnReportAndExport:false,
    ChallanRead:false,ChallanWrite:false,ChallanModify:false,ChallanDelete:false,ChallanApproved1:false,ChallanApproved2:false,ChallanApproved3:false,ChallanReportAndExport:false,
    GatePassReturnRead:false,GatePassReturnWrite:false,GatePassReturnModify:false,GatePassReturnDelete:false,GatePassReturnApproved1:false,GatePassReturnApproved2:false,GatePassReturnApproved3:false,GatePassReturnReportAndExport:false,
    MrsRead:false,MrsWrite:false,MrsModify:false,MrsDelete:false,MrsApproved1:false,MrsApproved2:false,MrsApproved3:false,MrsReportAndExport:false,
    MisRead:false,MisWrite:false,MisModify:false,MisDelete:false,MisApproved1:false,MisApproved2:false,MisApproved3:false,MisReportAndExport:false,
    MisReturnRead:false,MisReturnWrite:false,MisReturnModify:false,MisReturnDelete:false,MisReturnApproved1:false,MisReturnApproved2:false,MisReturnApproved3:false,MisReturnReportAndExport:false,
    GatePassRead:false,GatePassWrite:false,GatePassModify:false,GatePassDelete:false,GatePassApproved1:false,GatePassApproved2:false,GatePassApproved3:false,GatePassReportAndExport:false,
    DeliveryNoteRead:false,DeliveryNoteWrite:false,DeliveryNoteModify:false,DeliveryNoteDelete:false,DeliveryNoteApproved1:false,DeliveryNoteApproved2:false,DeliveryNoteApproved3:false,DeliveryNoteReportAndExport:false,
    StockAdjustmentRead:false,StockAdjustmentWrite:false,StockAdjustmentModify:false,StockAdjustmentDelete:false,
    VendorPoRead:false,VendorPoWrite:false,VendorPoModify:false,VendorPoDelete:false,
    VendorSurveyRead:false,VendorSurveyWrite:false,VendorSurveyModify:false,VendorSurveyDelete:false,
    VendorMasterRead:false,VendorMasterWrite:false,VendorMasterModify:false,VendorMasterDelete:false,
    VendorRecordRead:false,VendorRecordWrite:false,VendorRecordModify:false,VendorRecordDelete:false,
    InventryReportRead:false,InventryReport_ReportAndExport:false,
    PendingBillsRead:false,PendingBillsReportAndExport:false,
    StockAssignRead:false,StockAssignReportAndExport:false,
    LogisticHistoryRead:false,LogisticHistoryReportAndExport:false,
    FinishedGoodsRead:false,FinishedGoodsReportAndExport:false,
    ReturnRejectedRead:false,ReturnRejectedWrite:false,ReturnRejectedModify:false,ReturnRejectedDelete:false,ReturnRejectedReportAndExport:false,
    RejectedReportRead:false,RejectedReport_ReportAndExport:false,
    PackingMasterRead:false,PackingMasterWrite:false,PackingMasterModify:false,PackingMasterDelete:false,
    EuDeclarationRead:false,EuDeclarationWrite:false,EuDeclarationModify:false,EuDeclarationDelete:false,
    ContractReviewRead:false,ContractReviewWrite:false,ContractReviewModify:false,ContractReviewDelete:false,
    JobWorkBalanceRead:false,JobWorkBalanceReportAndExport:false,
    AddBOMMasterRead:false,AddBOMMasterWrite:false,AddBOMMasterModify:false,AddBOMMasterDelete:false,
    BatchSerialSettingRead:false,BatchSerialSettingWrite:false,BatchSerialSettingModify:false,BatchSerialSettingDelete:false,
    ServiceRequisitionRead:false,ServiceRequisitionWrite:false,ServiceRequisitionModify:false,ServiceRequisitionDelete:false,
    SpecificDetailsRead:false,SpecificDetailsWrite:false,SpecificDetailsModify:false,SpecificDetailsDelete:false,
    PhoneGroupRead:false,PhoneGroupWrite:false,PhoneGroupModify:false,PhoneGroupDelete:false,
    // finance
    FinanceGroupRead:false,FinanceGroupWrite:false,FinanceGroupModify:false,FinanceGroupDelete:false,
    LedgerRead:false,LedgerWrite:false,LedgerModify:false,LedgerDelete:false,LedgerApproved1:false,LedgerApproved2:false,LedgerApproved3:false,LedgerReportAndExport:false,
    RegisterSettingRead:false,RegisterSettingReportAndExport:false,
    PaymentMasterRead:false,PaymentMasterWrite:false,PaymentMasterModify:false,PaymentMasterDelete:false,
    ChequeBookMasterRead:false,ChequeBookMasterWrite:false,ChequeBookMasterModify:false,ChequeBookMasterDelete:false,
    ChequeMasterRead:false,ChequeMasterWrite:false,ChequeMasterModify:false,ChequeMasterDelete:false,ChequeStatementRead:false,
    CurrencyRead:false,CurrencyWrite:false,CurrencyModify:false,CurrencyDelete:false,
    IECNoMasterRead:false,IECNoMasterWrite:false,IECNoMasterModify:false,IECNoMasterDelete:false,
    LUTNoMasterRead:false,LUTNoMasterWrite:false,LUTNoMasterModify:false,LUTNoMasterDelete:false,
    LCNoMasterRead:false,LCNoMasterWrite:false,LCNoMasterModify:false,LCNoMasterDelete:false,
    AdvanceAuthNoRead:false,AdvanceAuthNoWrite:false,AdvanceAuthNoModify:false,AdvanceAuthNoDelete:false,
    PurchaseOrderRead:false,PurchaseOrderWrite:false,PurchaseOrderModify:false,PurchaseOrderDelete:false,PurchaseOrderApproved1:false,PurchaseOrderApproved2:false,PurchaseOrderApproved3:false,PurchaseOrderReportAndExport:false,
    GradeMasterRead:false,GradeMasterWrite:false,GradeMasterModify:false,GradeMasterDelete:false,
    RetailPurchaseOrderRead:false,RetailPurchaseOrderWrite:false,RetailPurchaseOrderModify:false,RetailPurchaseOrderDelete:false,RetailPurchaseOrderApproved1:false,RetailPurchaseOrderApproved2:false,RetailPurchaseOrderApproved3:false,RetailPurchaseOrderReportAndExport:false,
    ImportOrderRead:false,ImportOrderWrite:false,ImportOrderModify:false,ImportOrderDelete:false,ImportOrderApproved1:false,ImportOrderApproved2:false,ImportOrderApproved3:false,ImportOrderReportAndExport:false,
    ImportRetailOrderRead:false,ImportRetailOrderWrite:false,ImportRetailOrderModify:false,ImportRetailOrderDelete:false,ImportRetailOrderApproved1:false,ImportRetailOrderApproved2:false,ImportRetailOrderApproved3:false,ImportRetailOrderReportAndExport:false,
    PurchaseRead:false,PurchaseWrite:false,PurchaseModify:false,PurchaseDelete:false,PurchaseApproved1:false,PurchaseApproved2:false,PurchaseApproved3:false,PurchaseReportAndExport:false,
    RetailPurchaseRead:false,RetailPurchaseWrite:false,RetailPurchaseModify:false,RetailPurchaseDelete:false,RetailPurchaseApproved1:false,RetailPurchaseApproved2:false,RetailPurchaseApproved3:false,RetailPurchaseReportAndExport:false,
    ImportInvoiceRead:false,ImportInvoiceWrite:false,ImportInvoiceModify:false,ImportInvoiceDelete:false,ImportInvoiceApproved1:false,ImportInvoiceApproved2:false,ImportInvoiceApproved3:false,ImportInvoiceReportAndExport:false,
    ImportRetailInvoiceRead:false,ImportRetailInvoiceWrite:false,ImportRetailInvoiceModify:false,ImportRetailInvoiceDelete:false,ImportRetailInvoiceApproved1:false,ImportRetailInvoiceApproved2:false,ImportRetailInvoiceApproved3:false,ImportRetailInvoiceReportAndExport:false,
    PurchaseReturnRead:false,PurchaseReturnWrite:false,PurchaseReturnModify:false,PurchaseReturnDelete:false,PurchaseReturnApproved1:false,PurchaseReturnApproved2:false,PurchaseReturnApproved3:false,PurchaseReturnReportAndExport:false,
    RetailPurchaseReturnRead:false,RetailPurchaseReturnWrite:false,RetailPurchaseReturnModify:false,RetailPurchaseReturnDelete:false,RetailPurchaseReturnApproved1:false,RetailPurchaseReturnApproved2:false,RetailPurchaseReturnApproved3:false,RetailPurchaseReturnReportAndExport:false,
    SalesOrderRead:false,SalesOrderWrite:false,SalesOrderModify:false,SalesOrderDelete:false,SalesOrderApproved1:false,SalesOrderApproved2:false,SalesOrderApproved3:false,SalesOrderReportAndExport:false,
    RetailSalesOrderRead:false,RetailSalesOrderWrite:false,RetailSalesOrderModify:false,RetailSalesOrderDelete:false,RetailSalesOrderApproved1:false,RetailSalesOrderApproved2:false,RetailSalesOrderApproved3:false,RetailSalesOrderReportAndExport:false,
    ExportOrderRead:false,ExportOrderWrite:false,ExportOrderModify:false,ExportOrderDelete:false,ExportOrderApproved1:false,ExportOrderApproved2:false,ExportOrderApproved3:false,ExportOrderReportAndExport:false,
    ExportRetailOrderRead:false,ExportRetailOrderWrite:false,ExportRetailOrderModify:false,ExportRetailOrderDelete:false,ExportRetailOrderApproved1:false,ExportRetailOrderApproved2:false,ExportRetailOrderApproved3:false,ExportRetailOrderReportAndExport:false,
    SalesRead:false,SalesWrite:false,SalesModify:false,SalesDelete:false,SalesApproved1:false,SalesApproved2:false,SalesApproved3:false,SalesReportAndExport:false,
    RetailSalesRead:false,RetailSalesWrite:false,RetailSalesModify:false,RetailSalesDelete:false,RetailSalesApproved1:false,RetailSalesApproved2:false,RetailSalesApproved3:false,RetailSalesReportAndExport:false,
    ExportInvoiceRead:false,ExportInvoiceWrite:false,ExportInvoiceModify:false,ExportInvoiceDelete:false,ExportInvoiceApproved1:false,ExportInvoiceApproved2:false,ExportInvoiceApproved3:false,ExportInvoiceReportAndExport:false,
    ExportRetailInvoiceRead:false,ExportRetailInvoiceWrite:false,ExportRetailInvoiceModify:false,ExportRetailInvoiceDelete:false,ExportRetailInvoiceApproved1:false,ExportRetailInvoiceApproved2:false,ExportRetailInvoiceApproved3:false,ExportRetailInvoiceReportAndExport:false,
    SalesReturnRead:false,SalesReturnWrite:false,SalesReturnModify:false,SalesReturnDelete:false,SalesReturnApproved1:false,SalesReturnApproved2:false,SalesReturnApproved3:false,SalesReturnReportAndExport:false,
    RetailSalesReturnRead:false,RetailSalesReturnWrite:false,RetailSalesReturnModify:false,RetailSalesReturnDelete:false,RetailSalesReturnApproved1:false,RetailSalesReturnApproved2:false,RetailSalesReturnApproved3:false,RetailSalesReturnReportAndExport:false,
    PaymentIssueRead:false,PaymentIssueWrite:false,PaymentIssueModify:false,PaymentIssueDelete:false,PaymentIssueApproved1:false,PaymentIssueApproved2:false,PaymentIssueApproved3:false,PaymentIssueReportAndExport:false,
    PaymentReceiptRead:false,PaymentReceiptWrite:false,PaymentReceiptModify:false,PaymentReceiptDelete:false,PaymentReceiptApproved1:false,PaymentReceiptApproved2:false,PaymentReceiptApproved3:false,PaymentReceiptReportAndExport:false,
    JournalEntryRead:false,JournalEntryWrite:false,JournalEntryModify:false,JournalEntryDelete:false,JournalEntryApproved1:false,JournalEntryApproved2:false,JournalEntryApproved3:false,JournalEntryReportAndExport:false,
    ContraVoucherRead:false,ContraVoucherWrite:false,ContraVoucherModify:false,ContraVoucherDelete:false,ContraVoucherApproved1:false,ContraVoucherApproved2:false,ContraVoucherApproved3:false,ContraVoucherReportAndExport:false,
    GainProfitLossRead:false,GainProfitLossWrite:false,GainProfitLossModify:false,GainProfitLossDelete:false,GainProfitLossApproved1:false,GainProfitLossApproved2:false,GainProfitLossApproved3:false,GainProfitLossReportAndExport:false,
    DebitNoteRead:false,DebitNoteWrite:false,DebitNoteModify:false,DebitNoteDelete:false,DebitNoteApproved1:false,DebitNoteApproved2:false,DebitNoteApproved3:false,DebitNoteReportAndExport:false,
    RetailDebitNoteRead:false,RetailDebitNoteWrite:false,RetailDebitNoteModify:false,RetailDebitNoteDelete:false,RetailDebitNoteApproved1:false,RetailDebitNoteApproved2:false,RetailDebitNoteApproved3:false,RetailDebitNoteReportAndExport:false,
    CreditNoteRead:false,CreditNoteWrite:false,CreditNoteModify:false,CreditNoteDelete:false,CreditNoteApproved1:false,CreditNoteApproved2:false,CreditNoteApproved3:false,CreditNoteReportAndExport:false,
    RetailCreditNoteRead:false,RetailCreditNoteWrite:false,RetailCreditNoteModify:false,RetailCreditNoteDelete:false,RetailCreditNoteApproved1:false,RetailCreditNoteApproved2:false,RetailCreditNoteApproved3:false,RetailCreditNoteReportAndExport:false,
    TermConditionMasterRead:false,TermConditionMasterWrite:false,TermConditionMasterModify:false,TermConditionMasterDelete:false,TermConditionMasterApproved1:false,TermConditionMasterApproved2:false,TermConditionMasterApproved3:false,TermConditionMasterReportAndExport:false,
    OutstandingReportRead:false,OutstandingReportWrite:false,OutstandingReportModify:false,OutstandingReportDelete:false,OutstandingReportApproved1:false,OutstandingReportApproved2:false,OutstandingReportApproved3:false,OutstandingReport_ReportAndExport:false,
    // QCANDQA
    QCTestingRead:false,QCTestingWrite:false,QCTestingModify:false,QCTestingDelete:false,
    QCSamplaningPlanRead:false,QCSamplaningPlanWrite:false,QCSamplaningPlanModify:false,QCSamplaningPlanDelete:false,
    QCIsoToleranceRead:false,QCIsoToleranceWrite:false,QCIsoToleranceModify:false,QCIsoToleranceDelete:false,
    VariantMasterRead:false,VariantMasterWrite:false,VariantMasterModify:false,VariantMasterDelete:false,
    RMCOARead:false,RMCOAWrite:false,RMCOAModify:false,RMCOADelete:false,
    RMVisualRead:false,RMVisualWrite:false,RMVisualModify:false,RMVisualDelete:false,
    FGCOARead:false,FGCOAWrite:false,FGCOAModify:false,FGCOADelete:false,
    FGVisualRead:false,FGVisualWrite:false,FGVisualModify:false,FGVisualDelete:false,
    INProcessRead:false,INProcessWrite:false,INProcessModify:false,INProcessDelete:false,
    ISODocumentRead:false,ISODocumentModify:false,
    MinutesOfMeetingRead:false,MinutesOfMeetingWrite:false,MinutesOfMeetingModify:false,MinutesOfMeetingDelete:false,
    QCItemRead:false,QCItemWrite:false,QCItemModify:false,QCItemDelete:false,
    PendingSOFOperatorRead:false,PendingSOFOperatorReportAndExport:false,
    PendingSalesOrderRead:false,PendingSalesOrderReportAndExport:false,
    DutyDrawbackReportRead:false,DutyDrawbackReport_ReportAndExport:false,
    TallyIntegrationRead:false,TallyIntegrationReportAndExport:false,
    TaxClassificationRead:false,TaxClassificationWrite:false,TaxClassificationModify:false,TaxClassificationDelete:false,
    ContractReportRead:false,ContractReport_ReportAndExport:false,
    ExpanceVoucherTypeRead:false,ExpanceVoucherTypeWrite:false,ExpanceVoucherTypeModify:false,ExpanceVoucherTypeDelete:false,
    ExpanceVoucherRead:false,ExpanceVoucherWrite:false,ExpanceVoucherModify:false,ExpanceVoucherDelete:false,
    ContactTypeRead:false,ContactTypeWrite:false,ContactTypeModify:false,ContactTypeDelete:false,
    QuotationTypeRead:false,QuotationTypeWrite:false,QuotationTypeModify:false,QuotationTypeDelete:false,
    DealStageRead:false,DealStageWrite:false,DealStageModify:false,DealStageDelete:false,
    TaskStatusRead:false,TaskStatusWrite:false,TaskStatusModify:false,TaskStatusDelete:false,
    ComplaintStatusRead:false,ComplaintStatusWrite:false,ComplaintStatusModify:false,ComplaintStatusDelete:false,
    CompanyTypeRead:false,CompanyTypeWrite:false,CompanyTypeModify:false,CompanyTypeDelete:false,
    InquiryRead:false,InquiryWrite:false,InquiryModify:false,InquiryDelete:false,
    DealRead:false,DealWrite:false,DealModify:false,DealDelete:false,
    TaskRead:false,TaskWrite:false,TaskModify:false,TaskDelete:false,
    QcCompanyRead:false,QcCompanyWrite:false,QcCompanyModify:false,QcCompanyDelete:false,
    ContactRead:false,ContactWrite:false,ContactModify:false,ContactDelete:false,
    ComplaintRead:false,ComplaintWrite:false,ComplaintModify:false,ComplaintDelete:false,
    CallTypeRead:false,CallTypeWrite:false,CallTypeModify:false,CallTypeDelete:false,
    EventTypeRead:false,EventTypeWrite:false,EventTypeModify:false,EventTypeDelete:false,
    QuotationRead:false,QuotationWrite:false,QuotationModify:false,QuotationDelete:false,
    RetailQuotationRead:false,RetailQuotationWrite:false,RetailQuotationModify:false,RetailQuotationDelete:false,
    ExportQuotationRead:false,ExportQuotationWrite:false,ExportQuotationModify:false,ExportQuotationDelete:false,
    PurchaseIndentRead:false,PurchaseIndentWrite:false,PurchaseIndentModify:false,PurchaseIndentDelete:false,
    PurchaseQuotationRead:false,PurchaseQuotationWrite:false,PurchaseQuotationModify:false,PurchaseQuotationDelete:false,
    // PhoneGroupRead:"",PhoneGroupWrite:"",PhoneGroupModify:"",PhoneGroupDelete:"",
    PhoneBookRead:false,PhoneBookWrite:false,PhoneBookModify:false,PhoneBookDelete:false,
    SendMessageRead:false,SendMessageWrite:false,SendMessageModify:false,SendMessageDelete:false,
    CommentRead:false,CommentWrite:false,CommentModify:false,CommentDelete:false,
    EventRead:false,EventWrite:false,EventModify:false,EventDelete:false,
    ContactGroupRead:false,ContactGroupWrite:false,ContactGroupModify:false,ContactGroupDelete:false,
    MessageRead:false,MessageWrite:false,MessageModify:false,MessageDelete:false,
    CallRead:false,CallWrite:false,CallModify:false,CallDelete:false,
    MeetingRead:false,MeetingWrite:false,MeetingModify:false,MeetingDelete:false,
    RemainderRead:false,RemainderWrite:false,RemainderModify:false,RemainderDelete:false,
    CustomerSatisficationRead:false,CustomerSatisficationWrite:false,CustomerSatisficationModify:false,CustomerSatisficationDelete:false,
    InvoiceSatisficationRead:false,InvoiceSatisficationWrite:false,InvoiceSatisficationModify:false,InvoiceSatisficationDelete:false,
    AttachmentCategoryRead:false,AttachmentCategoryWrite:false,AttachmentCategoryModify:false,AttachmentCategoryDelete:false,
    AttachmentRecordRead:false,AttachmentRecordWrite:false,AttachmentRecordModify:false,AttachmentRecordDelete:false,
    PreInquiryRead:false,PreInquiryWrite:false,PreInquiryModify:false,PreInquiryDelete:false,
    // HrAndPayroll
    EmployeeCategoryRead:false,EmployeeCategoryWrite:false,EmployeeCategoryModify:false,EmployeeCategoryDelete:false,
    DepartmentRead:false,DepartmentWrite:false,DepartmentModify:false,DepartmentDelete:false,
    PositionRead:false,PositionWrite:false,PositionModify:false,PositionDelete:false,
    HolidayRead:false,HolidayWrite:false,HolidayModify:false,HolidayDelete:false,
    LeaveTypeRead:false,LeaveTypeWrite:false,LeaveTypeModify:false,LeaveTypeDelete:false,
    LeaveRead:false,LeaveWrite:false,LeaveModify:false,LeaveDelete:false,
    ApplyLeaveRead:false,ApplyLeaveWrite:false,ApplyLeaveModify:false,ApplyLeaveDelete:false,
    LeaveApprovedRead:false,LeaveApprovedWrite:false,LeaveApprovedModify:false,LeaveApprovedDelete:false,
    LeaveMonthlyAddRead:false,LeaveMonthlyAddWrite:false,LeaveMonthlyAddModify:false,LeaveMonthlyAddDelete:false,
    LeaveMonthlyDeductRead:false,LeaveMonthlyDeductWrite:false,LeaveMonthlyDeductModify:false,LeaveMonthlyDeductDelete:false,
    ShiftRead:false,ShiftWrite:false,ShiftModify:false,ShiftDelete:false,
    EmployeeRead:false,EmployeeWrite:false,EmployeeModify:false,EmployeeDelete:false,
    AssignShiftRead:false,AssignShiftWrite:false,AssignShiftModify:false,AssignShiftDelete:false,
    AppraisalQuestionsRead:false,AppraisalQuestionsWrite:false,AppraisalQuestionsModify:false,AppraisalQuestionsDelete:false,
    IndicatorRead:false,IndicatorWrite:false,IndicatorModify:false,IndicatorDelete:false,
    RatingHeadRead:false,RatingHeadWrite:false,RatingHeadModify:false,RatingHeadDelete:false,
    RatingsRead:false,RatingsWrite:false,RatingsModify:false,RatingsDelete:false,
    IncrementRead:false,IncrementWrite:false,IncrementModify:false,IncrementDelete:false,
    MemoRead:false,MemoWrite:false,MemoModify:false,MemoDelete:false,
    PerformanceRead:false,PerformanceWrite:false,PerformanceModify:false,PerformanceDelete:false,
    AppriasalRead:false,AppriasalWrite:false,AppriasalModify:false,AppriasalDelete:false,
    DeviceRead:false,DeviceWrite:false,DeviceModify:false,DeviceDelete:false,
    DeviceConnectionRead:false,DeviceConnectionWrite:false,DeviceConnectionModify:false,DeviceConnectionDelete:false,
    OutdoreAttendaceRead:false,OutdoreAttendaceWrite:false,OutdoreAttendaceModify:false,OutdoreAttendaceDelete:false,
    SalaryFormulaRead:false,SalaryFormulaWrite:false,SalaryFormulaModify:false,SalaryFormulaDelete:false,
    SalaryCategoryRead:false,SalaryCategoryWrite:false,SalaryCategoryModify:false,SalaryCategoryDelete:false,
    SalaryIncrementRead:false,SalaryIncrementWrite:false,SalaryIncrementModify:false,SalaryIncrementDelete:false,
    AdvancePaymentRead:false,AdvancePaymentWrite:false,AdvancePaymentModify:false,AdvancePaymentDelete:false,
    AdvancePaySalaryRead:false,AdvancePaySalaryWrite:false,AdvancePaySalaryModify:false,AdvancePaySalaryDelete:false,
    GenerateSalaryRead:false,GenerateSalaryWrite:false,GenerateSalaryModify:false,GenerateSalaryDelete:false,
    PaySalaryRead:false,PaySalaryWrite:false,PaySalaryModify:false,PaySalaryDelete:false,
    HourlyAttendanceRead:false,HourlyAttendanceWrite:false,HourlyAttendanceModify:false,HourlyAttendanceDelete:false         
    
  })



  const navigate = useNavigate()

  const ChangeHandler =(e)=>{
    const name =e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
      setPermission((data) => ({ ...data,[name]:checked }))
   
  }
  const PermissonSubmitHandler = async(e)=>{
    // e.preventDefault();
    let payload ={
    CompanyRead:permission.CompanyRead,CompanyWrite:permission.CompanyWrite,CompanyModify:permission.CompanyModify,
    UserRead:permission.UserRead,UserWrite:permission.UserWrite,UserModify:permission.UserModify,UserDelete:permission.UserDelete,
    RoleRead:permission.RoleRead,RoleWrite:permission.RoleWrite,RoleModify:permission.RoleModify,RoleDelete:permission.RoleDelete,SendMailRead:permission.SendMailRead,SerialSettingRead:permission.SerialSettingRead,SerialSettingModify:permission.SerialSettingModify,
    ApprovalSettingRead:permission.ApprovalSettingRead,ApprovalSettingModify:permission.ApprovalSettingModify,
    CountryMasterRead:permission.CountryMasterRead,CountryMasterWrite:permission.CountryMasterWrite,CountryMasterModify:permission.CountryMasterModify,CountryMasterDelete:permission.CountryMasterDelete,
    StateMasterRead:permission.StateMasterRead,StateMasterWrite:permission.StateMasterWrite,StateMasterModify:permission.StateMasterModify,StateMasterDelete:permission.StateMasterDelete,
    BankMasterRead:permission.BankMasterRead,BankMasterWrite:permission.BankMasterWrite,BankMasterModify:permission.BankMasterModify,BankMasterDelete:permission.BankMasterDelete,MasterReportRead:permission.MasterReportRead,
    ManagementLogRead:permission.ManagementLogRead,ManagementLogWrite:permission.ManagementLogWrite,ManagementLogModify:permission.ManagementLogModify,ManagementLogDelete:permission.ManagementLogDelete,ManagementLogReportAndExport:permission.ManagementLogReportAndExport,
    ImportExcelRead:permission.ImportExcelRead,ImportExcelReportAndExport:permission.ImportExcelReportAndExport,FinancialYearRead:permission.FinancialYearRead,FinancialYearReportAndExport:permission.FinancialYearReportAndExport,
    MailHistoryRead:permission.MailHistoryRead,MailHistoryReportAndExport:permission.MailHistoryReportAndExport,
    // Inventry
    InventryGroupRead:permission.InventryGroupRead,InventryGroupWrite:permission.InventryGroupWrite,InventryGroupModify:permission.InventryGroupModify,InventryGroupDelete:permission.InventryGroupDelete,
    InventryCategoryMasterRead:permission.InventryCategoryMasterRead,InventryCategoryMasterWrite:permission.InventryCategoryMasterWrite,InventryCategoryMasterModify:permission.InventryCategoryMasterModify,InventryCategoryMasterDelete:permission.InventryCategoryMasterDelete,
    HsnMasterRead:permission.HsnMasterRead,HsnMasterWrite:permission.HsnMasterWrite,HsnMasterModify:permission.HsnMasterModify,HsnMasterDelete:permission.HsnMasterDelete,HsnMasterApproved1:permission.HsnMasterApproved1,HsnMasterApproved2:permission.HsnMasterApproved2,HsnMasterApproved3:permission.HsnMasterApproved3,
    UnitMasterRead:permission.UnitMasterRead,UnitMasterWrite:permission.UnitMasterWrite,UnitMasterModify:permission.UnitMasterModify,UnitMasterDelete:permission.UnitMasterDelete,
    ItemMasterRead:permission.ItemMasterRead,ItemMasterWrite:permission.ItemMasterWrite,ItemMasterModify:permission.ItemMasterModify,ItemMasterDelete:permission.ItemMasterDelete,ItemMasterApproved1:permission.ItemMasterApproved1,ItemMasterApproved2:permission.ItemMasterApproved2,ItemMasterApproved3:permission.ItemMasterApproved3,
    PriceListRead:permission.PriceListRead,PriceListWrite:permission.PriceListWrite,PriceListModify:permission.PriceListModify,PriceListDelete:permission.PriceListDelete,
    VendorRead:permission.VendorRead,VendorWrite:permission.VendorWrite,VendorModify:permission.VendorModify,VendorDelete:permission.VendorDelete,VendorApproved1:permission.VendorApproved1,VendorApproved2:permission.VendorApproved2,VendorApproved3:permission.VendorApproved3,
    VendorComplaintRead:permission.VendorComplaintRead,VendorComplaintWrite:permission.VendorComplaintWrite,VendorComplaintModify:permission.VendorComplaintModify,VendorComplaintDelete:permission.VendorComplaintDelete,
    GrnRead:permission.GrnRead,GrnWrite:permission.GrnWrite,GrnModify:permission.GrnModify,GrnDelete:permission.GrnDelete,GrnApproved1:permission.GrnApproved1,GrnApproved2:permission.GrnApproved2,GrnApproved3:permission.GrnApproved3,GrnReportAndExport:permission.GrnReportAndExport,
    ChallanRead:permission.ChallanRead,ChallanWrite:permission.ChallanWrite,ChallanModify:permission.ChallanModify,ChallanDelete:permission.ChallanDelete,ChallanApproved1:permission.ChallanApproved1,ChallanApproved2:permission.ChallanApproved2,ChallanApproved3:permission.ChallanApproved3,ChallanReportAndExport:permission.ChallanReportAndExport,
    GatePassReturnRead:permission.GatePassReturnRead,GatePassReturnWrite:permission.GatePassReturnWrite,GatePassReturnModify:permission.GatePassReturnModify,GatePassReturnDelete:permission.GatePassReturnDelete,GatePassReturnApproved1:permission.GatePassReturnApproved1,GatePassReturnApproved2:permission.GatePassReturnApproved2,GatePassReturnApproved3:permission.GatePassReturnApproved3,GatePassReturnReportAndExport:permission.GatePassReturnReportAndExport,
    MrsRead:permission.MrsRead,MrsWrite:permission.MrsWrite,MrsModify:permission.MrsModify,MrsDelete:permission.MrsDelete,MrsApproved1:permission.MrsApproved1,MrsApproved2:permission.MrsApproved2,MrsApproved3:permission.MrsApproved3,MrsReportAndExport:permission.MrsReportAndExport,
    MisRead:permission.MisRead,MisWrite:permission.MisWrite,MisModify:permission.MisModify,MisDelete:permission.MisDelete,MisApproved1:permission.MisApproved1,MisApproved2:permission.MisApproved2,MisApproved3:permission.MisApproved3,MisReportAndExport:permission.MisReportAndExport,
    MisReturnRead:permission.MisReturnRead,MisReturnWrite:permission.MisReturnWrite,MisReturnModify:permission.MisReturnModify,MisReturnDelete:permission.MisReturnDelete,MisReturnApproved1:permission.MisReturnApproved1,MisReturnApproved2:permission.MisReturnApproved2,MisReturnApproved3:permission.MisReturnApproved3,MisReturnReportAndExport:permission.MisReturnReportAndExport,
    GatePassRead:permission.GatePassRead,GatePassWrite:permission.GatePassWrite,GatePassModify:permission.GatePassModify,GatePassDelete:permission.GatePassDelete,GatePassApproved1:permission.GatePassApproved1,GatePassApproved2:permission.GatePassApproved2,GatePassApproved3:permission.GatePassApproved3,GatePassReportAndExport:permission.GatePassReportAndExport,
    DeliveryNoteRead:permission.DeliveryNoteRead,DeliveryNoteWrite:permission.DeliveryNoteWrite,DeliveryNoteModify:permission.DeliveryNoteModify,DeliveryNoteDelete:permission.DeliveryNoteDelete,DeliveryNoteApproved1:permission.DeliveryNoteApproved1,DeliveryNoteApproved2:permission.DeliveryNoteApproved2,DeliveryNoteApproved3:permission.DeliveryNoteApproved3,DeliveryNoteReportAndExport:permission.DeliveryNoteReportAndExport,
    StockAdjustmentRead:permission.StockAdjustmentRead,StockAdjustmentWrite:permission.StockAdjustmentWrite,StockAdjustmentModify:permission.StockAdjustmentModify,StockAdjustmentDelete:permission.StockAdjustmentDelete,
    VendorPoRead:permission.VendorPoRead,VendorPoWrite:permission.VendorPoWrite,VendorPoModify:permission.VendorPoModify,VendorPoDelete:permission.VendorPoDelete,
    VendorSurveyRead:permission.VendorSurveyRead,VendorSurveyWrite:permission.VendorSurveyWrite,VendorSurveyModify:permission.VendorSurveyModify,VendorSurveyDelete:permission.VendorSurveyDelete,
    VendorMasterRead:permission.VendorMasterRead,VendorMasterWrite:permission.VendorMasterWrite,VendorMasterModify:permission.VendorMasterModify,VendorMasterDelete:permission.VendorMasterDelete,
    VendorRecordRead:permission.VendorRecordRead,VendorRecordWrite:permission.VendorRecordWrite,VendorRecordModify:permission.VendorRecordModify,VendorRecordDelete:permission.VendorRecordDelete,
    InventryReportRead:permission.InventryReportRead,InventryReport_ReportAndExport:permission.InventryReport_ReportAndExport,
    PendingBillsRead:permission.PendingBillsRead,PendingBillsReportAndExport:permission.PendingBillsReportAndExport,
    StockAssignRead:permission.StockAssignRead,StockAssignReportAndExport:permission.StockAssignReportAndExport,
    LogisticHistoryRead:permission.LogisticHistoryRead,LogisticHistoryReportAndExport:permission.LogisticHistoryReportAndExport,
    FinishedGoodsRead:permission.FinishedGoodsRead,FinishedGoodsReportAndExport:permission.FinishedGoodsReportAndExport,
    ReturnRejectedRead:permission.ReturnRejectedRead,ReturnRejectedWrite:permission.ReturnRejectedWrite,ReturnRejectedModify:permission.ReturnRejectedModify,ReturnRejectedDelete:permission.ReturnRejectedDelete,ReturnRejectedReportAndExport:permission.ReturnRejectedReportAndExport,
    RejectedReportRead:permission.RejectedReportRead,RejectedReport_ReportAndExport:permission.RejectedReport_ReportAndExport,
    PackingMasterRead:permission.PackingMasterRead,PackingMasterWrite:permission.PackingMasterWrite,PackingMasterModify:permission.PackingMasterModify,PackingMasterDelete:permission.PackingMasterDelete,
    EuDeclarationRead:permission.EuDeclarationRead,EuDeclarationWrite:permission.EuDeclarationWrite,EuDeclarationModify:permission.EuDeclarationModify,EuDeclarationDelete:permission.EuDeclarationDelete,
    ContractReviewRead:permission.ContractReviewRead,ContractReviewWrite:permission.ContractReviewWrite,ContractReviewModify:permission.ContractReviewModify,ContractReviewDelete:permission.ContractReviewDelete,
    JobWorkBalanceRead:permission.JobWorkBalanceRead,JobWorkBalanceReportAndExport:permission.JobWorkBalanceReportAndExport,
    AddBOMMasterRead:permission.AddBOMMasterRead,AddBOMMasterWrite:permission.AddBOMMasterWrite,AddBOMMasterModify:permission.AddBOMMasterModify,AddBOMMasterDelete:permission.AddBOMMasterDelete,
    BatchSerialSettingRead:permission.BatchSerialSettingRead,BatchSerialSettingWrite:permission.BatchSerialSettingWrite,BatchSerialSettingModify:permission.BatchSerialSettingModify,BatchSerialSettingDelete:permission.BatchSerialSettingDelete,
    ServiceRequisitionRead:permission.ServiceRequisitionRead,ServiceRequisitionWrite:permission.ServiceRequisitionWrite,ServiceRequisitionModify:permission.ServiceRequisitionModify,ServiceRequisitionDelete:permission.ServiceRequisitionDelete,
    SpecificDetailsRead:permission.SpecificDetailsRead,SpecificDetailsWrite:permission.SpecificDetailsWrite,SpecificDetailsModify:permission.SpecificDetailsModify,SpecificDetailsDelete:permission.SpecificDetailsDelete,
    PhoneGroupRead:permission.PhoneGroupRead,PhoneGroupWrite:permission.PhoneGroupWrite,PhoneGroupModify:permission.PhoneGroupModify,PhoneGroupDelete:permission.PhoneGroupDelete,
  //Finance 
    FinanceGroupRead:permission.FinanceGroupRead,FinanceGroupWrite:permission.FinanceGroupWrite,FinanceGroupModify:permission.FinanceGroupModify,FinanceGroupDelete:permission.FinanceGroupDelete,
    LedgerRead:permission.LedgerRead,LedgerWrite:permission.LedgerWrite,LedgerModify:permission.LedgerModify,LedgerDelete:permission.LedgerDelete,LedgerApproved1:permission.LedgerApproved1,LedgerApproved2:permission.LedgerApproved2,LedgerApproved3:permission.LedgerApproved3,LedgerReportAndExport:permission.LedgerReportAndExport,
    RegisterSettingRead:permission.RegisterSettingRead,RegisterSettingReportAndExport:permission.RegisterSettingReportAndExport,
    PaymentMasterRead:permission.PaymentMasterRead,PaymentMasterWrite:permission.PaymentMasterWrite,PaymentMasterModify:permission.PaymentMasterModify,PaymentMasterDelete:permission.PaymentMasterDelete,
    ChequeBookMasterRead:permission.ChequeBookMasterRead,ChequeBookMasterWrite:permission.ChequeBookMasterWrite,ChequeBookMasterModify:permission.ChequeBookMasterModify,ChequeBookMasterDelete:permission.ChequeBookMasterDelete,
    ChequeMasterRead:permission.ChequeMasterRead,ChequeMasterWrite:permission.ChequeMasterWrite,ChequeMasterModify:permission.ChequeMasterModify,ChequeMasterDelete:permission.ChequeMasterDelete,ChequeStatementRead:permission.ChequeStatementRead,
    CurrencyRead:permission.CurrencyRead,CurrencyWrite:permission.CurrencyWrite,CurrencyModify:permission.CurrencyModify,CurrencyDelete:permission.CurrencyDelete,
    IECNoMasterRead:permission.IECNoMasterRead,IECNoMasterWrite:permission.IECNoMasterWrite,IECNoMasterModify:permission.IECNoMasterModify,IECNoMasterDelete:permission.IECNoMasterDelete,
    LUTNoMasterRead:permission.LUTNoMasterRead,LUTNoMasterWrite:permission.LUTNoMasterWrite,LUTNoMasterModify:permission.LUTNoMasterModify,LUTNoMasterDelete:permission.LUTNoMasterDelete,
    LCNoMasterRead:permission.LCNoMasterRead,LCNoMasterWrite:permission.LCNoMasterWrite,LCNoMasterModify:permission.LCNoMasterModify,LCNoMasterDelete:permission.LCNoMasterDelete,
    AdvanceAuthNoRead:permission.AdvanceAuthNoRead,AdvanceAuthNoWrite:permission.AdvanceAuthNoWrite,AdvanceAuthNoModify:permission.AdvanceAuthNoModify,AdvanceAuthNoDelete:permission.AdvanceAuthNoDelete,
    PurchaseOrderRead:permission.PurchaseOrderRead,PurchaseOrderWrite:permission.PurchaseOrderWrite,PurchaseOrderModify:permission.PurchaseOrderModify,PurchaseOrderDelete:permission.PurchaseOrderDelete,PurchaseOrderApproved1:permission.PurchaseOrderApproved1,PurchaseOrderApproved2:permission.PurchaseOrderApproved2,PurchaseOrderApproved3:permission.PurchaseOrderApproved3,PurchaseOrderReportAndExport:permission.PurchaseOrderReportAndExport,
    GradeMasterRead:permission.GradeMasterRead,GradeMasterWrite:permission.GradeMasterWrite,GradeMasterModify:permission.GradeMasterModify,GradeMasterDelete:permission.GradeMasterDelete,
    RetailPurchaseOrderRead:permission.RetailPurchaseOrderRead,RetailPurchaseOrderWrite:permission.RetailPurchaseOrderWrite,RetailPurchaseOrderModify:permission.RetailPurchaseOrderModify,RetailPurchaseOrderDelete:permission.RetailPurchaseOrderDelete,RetailPurchaseOrderApproved1:permission.RetailPurchaseOrderApproved1,RetailPurchaseOrderApproved2:permission.RetailPurchaseOrderApproved2,RetailPurchaseOrderApproved3:permission.RetailPurchaseOrderApproved3,RetailPurchaseOrderReportAndExport:permission.RetailPurchaseOrderReportAndExport,
    ImportOrderRead:permission.ImportOrderRead,ImportOrderWrite:permission.ImportOrderWrite,ImportOrderModify:permission.ImportOrderModify,ImportOrderDelete:permission.ImportOrderDelete,ImportOrderApproved1:permission.ImportOrderApproved1,ImportOrderApproved2:permission.ImportOrderApproved2,ImportOrderApproved3:permission.ImportOrderApproved3,ImportOrderReportAndExport:permission.ImportOrderReportAndExport,
    ImportRetailOrderRead:permission.ImportRetailOrderRead,ImportRetailOrderWrite:permission.ImportRetailOrderWrite,ImportRetailOrderModify:permission.ImportRetailOrderModify,ImportRetailOrderDelete:permission.ImportRetailOrderDelete,ImportRetailOrderApproved1:permission.ImportRetailOrderApproved1,ImportRetailOrderApproved2:permission.ImportRetailOrderApproved2,ImportRetailOrderApproved3:permission.ImportRetailOrderApproved3,ImportRetailOrderReportAndExport:permission.ImportRetailOrderReportAndExport,
    PurchaseRead:permission.PurchaseRead,PurchaseWrite:permission.PurchaseWrite,PurchaseModify:permission.PurchaseModify,PurchaseDelete:permission.PurchaseDelete,PurchaseApproved1:permission.PurchaseApproved1,PurchaseApproved2:permission.PurchaseApproved2,PurchaseApproved3:permission.PurchaseApproved3,PurchaseReportAndExport:permission.PurchaseReportAndExport,
    RetailPurchaseRead:permission.RetailPurchaseRead,RetailPurchaseWrite:permission.RetailPurchaseWrite,RetailPurchaseModify:permission.RetailPurchaseModify,RetailPurchaseDelete:permission.RetailPurchaseDelete,RetailPurchaseApproved1:permission.RetailPurchaseApproved1,RetailPurchaseApproved2:permission.RetailPurchaseApproved2,RetailPurchaseApproved3:permission.RetailPurchaseApproved3,RetailPurchaseReportAndExport:permission.RetailPurchaseReportAndExport,
    ImportInvoiceRead:permission.ImportInvoiceRead,ImportInvoiceWrite:permission.ImportInvoiceWrite,ImportInvoiceModify:permission.ImportInvoiceModify,ImportInvoiceDelete:permission.ImportInvoiceDelete,ImportInvoiceApproved1:permission.ImportInvoiceApproved1,ImportInvoiceApproved2:permission.ImportInvoiceApproved2,ImportInvoiceApproved3:permission.ImportInvoiceApproved3,ImportInvoiceReportAndExport:permission.ImportInvoiceReportAndExport,
    ImportRetailInvoiceRead:permission.ImportRetailInvoiceRead,ImportRetailInvoiceWrite:permission.ImportRetailInvoiceWrite,ImportRetailInvoiceModify:permission.ImportRetailInvoiceModify,ImportRetailInvoiceDelete:permission.ImportRetailInvoiceDelete,ImportRetailInvoiceApproved1:permission.ImportRetailInvoiceApproved1,ImportRetailInvoiceApproved2:permission.ImportRetailInvoiceApproved2,ImportRetailInvoiceApproved3:permission.ImportRetailInvoiceApproved3,ImportRetailInvoiceReportAndExport:permission.ImportRetailInvoiceReportAndExport,
    PurchaseReturnRead:permission.PurchaseReturnRead,PurchaseReturnWrite:permission.PurchaseReturnWrite,PurchaseReturnModify:permission.PurchaseReturnModify,PurchaseReturnDelete:permission.PurchaseReturnDelete,PurchaseReturnApproved1:permission.PurchaseReturnApproved1,PurchaseReturnApproved2:permission.PurchaseReturnApproved2,PurchaseReturnApproved3:permission.PurchaseReturnApproved3,PurchaseReturnReportAndExport:permission.PurchaseReturnReportAndExport,
    RetailPurchaseReturnRead:permission.RetailPurchaseReturnRead,RetailPurchaseReturnWrite:permission.RetailPurchaseReturnWrite,RetailPurchaseReturnModify:permission.RetailPurchaseReturnModify,RetailPurchaseReturnDelete:permission.RetailPurchaseReturnDelete,RetailPurchaseReturnApproved1:permission.RetailPurchaseReturnApproved1,RetailPurchaseReturnApproved2:permission.RetailPurchaseReturnApproved2,RetailPurchaseReturnApproved3:permission.RetailPurchaseReturnApproved3,RetailPurchaseReturnReportAndExport:permission.RetailPurchaseReturnReportAndExport,
    SalesOrderRead:permission.SalesOrderRead,SalesOrderWrite:permission.SalesOrderWrite,SalesOrderModify:permission.SalesOrderModify,SalesOrderDelete:permission.SalesOrderDelete,SalesOrderApproved1:permission.SalesOrderApproved1,SalesOrderApproved2:permission.SalesOrderApproved2,SalesOrderApproved3:permission.SalesOrderApproved3,SalesOrderReportAndExport:permission.SalesOrderReportAndExport,
    RetailSalesOrderRead:permission.RetailSalesOrderRead,RetailSalesOrderWrite:permission.RetailSalesOrderWrite,RetailSalesOrderModify:permission.RetailSalesOrderModify,RetailSalesOrderDelete:permission.RetailSalesOrderDelete,RetailSalesOrderApproved1:permission.RetailSalesOrderApproved1,RetailSalesOrderApproved2:permission.RetailSalesOrderApproved2,RetailSalesOrderApproved3:permission.RetailSalesOrderApproved3,RetailSalesOrderReportAndExport:permission.RetailSalesOrderReportAndExport,
    ExportOrderRead:permission.ExportOrderRead,ExportOrderWrite:permission.ExportOrderWrite,ExportOrderModify:permission.ExportOrderModify,ExportOrderDelete:permission.ExportOrderDelete,ExportOrderApproved1:permission.ExportOrderApproved1,ExportOrderApproved2:permission.ExportOrderApproved2,ExportOrderApproved3:permission.ExportOrderApproved3,ExportOrderReportAndExport:permission.ExportOrderReportAndExport,
    ExportRetailOrderRead:permission.ExportRetailOrderRead,ExportRetailOrderWrite:permission.ExportRetailOrderWrite,ExportRetailOrderModify:permission.ExportRetailOrderModify,ExportRetailOrderDelete:permission.ExportRetailOrderDelete,ExportRetailOrderApproved1:permission.ExportRetailOrderApproved1,ExportRetailOrderApproved2:permission.ExportRetailOrderApproved2,ExportRetailOrderApproved3:permission.ExportRetailOrderApproved3,ExportRetailOrderReportAndExport:permission.ExportRetailOrderReportAndExport,
    SalesRead:permission.SalesRead,SalesWrite:permission.SalesWrite,SalesModify:permission.SalesModify,SalesDelete:permission.SalesDelete,SalesApproved1:permission.SalesApproved1,SalesApproved2:permission.SalesApproved2,SalesApproved3:permission.SalesApproved3,SalesReportAndExport:permission.SalesReportAndExport,
    RetailSalesRead:permission.RetailSalesRead,RetailSalesWrite:permission.RetailSalesWrite,RetailSalesModify:permission.RetailSalesModify,RetailSalesDelete:permission.RetailSalesDelete,RetailSalesApproved1:permission.RetailSalesApproved1,RetailSalesApproved2:permission.RetailSalesApproved2,RetailSalesApproved3:permission.RetailSalesApproved3,RetailSalesReportAndExport:permission.RetailSalesReportAndExport,
    ExportInvoiceRead:permission.ExportInvoiceRead,ExportInvoiceWrite:permission.ExportInvoiceWrite,ExportInvoiceModify:permission.ExportInvoiceModify,ExportInvoiceDelete:permission.ExportInvoiceDelete,ExportInvoiceApproved1:permission.ExportInvoiceApproved1,ExportInvoiceApproved2:permission.ExportInvoiceApproved2,ExportInvoiceApproved3:permission.ExportInvoiceApproved3,ExportInvoiceReportAndExport:permission.ExportInvoiceReportAndExport,
    ExportRetailInvoiceRead:permission.ExportRetailInvoiceRead,ExportRetailInvoiceWrite:permission.ExportRetailInvoiceWrite,ExportRetailInvoiceModify:permission.ExportRetailInvoiceModify,ExportRetailInvoiceDelete:permission.ExportRetailInvoiceDelete,ExportRetailInvoiceApproved1:permission.ExportRetailInvoiceApproved1,ExportRetailInvoiceApproved2:permission.ExportRetailInvoiceApproved2,ExportRetailInvoiceApproved3:permission.ExportRetailInvoiceApproved3,ExportRetailInvoiceReportAndExport:permission.ExportRetailInvoiceReportAndExport,
    SalesReturnRead:permission.SalesReturnRead,SalesReturnWrite:permission.SalesReturnWrite,SalesReturnModify:permission.SalesReturnModify,SalesReturnDelete:permission.SalesReturnDelete,SalesReturnApproved1:permission.SalesReturnApproved1,SalesReturnApproved2:permission.SalesReturnApproved2,SalesReturnApproved3:permission.SalesReturnApproved3,SalesReturnReportAndExport:permission.SalesReturnReportAndExport,
    RetailSalesReturnRead:permission.RetailSalesReturnRead,RetailSalesReturnWrite:permission.RetailSalesReturnWrite,RetailSalesReturnModify:permission.RetailSalesReturnModify,RetailSalesReturnDelete:permission.RetailSalesReturnDelete,RetailSalesReturnApproved1:permission.RetailSalesReturnApproved1,RetailSalesReturnApproved2:permission.RetailSalesReturnApproved2,RetailSalesReturnApproved3:permission.RetailSalesReturnApproved3,RetailSalesReturnReportAndExport:permission.RetailSalesReturnReportAndExport,
    PaymentIssueRead:permission.PaymentIssueRead,PaymentIssueWrite:permission.PaymentIssueWrite,PaymentIssueModify:permission.PaymentIssueModify,PaymentIssueDelete:permission.PaymentIssueDelete,PaymentIssueApproved1:permission.PaymentIssueApproved1,PaymentIssueApproved2:permission.PaymentIssueApproved2,PaymentIssueApproved3:permission.PaymentIssueApproved3,PaymentIssueReportAndExport:permission.PaymentIssueReportAndExport,
    PaymentReceiptRead:permission.PaymentReceiptRead,PaymentReceiptWrite:permission.PaymentReceiptWrite,PaymentReceiptModify:permission.PaymentReceiptModify,PaymentReceiptDelete:permission.PaymentReceiptDelete,PaymentReceiptApproved1:permission.PaymentReceiptApproved1,PaymentReceiptApproved2:permission.PaymentReceiptApproved2,PaymentReceiptApproved3:permission.PaymentReceiptApproved3,PaymentReceiptReportAndExport:permission.PaymentReceiptReportAndExport,
    JournalEntryRead:permission.JournalEntryRead,JournalEntryWrite:permission.JournalEntryWrite,JournalEntryModify:permission.JournalEntryModify,JournalEntryDelete:permission.JournalEntryDelete,JournalEntryApproved1:permission.JournalEntryApproved1,JournalEntryApproved2:permission.JournalEntryApproved2,JournalEntryApproved3:permission.JournalEntryApproved3,JournalEntryReportAndExport:permission.JournalEntryReportAndExport,
    ContraVoucherRead:permission.ContraVoucherRead,ContraVoucherWrite:permission.ContraVoucherWrite,ContraVoucherModify:permission.ContraVoucherModify,ContraVoucherDelete:permission.ContraVoucherDelete,ContraVoucherApproved1:permission.ContraVoucherApproved1,ContraVoucherApproved2:permission.ContraVoucherApproved2,ContraVoucherApproved3:permission.ContraVoucherApproved3,ContraVoucherReportAndExport:permission.ContraVoucherReportAndExport,
    GainProfitLossRead:permission.GainProfitLossRead,GainProfitLossWrite:permission.GainProfitLossWrite,GainProfitLossModify:permission.GainProfitLossModify,GainProfitLossDelete:permission.GainProfitLossDelete,GainProfitLossApproved1:permission.GainProfitLossApproved1,GainProfitLossApproved2:permission.GainProfitLossApproved2,GainProfitLossApproved3:permission.GainProfitLossApproved3,GainProfitLossReportAndExport:permission.GainProfitLossReportAndExport,
    DebitNoteRead:permission.DebitNoteRead,DebitNoteWrite:permission.DebitNoteWrite,DebitNoteModify:permission.DebitNoteModify,DebitNoteDelete:permission.DebitNoteDelete,DebitNoteApproved1:permission.DebitNoteApproved1,DebitNoteApproved2:permission.DebitNoteApproved2,DebitNoteApproved3:permission.DebitNoteApproved3,DebitNoteReportAndExport:permission.DebitNoteReportAndExport,
    RetailDebitNoteRead:permission.RetailDebitNoteRead,RetailDebitNoteWrite:permission.RetailDebitNoteWrite,RetailDebitNoteModify:permission.RetailDebitNoteModify,RetailDebitNoteDelete:permission.RetailDebitNoteDelete,RetailDebitNoteApproved1:permission.RetailDebitNoteApproved1,RetailDebitNoteApproved2:permission.RetailDebitNoteApproved2,RetailDebitNoteApproved3:permission.RetailDebitNoteApproved3,RetailDebitNoteReportAndExport:permission.RetailDebitNoteReportAndExport,
    CreditNoteRead:permission.CreditNoteRead,CreditNoteWrite:permission.CreditNoteWrite,CreditNoteModify:permission.CreditNoteModify,CreditNoteDelete:permission.CreditNoteDelete,CreditNoteApproved1:permission.CreditNoteApproved1,CreditNoteApproved2:permission.CreditNoteApproved2,CreditNoteApproved3:permission.CreditNoteApproved3,CreditNoteReportAndExport:permission.CreditNoteReportAndExport,
    RetailCreditNoteRead:permission.RetailCreditNoteRead,RetailCreditNoteWrite:permission.RetailCreditNoteWrite,RetailCreditNoteModify:permission.RetailCreditNoteModify,RetailCreditNoteDelete:permission.RetailCreditNoteDelete,RetailCreditNoteApproved1:permission.RetailCreditNoteApproved1,RetailCreditNoteApproved2:permission.RetailCreditNoteApproved2,RetailCreditNoteApproved3:permission.RetailCreditNoteApproved3,RetailCreditNoteReportAndExport:permission.RetailCreditNoteReportAndExport,
    TermConditionMasterRead:permission.TermConditionMasterRead,TermConditionMasterWrite:permission.TermConditionMasterWrite,TermConditionMasterModify:permission.TermConditionMasterModify,TermConditionMasterDelete:permission.TermConditionMasterDelete,TermConditionMasterApproved1:permission.TermConditionMasterApproved1,TermConditionMasterApproved2:permission.TermConditionMasterApproved2,TermConditionMasterApproved3:permission.TermConditionMasterApproved3,TermConditionMasterReportAndExport:permission.TermConditionMasterReportAndExport,
    OutstandingReportRead:permission.OutstandingReportRead,OutstandingReportWrite:permission.OutstandingReportWrite,OutstandingReportModify:permission.OutstandingReportModify,OutstandingReportDelete:permission.OutstandingReportDelete,OutstandingReportApproved1:permission.OutstandingReportApproved1,OutstandingReportApproved2:permission.OutstandingReportApproved2,OutstandingReportApproved3:permission.OutstandingReportApproved3,OutstandingReport_ReportAndExport:permission.OutstandingReport_ReportAndExport,
    // QCANDQA
    QCTestingRead:permission.QCTestingRead,QCTestingWrite:permission.QCTestingWrite,QCTestingModify:permission.QCTestingModify,QCTestingDelete:permission.QCTestingDelete,
    QCSamplaningPlanRead:permission.QCSamplaningPlanRead,QCSamplaningPlanWrite:permission.QCSamplaningPlanWrite,QCSamplaningPlanModify:permission.QCSamplaningPlanModify,QCSamplaningPlanDelete:permission.QCSamplaningPlanDelete,
    QCIsoToleranceRead:permission.QCIsoToleranceRead,QCIsoToleranceWrite:permission.QCIsoToleranceWrite,QCIsoToleranceModify:permission.QCIsoToleranceModify,QCIsoToleranceDelete:permission.QCIsoToleranceDelete,
    VariantMasterRead:permission.VariantMasterRead,VariantMasterWrite:permission.VariantMasterWrite,VariantMasterModify:permission.VariantMasterModify,VariantMasterDelete:permission.VariantMasterDelete,
    RMCOARead:permission.RMCOARead,RMCOAWrite:permission.RMCOAWrite,RMCOAModify:permission.RMCOAModify,RMCOADelete:permission.RMCOADelete,
    RMVisualRead:permission.RMVisualRead,RMVisualWrite:permission.RMVisualWrite,RMVisualModify:permission.RMVisualModify,RMVisualDelete:permission.RMVisualDelete,
    FGCOARead:permission.FGCOARead,FGCOAWrite:permission.FGCOAWrite,FGCOAModify:permission.FGCOAModify,FGCOADelete:permission.FGCOADelete,
    FGVisualRead:permission.FGVisualRead,FGVisualWrite:permission.FGVisualWrite,FGVisualModify:permission.FGVisualModify,FGVisualDelete:permission.FGVisualDelete,
    INProcessRead:permission.INProcessRead,INProcessWrite:permission.INProcessWrite,INProcessModify:permission.INProcessModify,INProcessDelete:permission.INProcessDelete,
    ISODocumentRead:permission.ISODocumentRead,ISODocumentModify:permission.ISODocumentModify,
    MinutesOfMeetingRead:permission.MinutesOfMeetingRead,MinutesOfMeetingWrite:permission.MinutesOfMeetingWrite,MinutesOfMeetingModify:permission.MinutesOfMeetingModify,MinutesOfMeetingDelete:permission.MinutesOfMeetingDelete,
    QCItemRead:permission.QCItemRead,QCItemWrite:permission.QCItemWrite,QCItemModify:permission.QCItemModify,QCItemDelete:permission.QCItemDelete,
    PendingSOFOperatorRead:permission.PendingSOFOperatorRead,PendingSOFOperatorReportAndExport:permission.PendingSOFOperatorReportAndExport,
    PendingSalesOrderRead:permission.PendingSalesOrderRead,PendingSalesOrderReportAndExport:permission.PendingSalesOrderReportAndExport,
    DutyDrawbackReportRead:permission.DutyDrawbackReportRead,DutyDrawbackReport_ReportAndExport:permission.DutyDrawbackReport_ReportAndExport,
    TallyIntegrationRead:permission.TallyIntegrationRead,TallyIntegrationReportAndExport:permission.TallyIntegrationReportAndExport,
    TaxClassificationRead:permission.TaxClassificationRead,TaxClassificationWrite:permission.TaxClassificationWrite,TaxClassificationModify:permission.TaxClassificationModify,TaxClassificationDelete:permission.TaxClassificationDelete,
    ContractReportRead:permission.ContractReportRead,ContractReport_ReportAndExport:permission.ContractReport_ReportAndExport,
    ExpanceVoucherTypeRead:permission.ExpanceVoucherTypeRead,ExpanceVoucherTypeWrite:permission.ExpanceVoucherTypeWrite,ExpanceVoucherTypeModify:permission.ExpanceVoucherTypeModify,ExpanceVoucherTypeDelete:permission.ExpanceVoucherTypeDelete,
    ExpanceVoucherRead:permission.ExpanceVoucherRead,ExpanceVoucherWrite:permission.ExpanceVoucherWrite,ExpanceVoucherModify:permission.ExpanceVoucherModify,ExpanceVoucherDelete:permission.ExpanceVoucherDelete,
    ContactTypeRead:permission.ContactTypeRead,ContactTypeWrite:permission.ContactTypeWrite,ContactTypeModify:permission.ContactTypeModify,ContactTypeDelete:permission.ContactTypeDelete,
    QuotationTypeRead:permission.QuotationTypeRead,QuotationTypeWrite:permission.QuotationTypeWrite,QuotationTypeModify:permission.QuotationTypeModify,QuotationTypeDelete:permission.QuotationTypeDelete,
    DealStageRead:permission.DealStageRead,DealStageWrite:permission.DealStageWrite,DealStageModify:permission.DealStageModify,DealStageDelete:permission.DealStageDelete,
    TaskStatusRead:permission.TaskStatusRead,TaskStatusWrite:permission.TaskStatusWrite,TaskStatusModify:permission.TaskStatusModify,TaskStatusDelete:permission.TaskStatusDelete,
    ComplaintStatusRead:permission.ComplaintStatusRead,ComplaintStatusWrite:permission.ComplaintStatusWrite,ComplaintStatusModify:permission.ComplaintStatusModify,ComplaintStatusDelete:permission.ComplaintStatusDelete,
    CompanyTypeRead:permission.CompanyTypeRead,CompanyTypeWrite:permission.CompanyTypeWrite,CompanyTypeModify:permission.CompanyTypeModify,CompanyTypeDelete:permission.CompanyTypeDelete,
    InquiryRead:permission.InquiryRead,InquiryWrite:permission.InquiryWrite,InquiryModify:permission.InquiryModify,InquiryDelete:permission.InquiryDelete,
    DealRead:permission.DealRead,DealWrite:permission.DealWrite,DealModify:permission.DealModify,DealDelete:permission.DealDelete,
    TaskRead:permission.TaskRead,TaskWrite:permission.TaskWrite,TaskModify:permission.TaskModify,TaskDelete:permission.TaskDelete,
    QcCompanyRead:permission.QcCompanyRead,QcCompanyWrite:permission.QcCompanyWrite,QcCompanyModify:permission.QcCompanyModify,QcCompanyDelete:permission.QcCompanyDelete,
    ContactRead:permission.ContactRead,ContactWrite:permission.ContactWrite,ContactModify:permission.ContactModify,ContactDelete:permission.ContactDelete,
    ComplaintRead:permission.ComplaintRead,ComplaintWrite:permission.ComplaintWrite,ComplaintModify:permission.ComplaintModify,ComplaintDelete:permission.ComplaintDelete,
    CallTypeRead:permission.CallTypeRead,CallTypeWrite:permission.CallTypeWrite,CallTypeModify:permission.CallTypeModify,CallTypeDelete:permission.CallTypeDelete,
    EventTypeRead:permission.EventTypeRead,EventTypeWrite:permission.EventTypeWrite,EventTypeModify:permission.EventTypeModify,EventTypeDelete:permission.EventTypeDelete,
    QuotationRead:permission.QuotationRead,QuotationWrite:permission.QuotationWrite,QuotationModify:permission.QuotationModify,QuotationDelete:permission.QuotationDelete,
    RetailQuotationRead:permission.RetailQuotationRead,RetailQuotationWrite:permission.RetailQuotationWrite,RetailQuotationModify:permission.RetailQuotationModify,RetailQuotationDelete:permission.RetailQuotationDelete,
    ExportQuotationRead:permission.ExportQuotationRead,ExportQuotationWrite:permission.ExportQuotationWrite,ExportQuotationModify:permission.ExportQuotationModify,ExportQuotationDelete:permission.ExportQuotationDelete,
    PurchaseIndentRead:permission.PurchaseIndentRead,PurchaseIndentWrite:permission.PurchaseIndentWrite,PurchaseIndentModify:permission.PurchaseIndentModify,PurchaseIndentDelete:permission.PurchaseIndentDelete,
    PurchaseQuotationRead:permission.PurchaseQuotationRead,PurchaseQuotationWrite:permission.PurchaseQuotationWrite,PurchaseQuotationModify:permission.PurchaseQuotationModify,PurchaseQuotationDelete:permission.PurchaseQuotationDelete,
    PhoneBookRead:permission.PhoneBookRead,PhoneBookWrite:permission.PhoneBookWrite,PhoneBookModify:permission.PhoneBookModify,PhoneBookDelete:permission.PhoneBookDelete,
    SendMessageRead:permission.SendMessageRead,SendMessageWrite:permission.SendMessageWrite,SendMessageModify:permission.SendMessageModify,SendMessageDelete:permission.SendMessageDelete,
    CommentRead:permission.CommentRead,CommentWrite:permission.CommentWrite,CommentModify:permission.CommentModify,CommentDelete:permission.CommentDelete,
    EventRead:permission.EventRead,EventWrite:permission.EventWrite,EventModify:permission.EventModify,EventDelete:permission.EventDelete,
    ContactGroupRead:permission.ContactGroupRead,ContactGroupWrite:permission.ContactGroupWrite,ContactGroupModify:permission.ContactGroupModify,ContactGroupDelete:permission.ContactGroupDelete,
    MessageRead:permission.MessageRead,MessageWrite:permission.MessageWrite,MessageModify:permission.MessageModify,MessageDelete:permission.MessageDelete,
    CallRead:permission.CallRead,CallWrite:permission.CallWrite,CallModify:permission.CallModify,CallDelete:permission.CallDelete,
    MeetingRead:permission.MeetingRead,MeetingWrite:permission.MeetingWrite,MeetingModify:permission.MeetingModify,MeetingDelete:permission.MeetingDelete,
    RemainderRead:permission.RemainderRead,RemainderWrite:permission.RemainderWrite,RemainderModify:permission.RemainderModify,RemainderDelete:permission.RemainderDelete,
    CustomerSatisficationRead:permission.CustomerSatisficationRead,CustomerSatisficationWrite:permission.CustomerSatisficationWrite,CustomerSatisficationModify:permission.CustomerSatisficationModify,CustomerSatisficationDelete:permission.CustomerSatisficationDelete,
    InvoiceSatisficationRead:permission.InvoiceSatisficationRead,InvoiceSatisficationWrite:permission.InvoiceSatisficationWrite,InvoiceSatisficationModify:permission.InvoiceSatisficationModify,InvoiceSatisficationDelete:permission.InvoiceSatisficationDelete,
    AttachmentCategoryRead:permission.AttachmentCategoryRead,AttachmentCategoryWrite:permission.AttachmentCategoryWrite,AttachmentCategoryModify:permission.AttachmentCategoryModify,AttachmentCategoryDelete:permission.AttachmentCategoryDelete,
    AttachmentRecordRead:permission.AttachmentRecordRead,AttachmentRecordWrite:permission.AttachmentRecordWrite,AttachmentRecordModify:permission.AttachmentRecordModify,AttachmentRecordDelete:permission.AttachmentRecordDelete,
    PreInquiryRead:permission.PreInquiryRead,PreInquiryWrite:permission.PreInquiryWrite,PreInquiryModify:permission.PreInquiryModify,PreInquiryDelete:permission.PreInquiryDelete,
    // HrAndPayroll
    EmployeeCategoryRead:permission.EmployeeCategoryRead,EmployeeCategoryWrite:permission.EmployeeCategoryWrite,EmployeeCategoryModify:permission.EmployeeCategoryModify,EmployeeCategoryDelete:permission.EmployeeCategoryDelete,
    DepartmentRead:permission.DepartmentRead,DepartmentWrite:permission.DepartmentWrite,DepartmentModify:permission.DepartmentModify,DepartmentDelete:permission.DepartmentDelete,
    PositionRead:permission.PositionRead,PositionWrite:permission.PositionWrite,PositionModify:permission.PositionModify,PositionDelete:permission.PositionDelete,
    HolidayRead:permission.HolidayRead,HolidayWrite:permission.HolidayWrite,HolidayModify:permission.HolidayModify,HolidayDelete:permission.HolidayDelete,
    LeaveTypeRead:permission.LeaveTypeRead,LeaveTypeWrite:permission.LeaveTypeWrite,LeaveTypeModify:permission.LeaveTypeModify,LeaveTypeDelete:permission.LeaveTypeDelete,
    LeaveRead:permission.LeaveRead,LeaveWrite:permission.LeaveWrite,LeaveModify:permission.LeaveModify,LeaveDelete:permission.LeaveDelete,
    ApplyLeaveRead:permission.ApplyLeaveRead,ApplyLeaveWrite:permission.ApplyLeaveWrite,ApplyLeaveModify:permission.ApplyLeaveModify,ApplyLeaveDelete:permission.ApplyLeaveDelete,
    LeaveApprovedRead:permission.LeaveApprovedRead,LeaveApprovedWrite:permission.LeaveApprovedWrite,LeaveApprovedModify:permission.LeaveApprovedModify,LeaveApprovedDelete:permission.LeaveApprovedDelete,
    LeaveMonthlyAddRead:permission.LeaveMonthlyAddRead,LeaveMonthlyAddWrite:permission.LeaveMonthlyAddWrite,LeaveMonthlyAddModify:permission.LeaveMonthlyAddModify,LeaveMonthlyAddDelete:permission.LeaveMonthlyAddDelete,
    LeaveMonthlyDeductRead:permission.LeaveMonthlyDeductRead,LeaveMonthlyDeductWrite:permission.LeaveMonthlyDeductWrite,LeaveMonthlyDeductModify:permission.LeaveMonthlyDeductModify,LeaveMonthlyDeductDelete:permission.LeaveMonthlyDeductDelete,
    ShiftRead:permission.ShiftRead,ShiftWrite:permission.ShiftWrite,ShiftModify:permission.ShiftModify,ShiftDelete:permission.ShiftDelete,
    EmployeeRead:permission.EmployeeRead,EmployeeWrite:permission.EmployeeWrite,EmployeeModify:permission.EmployeeModify,EmployeeDelete:permission.EmployeeDelete,
    AssignShiftRead:permission.AssignShiftRead,AssignShiftWrite:permission.AssignShiftWrite,AssignShiftModify:permission.AssignShiftModify,AssignShiftDelete:permission.AssignShiftDelete,
    AppraisalQuestionsRead:permission.AppraisalQuestionsRead,AppraisalQuestionsWrite:permission.AppraisalQuestionsWrite,AppraisalQuestionsModify:permission.AppraisalQuestionsModify,AppraisalQuestionsDelete:permission.AppraisalQuestionsDelete,
    IndicatorRead:permission.IndicatorRead,IndicatorWrite:permission.IndicatorWrite,IndicatorModify:permission.IndicatorModify,IndicatorDelete:permission.IndicatorDelete,
    RatingHeadRead:permission.RatingHeadRead,RatingHeadWrite:permission.RatingHeadWrite,RatingHeadModify:permission.RatingHeadModify,RatingHeadDelete:permission.RatingHeadDelete,
    RatingsRead:permission.RatingsRead,RatingsWrite:permission.RatingsWrite,RatingsModify:permission.RatingsModify,RatingsDelete:permission.RatingsDelete,
    IncrementRead:permission.IncrementRead,IncrementWrite:permission.IncrementWrite,IncrementModify:permission.IncrementModify,IncrementDelete:permission.IncrementDelete,
    MemoRead:permission.MemoRead,MemoWrite:permission.MemoWrite,MemoModify:permission.MemoModify,MemoDelete:permission.MemoDelete,
    PerformanceRead:permission.PerformanceRead,PerformanceWrite:permission.PerformanceWrite,PerformanceModify:permission.PerformanceModify,PerformanceDelete:permission.PerformanceDelete,
    AppriasalRead:permission.AppriasalRead,AppriasalWrite:permission.AppriasalWrite,AppriasalModify:permission.AppriasalModify,AppriasalDelete:permission.AppriasalDelete,
    DeviceRead:permission.DeviceRead,DeviceWrite:permission.DeviceWrite,DeviceModify:permission.DeviceModify,DeviceDelete:permission.DeviceDelete,
    DeviceConnectionRead:permission.DeviceConnectionRead,DeviceConnectionWrite:permission.DeviceConnectionWrite,DeviceConnectionModify:permission.DeviceConnectionModify,DeviceConnectionDelete:permission.DeviceConnectionDelete,
    OutdoreAttendaceRead:permission.OutdoreAttendaceRead,OutdoreAttendaceWrite:permission.OutdoreAttendaceWrite,OutdoreAttendaceModify:permission.OutdoreAttendaceModify,OutdoreAttendaceDelete:permission.OutdoreAttendaceDelete,
    SalaryFormulaRead:permission.SalaryFormulaRead,SalaryFormulaWrite:permission.SalaryFormulaWrite,SalaryFormulaModify:permission.SalaryFormulaModify,SalaryFormulaDelete:permission.SalaryFormulaDelete,
    SalaryCategoryRead:permission.SalaryCategoryRead,SalaryCategoryWrite:permission.SalaryCategoryWrite,SalaryCategoryModify:permission.SalaryCategoryModify,SalaryCategoryDelete:permission.SalaryCategoryDelete,
    SalaryIncrementRead:permission.SalaryIncrementRead,SalaryIncrementWrite:permission.SalaryIncrementWrite,SalaryIncrementModify:permission.SalaryIncrementModify,SalaryIncrementDelete:permission.SalaryIncrementDelete,
    AdvancePaymentRead:permission.AdvancePaymentRead,AdvancePaymentWrite:permission.AdvancePaymentWrite,AdvancePaymentModify:permission.AdvancePaymentModify,AdvancePaymentDelete:permission.AdvancePaymentDelete,
    AdvancePaySalaryRead:permission.AdvancePaySalaryRead,AdvancePaySalaryWrite:permission.AdvancePaySalaryWrite,AdvancePaySalaryModify:permission.AdvancePaySalaryModify,AdvancePaySalaryDelete:permission.AdvancePaySalaryDelete,
    GenerateSalaryRead:permission.GenerateSalaryRead,GenerateSalaryWrite:permission.GenerateSalaryWrite,GenerateSalaryModify:permission.GenerateSalaryModify,GenerateSalaryDelete:permission.GenerateSalaryDelete,
    PaySalaryRead:permission.PaySalaryRead,PaySalaryWrite:permission.PaySalaryWrite,PaySalaryModify:permission.PaySalaryModify,PaySalaryDelete:permission.PaySalaryDelete,
    HourlyAttendanceRead:permission.HourlyAttendanceRead,HourlyAttendanceWrite:permission.HourlyAttendanceWrite,HourlyAttendanceModify:permission.HourlyAttendanceModify,HourlyAttendanceDelete:permission.HourlyAttendanceDelete   
    }

    const response = await axios.post(`${url}/api/permission/add`,payload);
    // console.log(response)
    if (response.data.success) {
      setPermission({
    // admin
    CompanyRead:false,CompanyWrite:false,CompanyModify:false,
    UserRead:false,UserWrite:false,UserModify:false,UserDelete:false,
    RoleRead:false,RoleWrite:false,RoleModify:false,RoleDelete:false,SendMailRead:false,SerialSettingRead:false,SerialSettingModify:false,
    ApprovalSettingRead:false,ApprovalSettingModify:false,
    CountryMasterRead:false,CountryMasterWrite:false,CountryMasterModify:false,CountryMasterDelete:false,
    StateMasterRead:false,StateMasterWrite:false,StateMasterModify:false,StateMasterDelete:false,
    BankMasterRead:false,BankMasterWrite:false,BankMasterModify:false,BankMasterDelete:false,MasterReportRead:false,
    ManagementLogRead:false,ManagementLogWrite:false,ManagementLogModify:false,ManagementLogDelete:false,ManagementLogReportAndExport:false,
    ImportExcelRead:false,ImportExcelReportAndExport:false,FinancialYearRead:false,FinancialYearReportAndExport:false,
    MailHistoryRead:false,MailHistoryReportAndExport:false,
    // inventry
    InventryGroupRead:false,InventryGroupWrite:false,InventryGroupModify:false,InventryGroupDelete:false,
    InventryCategoryMasterRead:false,InventryCategoryMasterWrite:false,InventryCategoryMasterModify:false,InventryCategoryMasterDelete:false,
    HsnMasterRead:false,HsnMasterWrite:false,HsnMasterModify:false,HsnMasterDelete:false,HsnMasterApproved1:false,HsnMasterApproved2:false,HsnMasterApproved3:false,
    UnitMasterRead:false,UnitMasterWrite:false,UnitMasterModify:false,UnitMasterDelete:false,
    ItemMasterRead:false,ItemMasterWrite:false,ItemMasterModify:false,ItemMasterDelete:false,ItemMasterApproved1:false,ItemMasterApproved2:false,ItemMasterApproved3:false,
    PriceListRead:false,PriceListWrite:false,PriceListModify:false,PriceListDelete:false,
    VendorRead:false,VendorWrite:false,VendorModify:false,VendorDelete:false,VendorApproved1:false,VendorApproved2:false,VendorApproved3:false,
    VendorComplaintRead:false,VendorComplaintWrite:false,VendorComplaintModify:false,VendorComplaintDelete:false,
    GrnRead:false,GrnWrite:false,GrnModify:false,GrnDelete:false,GrnApproved1:false,GrnApproved2:false,GrnApproved3:false,GrnReportAndExport:false,
    ChallanRead:false,ChallanWrite:false,ChallanModify:false,ChallanDelete:false,ChallanApproved1:false,ChallanApproved2:false,ChallanApproved3:false,ChallanReportAndExport:false,
    GatePassReturnRead:false,GatePassReturnWrite:false,GatePassReturnModify:false,GatePassReturnDelete:false,GatePassReturnApproved1:false,GatePassReturnApproved2:false,GatePassReturnApproved3:false,GatePassReturnReportAndExport:false,
    MrsRead:false,MrsWrite:false,MrsModify:false,MrsDelete:false,MrsApproved1:false,MrsApproved2:false,MrsApproved3:false,MrsReportAndExport:false,
    MisRead:false,MisWrite:false,MisModify:false,MisDelete:false,MisApproved1:false,MisApproved2:false,MisApproved3:false,MisReportAndExport:false,
    MisReturnRead:false,MisReturnWrite:false,MisReturnModify:false,MisReturnDelete:false,MisReturnApproved1:false,MisReturnApproved2:false,MisReturnApproved3:false,MisReturnReportAndExport:false,
    GatePassRead:false,GatePassWrite:false,GatePassModify:false,GatePassDelete:false,GatePassApproved1:false,GatePassApproved2:false,GatePassApproved3:false,GatePassReportAndExport:false,
    DeliveryNoteRead:false,DeliveryNoteWrite:false,DeliveryNoteModify:false,DeliveryNoteDelete:false,DeliveryNoteApproved1:false,DeliveryNoteApproved2:false,DeliveryNoteApproved3:false,DeliveryNoteReportAndExport:false,
    StockAdjustmentRead:false,StockAdjustmentWrite:false,StockAdjustmentModify:false,StockAdjustmentDelete:false,
    VendorPoRead:false,VendorPoWrite:false,VendorPoModify:false,VendorPoDelete:false,
    VendorSurveyRead:false,VendorSurveyWrite:false,VendorSurveyModify:false,VendorSurveyDelete:false,
    VendorMasterRead:false,VendorMasterWrite:false,VendorMasterModify:false,VendorMasterDelete:false,
    VendorRecordRead:false,VendorRecordWrite:false,VendorRecordModify:false,VendorRecordDelete:false,
    InventryReportRead:false,InventryReport_ReportAndExport:false,
    PendingBillsRead:false,PendingBillsReportAndExport:false,
    StockAssignRead:false,StockAssignReportAndExport:false,
    LogisticHistoryRead:false,LogisticHistoryReportAndExport:false,
    FinishedGoodsRead:false,FinishedGoodsReportAndExport:false,
    ReturnRejectedRead:false,ReturnRejectedWrite:false,ReturnRejectedModify:false,ReturnRejectedDelete:false,ReturnRejectedReportAndExport:false,
    RejectedReportRead:false,RejectedReport_ReportAndExport:false,
    PackingMasterRead:false,PackingMasterWrite:false,PackingMasterModify:false,PackingMasterDelete:false,
    EuDeclarationRead:false,EuDeclarationWrite:false,EuDeclarationModify:false,EuDeclarationDelete:false,
    ContractReviewRead:false,ContractReviewWrite:false,ContractReviewModify:false,ContractReviewDelete:false,
    JobWorkBalanceRead:false,JobWorkBalanceReportAndExport:false,
    AddBOMMasterRead:false,AddBOMMasterWrite:false,AddBOMMasterModify:false,AddBOMMasterDelete:false,
    BatchSerialSettingRead:false,BatchSerialSettingWrite:false,BatchSerialSettingModify:false,BatchSerialSettingDelete:false,
    ServiceRequisitionRead:false,ServiceRequisitionWrite:false,ServiceRequisitionModify:false,ServiceRequisitionDelete:false,
    SpecificDetailsRead:false,SpecificDetailsWrite:false,SpecificDetailsModify:false,SpecificDetailsDelete:false,
    PhoneGroupRead:false,PhoneGroupWrite:false,PhoneGroupModify:false,PhoneGroupDelete:false,
    // finance
    FinanceGroupRead:false,FinanceGroupWrite:false,FinanceGroupModify:false,FinanceGroupDelete:false,
    LedgerRead:false,LedgerWrite:false,LedgerModify:false,LedgerDelete:false,LedgerApproved1:false,LedgerApproved2:false,LedgerApproved3:false,LedgerReportAndExport:false,
    RegisterSettingRead:false,RegisterSettingReportAndExport:false,
    PaymentMasterRead:false,PaymentMasterWrite:false,PaymentMasterModify:false,PaymentMasterDelete:false,
    ChequeBookMasterRead:false,ChequeBookMasterWrite:false,ChequeBookMasterModify:false,ChequeBookMasterDelete:false,
    ChequeMasterRead:false,ChequeMasterWrite:false,ChequeMasterModify:false,ChequeMasterDelete:false,ChequeStatementRead:false,
    CurrencyRead:false,CurrencyWrite:false,CurrencyModify:false,CurrencyDelete:false,
    IECNoMasterRead:false,IECNoMasterWrite:false,IECNoMasterModify:false,IECNoMasterDelete:false,
    LUTNoMasterRead:false,LUTNoMasterWrite:false,LUTNoMasterModify:false,LUTNoMasterDelete:false,
    LCNoMasterRead:false,LCNoMasterWrite:false,LCNoMasterModify:false,LCNoMasterDelete:false,
    AdvanceAuthNoRead:false,AdvanceAuthNoWrite:false,AdvanceAuthNoModify:false,AdvanceAuthNoDelete:false,
    PurchaseOrderRead:false,PurchaseOrderWrite:false,PurchaseOrderModify:false,PurchaseOrderDelete:false,PurchaseOrderApproved1:false,PurchaseOrderApproved2:false,PurchaseOrderApproved3:false,PurchaseOrderReportAndExport:false,
    GradeMasterRead:false,GradeMasterWrite:false,GradeMasterModify:false,GradeMasterDelete:false,
    RetailPurchaseOrderRead:false,RetailPurchaseOrderWrite:false,RetailPurchaseOrderModify:false,RetailPurchaseOrderDelete:false,RetailPurchaseOrderApproved1:false,RetailPurchaseOrderApproved2:false,RetailPurchaseOrderApproved3:false,RetailPurchaseOrderReportAndExport:false,
    ImportOrderRead:false,ImportOrderWrite:false,ImportOrderModify:false,ImportOrderDelete:false,ImportOrderApproved1:false,ImportOrderApproved2:false,ImportOrderApproved3:false,ImportOrderReportAndExport:false,
    ImportRetailOrderRead:false,ImportRetailOrderWrite:false,ImportRetailOrderModify:false,ImportRetailOrderDelete:false,ImportRetailOrderApproved1:false,ImportRetailOrderApproved2:false,ImportRetailOrderApproved3:false,ImportRetailOrderReportAndExport:false,
    PurchaseRead:false,PurchaseWrite:false,PurchaseModify:false,PurchaseDelete:false,PurchaseApproved1:false,PurchaseApproved2:false,PurchaseApproved3:false,PurchaseReportAndExport:false,
    RetailPurchaseRead:false,RetailPurchaseWrite:false,RetailPurchaseModify:false,RetailPurchaseDelete:false,RetailPurchaseApproved1:false,RetailPurchaseApproved2:false,RetailPurchaseApproved3:false,RetailPurchaseReportAndExport:false,
    ImportInvoiceRead:false,ImportInvoiceWrite:false,ImportInvoiceModify:false,ImportInvoiceDelete:false,ImportInvoiceApproved1:false,ImportInvoiceApproved2:false,ImportInvoiceApproved3:false,ImportInvoiceReportAndExport:false,
    ImportRetailInvoiceRead:false,ImportRetailInvoiceWrite:false,ImportRetailInvoiceModify:false,ImportRetailInvoiceDelete:false,ImportRetailInvoiceApproved1:false,ImportRetailInvoiceApproved2:false,ImportRetailInvoiceApproved3:false,ImportRetailInvoiceReportAndExport:false,
    PurchaseReturnRead:false,PurchaseReturnWrite:false,PurchaseReturnModify:false,PurchaseReturnDelete:false,PurchaseReturnApproved1:false,PurchaseReturnApproved2:false,PurchaseReturnApproved3:false,PurchaseReturnReportAndExport:false,
    RetailPurchaseReturnRead:false,RetailPurchaseReturnWrite:false,RetailPurchaseReturnModify:false,RetailPurchaseReturnDelete:false,RetailPurchaseReturnApproved1:false,RetailPurchaseReturnApproved2:false,RetailPurchaseReturnApproved3:false,RetailPurchaseReturnReportAndExport:false,
    SalesOrderRead:false,SalesOrderWrite:false,SalesOrderModify:false,SalesOrderDelete:false,SalesOrderApproved1:false,SalesOrderApproved2:false,SalesOrderApproved3:false,SalesOrderReportAndExport:false,
    RetailSalesOrderRead:false,RetailSalesOrderWrite:false,RetailSalesOrderModify:false,RetailSalesOrderDelete:false,RetailSalesOrderApproved1:false,RetailSalesOrderApproved2:false,RetailSalesOrderApproved3:false,RetailSalesOrderReportAndExport:false,
    ExportOrderRead:false,ExportOrderWrite:false,ExportOrderModify:false,ExportOrderDelete:false,ExportOrderApproved1:false,ExportOrderApproved2:false,ExportOrderApproved3:false,ExportOrderReportAndExport:false,
    ExportRetailOrderRead:false,ExportRetailOrderWrite:false,ExportRetailOrderModify:false,ExportRetailOrderDelete:false,ExportRetailOrderApproved1:false,ExportRetailOrderApproved2:false,ExportRetailOrderApproved3:false,ExportRetailOrderReportAndExport:false,
    SalesRead:false,SalesWrite:false,SalesModify:false,SalesDelete:false,SalesApproved1:false,SalesApproved2:false,SalesApproved3:false,SalesReportAndExport:false,
    RetailSalesRead:false,RetailSalesWrite:false,RetailSalesModify:false,RetailSalesDelete:false,RetailSalesApproved1:false,RetailSalesApproved2:false,RetailSalesApproved3:false,RetailSalesReportAndExport:false,
    ExportInvoiceRead:false,ExportInvoiceWrite:false,ExportInvoiceModify:false,ExportInvoiceDelete:false,ExportInvoiceApproved1:false,ExportInvoiceApproved2:false,ExportInvoiceApproved3:false,ExportInvoiceReportAndExport:false,
    ExportRetailInvoiceRead:false,ExportRetailInvoiceWrite:false,ExportRetailInvoiceModify:false,ExportRetailInvoiceDelete:false,ExportRetailInvoiceApproved1:false,ExportRetailInvoiceApproved2:false,ExportRetailInvoiceApproved3:false,ExportRetailInvoiceReportAndExport:false,
    SalesReturnRead:false,SalesReturnWrite:false,SalesReturnModify:false,SalesReturnDelete:false,SalesReturnApproved1:false,SalesReturnApproved2:false,SalesReturnApproved3:false,SalesReturnReportAndExport:false,
    RetailSalesReturnRead:false,RetailSalesReturnWrite:false,RetailSalesReturnModify:false,RetailSalesReturnDelete:false,RetailSalesReturnApproved1:false,RetailSalesReturnApproved2:false,RetailSalesReturnApproved3:false,RetailSalesReturnReportAndExport:false,
    PaymentIssueRead:false,PaymentIssueWrite:false,PaymentIssueModify:false,PaymentIssueDelete:false,PaymentIssueApproved1:false,PaymentIssueApproved2:false,PaymentIssueApproved3:false,PaymentIssueReportAndExport:false,
    PaymentReceiptRead:false,PaymentReceiptWrite:false,PaymentReceiptModify:false,PaymentReceiptDelete:false,PaymentReceiptApproved1:false,PaymentReceiptApproved2:false,PaymentReceiptApproved3:false,PaymentReceiptReportAndExport:false,
    JournalEntryRead:false,JournalEntryWrite:false,JournalEntryModify:false,JournalEntryDelete:false,JournalEntryApproved1:false,JournalEntryApproved2:false,JournalEntryApproved3:false,JournalEntryReportAndExport:false,
    ContraVoucherRead:false,ContraVoucherWrite:false,ContraVoucherModify:false,ContraVoucherDelete:false,ContraVoucherApproved1:false,ContraVoucherApproved2:false,ContraVoucherApproved3:false,ContraVoucherReportAndExport:false,
    GainProfitLossRead:false,GainProfitLossWrite:false,GainProfitLossModify:false,GainProfitLossDelete:false,GainProfitLossApproved1:false,GainProfitLossApproved2:false,GainProfitLossApproved3:false,GainProfitLossReportAndExport:false,
    DebitNoteRead:false,DebitNoteWrite:false,DebitNoteModify:false,DebitNoteDelete:false,DebitNoteApproved1:false,DebitNoteApproved2:false,DebitNoteApproved3:false,DebitNoteReportAndExport:false,
    RetailDebitNoteRead:false,RetailDebitNoteWrite:false,RetailDebitNoteModify:false,RetailDebitNoteDelete:false,RetailDebitNoteApproved1:false,RetailDebitNoteApproved2:false,RetailDebitNoteApproved3:false,RetailDebitNoteReportAndExport:false,
    CreditNoteRead:false,CreditNoteWrite:false,CreditNoteModify:false,CreditNoteDelete:false,CreditNoteApproved1:false,CreditNoteApproved2:false,CreditNoteApproved3:false,CreditNoteReportAndExport:false,
    RetailCreditNoteRead:false,RetailCreditNoteWrite:false,RetailCreditNoteModify:false,RetailCreditNoteDelete:false,RetailCreditNoteApproved1:false,RetailCreditNoteApproved2:false,RetailCreditNoteApproved3:false,RetailCreditNoteReportAndExport:false,
    TermConditionMasterRead:false,TermConditionMasterWrite:false,TermConditionMasterModify:false,TermConditionMasterDelete:false,TermConditionMasterApproved1:false,TermConditionMasterApproved2:false,TermConditionMasterApproved3:false,TermConditionMasterReportAndExport:false,
    OutstandingReportRead:false,OutstandingReportWrite:false,OutstandingReportModify:false,OutstandingReportDelete:false,OutstandingReportApproved1:false,OutstandingReportApproved2:false,OutstandingReportApproved3:false,OutstandingReport_ReportAndExport:false,
    // QCANDQA
    QCTestingRead:false,QCTestingWrite:false,QCTestingModify:false,QCTestingDelete:false,
    QCSamplaningPlanRead:false,QCSamplaningPlanWrite:false,QCSamplaningPlanModify:false,QCSamplaningPlanDelete:false,
    QCIsoToleranceRead:false,QCIsoToleranceWrite:false,QCIsoToleranceModify:false,QCIsoToleranceDelete:false,
    VariantMasterRead:false,VariantMasterWrite:false,VariantMasterModify:false,VariantMasterDelete:false,
    RMCOARead:false,RMCOAWrite:false,RMCOAModify:false,RMCOADelete:false,
    RMVisualRead:false,RMVisualWrite:false,RMVisualModify:false,RMVisualDelete:false,
    FGCOARead:false,FGCOAWrite:false,FGCOAModify:false,FGCOADelete:false,
    FGVisualRead:false,FGVisualWrite:false,FGVisualModify:false,FGVisualDelete:false,
    INProcessRead:false,INProcessWrite:false,INProcessModify:false,INProcessDelete:false,
    ISODocumentRead:false,ISODocumentModify:false,
    MinutesOfMeetingRead:false,MinutesOfMeetingWrite:false,MinutesOfMeetingModify:false,MinutesOfMeetingDelete:false,
    QCItemRead:false,QCItemWrite:false,QCItemModify:false,QCItemDelete:false,
    PendingSOFOperatorRead:false,PendingSOFOperatorReportAndExport:false,
    PendingSalesOrderRead:false,PendingSalesOrderReportAndExport:false,
    DutyDrawbackReportRead:false,DutyDrawbackReport_ReportAndExport:false,
    TallyIntegrationRead:false,TallyIntegrationReportAndExport:false,
    TaxClassificationRead:false,TaxClassificationWrite:false,TaxClassificationModify:false,TaxClassificationDelete:false,
    ContractReportRead:false,ContractReport_ReportAndExport:false,
    ExpanceVoucherTypeRead:false,ExpanceVoucherTypeWrite:false,ExpanceVoucherTypeModify:false,ExpanceVoucherTypeDelete:false,
    ExpanceVoucherRead:false,ExpanceVoucherWrite:false,ExpanceVoucherModify:false,ExpanceVoucherDelete:false,
    ContactTypeRead:false,ContactTypeWrite:false,ContactTypeModify:false,ContactTypeDelete:false,
    QuotationTypeRead:false,QuotationTypeWrite:false,QuotationTypeModify:false,QuotationTypeDelete:false,
    DealStageRead:false,DealStageWrite:false,DealStageModify:false,DealStageDelete:false,
    TaskStatusRead:false,TaskStatusWrite:false,TaskStatusModify:false,TaskStatusDelete:false,
    ComplaintStatusRead:false,ComplaintStatusWrite:false,ComplaintStatusModify:false,ComplaintStatusDelete:false,
    CompanyTypeRead:false,CompanyTypeWrite:false,CompanyTypeModify:false,CompanyTypeDelete:false,
    InquiryRead:false,InquiryWrite:false,InquiryModify:false,InquiryDelete:false,
    DealRead:false,DealWrite:false,DealModify:false,DealDelete:false,
    TaskRead:false,TaskWrite:false,TaskModify:false,TaskDelete:false,
    QcCompanyRead:false,QcCompanyWrite:false,QcCompanyModify:false,QcCompanyDelete:false,
    ContactRead:false,ContactWrite:false,ContactModify:false,ContactDelete:false,
    ComplaintRead:false,ComplaintWrite:false,ComplaintModify:false,ComplaintDelete:false,
    CallTypeRead:false,CallTypeWrite:false,CallTypeModify:false,CallTypeDelete:false,
    EventTypeRead:false,EventTypeWrite:false,EventTypeModify:false,EventTypeDelete:false,
    QuotationRead:false,QuotationWrite:false,QuotationModify:false,QuotationDelete:false,
    RetailQuotationRead:false,RetailQuotationWrite:false,RetailQuotationModify:false,RetailQuotationDelete:false,
    ExportQuotationRead:false,ExportQuotationWrite:false,ExportQuotationModify:false,ExportQuotationDelete:false,
    PurchaseIndentRead:false,PurchaseIndentWrite:false,PurchaseIndentModify:false,PurchaseIndentDelete:false,
    PurchaseQuotationRead:false,PurchaseQuotationWrite:false,PurchaseQuotationModify:false,PurchaseQuotationDelete:false,
    // PhoneGroupRead:"",PhoneGroupWrite:"",PhoneGroupModify:"",PhoneGroupDelete:"",
    PhoneBookRead:false,PhoneBookWrite:false,PhoneBookModify:false,PhoneBookDelete:false,
    SendMessageRead:false,SendMessageWrite:false,SendMessageModify:false,SendMessageDelete:false,
    CommentRead:false,CommentWrite:false,CommentModify:false,CommentDelete:false,
    EventRead:false,EventWrite:false,EventModify:false,EventDelete:false,
    ContactGroupRead:false,ContactGroupWrite:false,ContactGroupModify:false,ContactGroupDelete:false,
    MessageRead:false,MessageWrite:false,MessageModify:false,MessageDelete:false,
    CallRead:false,CallWrite:false,CallModify:false,CallDelete:false,
    MeetingRead:false,MeetingWrite:false,MeetingModify:false,MeetingDelete:false,
    RemainderRead:false,RemainderWrite:false,RemainderModify:false,RemainderDelete:false,
    CustomerSatisficationRead:false,CustomerSatisficationWrite:false,CustomerSatisficationModify:false,CustomerSatisficationDelete:false,
    InvoiceSatisficationRead:false,InvoiceSatisficationWrite:false,InvoiceSatisficationModify:false,InvoiceSatisficationDelete:false,
    AttachmentCategoryRead:false,AttachmentCategoryWrite:false,AttachmentCategoryModify:false,AttachmentCategoryDelete:false,
    AttachmentRecordRead:false,AttachmentRecordWrite:false,AttachmentRecordModify:false,AttachmentRecordDelete:false,
    PreInquiryRead:false,PreInquiryWrite:false,PreInquiryModify:false,PreInquiryDelete:false,
    // HrAndPayroll
    EmployeeCategoryRead:false,EmployeeCategoryWrite:false,EmployeeCategoryModify:false,EmployeeCategoryDelete:false,
    DepartmentRead:false,DepartmentWrite:false,DepartmentModify:false,DepartmentDelete:false,
    PositionRead:false,PositionWrite:false,PositionModify:false,PositionDelete:false,
    HolidayRead:false,HolidayWrite:false,HolidayModify:false,HolidayDelete:false,
    LeaveTypeRead:false,LeaveTypeWrite:false,LeaveTypeModify:false,LeaveTypeDelete:false,
    LeaveRead:false,LeaveWrite:false,LeaveModify:false,LeaveDelete:false,
    ApplyLeaveRead:false,ApplyLeaveWrite:false,ApplyLeaveModify:false,ApplyLeaveDelete:false,
    LeaveApprovedRead:false,LeaveApprovedWrite:false,LeaveApprovedModify:false,LeaveApprovedDelete:false,
    LeaveMonthlyAddRead:false,LeaveMonthlyAddWrite:false,LeaveMonthlyAddModify:false,LeaveMonthlyAddDelete:false,
    LeaveMonthlyDeductRead:false,LeaveMonthlyDeductWrite:false,LeaveMonthlyDeductModify:false,LeaveMonthlyDeductDelete:false,
    ShiftRead:false,ShiftWrite:false,ShiftModify:false,ShiftDelete:false,
    EmployeeRead:false,EmployeeWrite:false,EmployeeModify:false,EmployeeDelete:false,
    AssignShiftRead:false,AssignShiftWrite:false,AssignShiftModify:false,AssignShiftDelete:false,
    AppraisalQuestionsRead:false,AppraisalQuestionsWrite:false,AppraisalQuestionsModify:false,AppraisalQuestionsDelete:false,
    IndicatorRead:false,IndicatorWrite:false,IndicatorModify:false,IndicatorDelete:false,
    RatingHeadRead:false,RatingHeadWrite:false,RatingHeadModify:false,RatingHeadDelete:false,
    RatingsRead:false,RatingsWrite:false,RatingsModify:false,RatingsDelete:false,
    IncrementRead:false,IncrementWrite:false,IncrementModify:false,IncrementDelete:false,
    MemoRead:false,MemoWrite:false,MemoModify:false,MemoDelete:false,
    PerformanceRead:false,PerformanceWrite:false,PerformanceModify:false,PerformanceDelete:false,
    AppriasalRead:false,AppriasalWrite:false,AppriasalModify:false,AppriasalDelete:false,
    DeviceRead:false,DeviceWrite:false,DeviceModify:false,DeviceDelete:false,
    DeviceConnectionRead:false,DeviceConnectionWrite:false,DeviceConnectionModify:false,DeviceConnectionDelete:false,
    OutdoreAttendaceRead:false,OutdoreAttendaceWrite:false,OutdoreAttendaceModify:false,OutdoreAttendaceDelete:false,
    SalaryFormulaRead:false,SalaryFormulaWrite:false,SalaryFormulaModify:false,SalaryFormulaDelete:false,
    SalaryCategoryRead:false,SalaryCategoryWrite:false,SalaryCategoryModify:false,SalaryCategoryDelete:false,
    SalaryIncrementRead:false,SalaryIncrementWrite:false,SalaryIncrementModify:false,SalaryIncrementDelete:false,
    AdvancePaymentRead:false,AdvancePaymentWrite:false,AdvancePaymentModify:false,AdvancePaymentDelete:false,
    AdvancePaySalaryRead:false,AdvancePaySalaryWrite:false,AdvancePaySalaryModify:false,AdvancePaySalaryDelete:false,
    GenerateSalaryRead:false,GenerateSalaryWrite:false,GenerateSalaryModify:false,GenerateSalaryDelete:false,
    PaySalaryRead:false,PaySalaryWrite:false,PaySalaryModify:false,PaySalaryDelete:false,
    HourlyAttendanceRead:false,HourlyAttendanceWrite:false,HourlyAttendanceModify:false,HourlyAttendanceDelete:false         
    
  });
    toast.success(response.data.message)
    // console.log(permission)
      
    } else {
      console.log("error");
      toast.error(response.data.message)
    }   
     RoleModel(false) 
  }

  

 

 

  

  
  return (
    <div className='container-fluid border border-secondary rounded-2 mt-3'>
       <div className="row">
          <div className='col-md-12 d-flex justify-content-between flex-wrap'>
            <div className=""><p className="fw-bold">Menu Name</p></div>
            <div className=" text-center"><p className="fw-bold">Read</p></div>
            <div className=" text-center "><p className="fw-bold">Write</p></div>
            <div className=" text-center "><p className="fw-bold">Modify</p></div>
            <div className=" text-center"><p className="fw-bold">Delete</p></div>
            <div className=" text-center"><p className="fw-bold">Approved-1</p></div>
            <div className=" text-center"><p className="fw-bold">Approved-2</p></div>
            <div className=" text-center"><p className="fw-bold">Approved-3</p></div>
            <div className="col-md-2"><p className="fw-bold">Report and Export</p></div>
          </div>
        </div>
          {/* Admin */}
          <div className="row">
          <h5 className="my-1">Admin</h5>
          <div className='row'>
            <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-2 '><p className="m-0 p-0">Company</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} 
              value={permission.CompanyRead} className="form-check-input p-2" name="CompanyRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.CompanyWrite} className="form-check-input p-2" name="CompanyWrite" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.CompanyModify} className="form-check-input p-2" name="CompanyModify" id="" /></div>
              <div className='col-md-7 ' ></div>
            </div>
            <div className='row mb-1 '>
              <div className='col-md-2'><p className="m-0 p-0">User</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.UserRead} className="form-check-input p-2" name="UserRead" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.UserWrite} className="form-check-input p-2" name="UserWrite" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.UserModify} className="form-check-input p-2" name="UserModify" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.UserDelete} className="form-check-input p-2" name="UserDelete" id="" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">Role</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.RoleRead} className="form-check-input p-2" name="RoleRead" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.RoleWrite} className="form-check-input p-2" name="RoleWrite" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.RoleModify} className="form-check-input p-2" name="RoleModify" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.RoleDelete} className="form-check-input p-2" name="RoleDelete" id="" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">Send Mail</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} value={permission.SendMailRead} className="form-check-input p-2" name="SendMailRead" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" id="" /></div>
              <div className='col-md-9'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">Serial Setting</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.SerialSettingRead} name="SerialSettingRead" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.SerialSettingModify} name="SerialSettingModify" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">ApprovalSetting</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.ApprovalSettingRead} name="ApprovalSettingRead" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.ApprovalSettingModify} name="ApprovalSettingModify" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">Country Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="CountryMasterRead"   value={permission.CountryMasterRead}  /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="CountryMasterWrite"  value={permission.CountryMasterWrite} /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="CountryMasterModify" value={permission.CountryMasterModify} /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="CountryMasterDelete" value={permission.CountryMasterDelete} /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">State Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2"onChange={ChangeHandler} value={permission.StateMasterRead} name="StateMasterRead"  /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2"onChange={ChangeHandler} value={permission.StateMasterWrite} name="StateMasterWrite"  /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2"onChange={ChangeHandler} value={permission.StateMasterModify} name="StateMasterModify"  /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2"onChange={ChangeHandler} value={permission.StateMasterDelete} name="StateMasterDelete"  /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Bank Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BankMasterRead} name="BankMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BankMasterWrite} name="BankMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BankMasterModify} name="BankMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BankMasterDelete} name="BankMasterDelete" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row '>
              <div className='col-md-2'><p className="m-0 p-0">Master Report</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MasterReportRead} name="MasterReportRead" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" /></div>
              <div className='col-md-1 text-center d-none'><input type="checkbox" className="form-check-input p-2" name="" /></div>
              <div className='col-md-9'></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">ManagementLog</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ManagementLogRead} name="ManagementLogRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ManagementLogWrite} name="ManagementLogWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ManagementLogModify}  name="ManagementLogModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ManagementLogDelete} name="ManagementLogDelete" /></div>
              <div className='col-md-6 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ManagementLogReportAndExport} name="ManagementLogReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Import Excel</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportExcelRead} name="ImportExcelRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end'>
              <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportExcelReportAndExport} name="ImportExcelReportAndExport" />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">FinancialYear</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.FinancialYearRead} name="FinancialYearRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 text-end'>
              <input type="checkbox" className="form-check-input p-2" onChange={ChangeHandler} value={permission.FinancialYearReportAndExport} name="FinancialYearReportAndExport" />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Mail History</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MailHistoryRead} name="MailHistoryRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" id="" /></div>
              <div className='col-md-6 text-end'>
              <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MailHistoryReportAndExport} name="MailHistoryReportAndExport" />
              </div>
            </div> 
            <div className="d-flex justify-content-end mt-3 d-none " onClick={PermissonSubmitHandler}>
              <button className="btn btn-primary px-3">Submit</button></div>
            </div>
          </div> 
          </div>

          {/* Inventry */}
          <div className="row mt-2">
          <h5 className=" my-1">Inventry</h5>
          <div className='row'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Inventry Group</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryGroupRead} name="InventryGroupRead" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryGroupWrite} name="InventryGroupWrite" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryGroupModify} name="InventryGroupModify" id="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryGroupDelete} name="InventryGroupDelete" id="" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">CategoryMaster</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryCategoryMasterRead} name="InventryCategoryMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryCategoryMasterWrite} name="InventryCategoryMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryCategoryMasterModify} name="InventryCategoryMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryCategoryMasterDelete} name="InventryCategoryMasterDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">HSN Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterRead} name="HsnMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterWrite} name="HsnMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterModify} name="HsnMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterDelete} name="HsnMasterDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterApproved1} name="HsnMasterApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterApproved2} name="HsnMasterApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HsnMasterApproved3} name="HsnMasterApproved3" /></div>
              <div className='col-md-3' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Unit Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.UnitMasterRead} name="UnitMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.UnitMasterWrite} name="UnitMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.UnitMasterModify} name="UnitMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.UnitMasterDelete} name="UnitMasterDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Item Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterRead} name="ItemMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterWrite} name="ItemMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterModify} name="ItemMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterDelete} name="ItemMasterDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterApproved1} name="ItemMasterApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterApproved2} name="ItemMasterApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ItemMasterApproved3} name="ItemMasterApproved3" /></div>
              <div className='col-md-3' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Price List</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PriceListRead} name="PriceListRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PriceListWrite} name="PriceListWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PriceListModify} name="PriceListModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PriceListDelete} name="PriceListDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Vendor</p></div>
              <div className='col-md-1 text-center '><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorRead}  name="VendorRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorWrite} name="VendorWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorModify} name="VendorModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorDelete} name="VendorDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorApproved1} name="VendorApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorApproved2} name="VendorApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  value={permission.VendorApproved3} name="VendorApproved3" /></div>
              <div className='col-md-3' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">VendorComplaint</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorComplaintRead} name="VendorComplaintRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorComplaintWrite} name="VendorComplaintWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorComplaintModify} name="VendorComplaintModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorComplaintDelete} name="VendorComplaintDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2 '><p className="m-0 p-0">GRN</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnRead} name="GrnRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnWrite} name="GrnWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnModify}  name="GrnModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnDelete} name="GrnDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnApproved1} name="GrnApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnApproved2} name="GrnApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnApproved3} name="GrnApproved3" /></div>
              <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GrnReportAndExport} name="GrnReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2 '><p className="m-0 p-0">Challan</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanRead} name="ChallanRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanWrite} name="ChallanWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanModify} name="ChallanModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanDelete} name="ChallanDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanApproved1} name="ChallanApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanApproved2} name="ChallanApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanApproved3} name="ChallanApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChallanReportAndExport} name="ChallanReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">GatePassReturn</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnRead} name="GatePassReturnRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnWrite} name="GatePassReturnWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnModify} name="GatePassReturnModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnDelete} name="GatePassReturnDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnApproved1} name="GatePassReturnApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnApproved2} name="GatePassReturnApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnApproved3} name="GatePassReturnApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReturnReportAndExport} name="GatePassReturnReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">MRS</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsRead} name="MrsRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsWrite} name="MrsWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsModify} name="MrsModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsDelete} name="MrsDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsApproved1} name="MrsApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsApproved2} name="MrsApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsApproved3} name="MrsApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MrsReportAndExport} name="MrsReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">MIS</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisRead}  name="MisRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisWrite}  name="MisWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisModify}  name="MisModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisDelete}  name="MisDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisApproved1}  name="MisApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisApproved2}  name="MisApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisApproved3} name="MisApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReportAndExport}  name="MisReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">MIS Return</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnRead} name="MisReturnRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnWrite} name="MisReturnWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnModify} name="MisReturnModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnDelete} name="MisReturnDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnApproved1} name="MisReturnApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnApproved2} name="MisReturnApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnApproved3} name="MisReturnApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MisReturnReportAndExport} name="MisReturnReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Gate Pass</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassRead} name="GatePassRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassWrite} name="GatePassWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassModify} name="GatePassModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassDelete} name="GatePassDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassApproved1} name="GatePassApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassApproved2} name="GatePassApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassApproved3} name="GatePassApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GatePassReportAndExport} name="GatePassReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'>  <p className="m-0 p-0">Delivery Note</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteRead} name="DeliveryNoteRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteWrite} name="DeliveryNoteWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteModify} name="DeliveryNoteModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteDelete} name="DeliveryNoteDelete" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteApproved1} name="DeliveryNoteApproved1" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteApproved2} name="DeliveryNoteApproved2" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteApproved3} name="DeliveryNoteApproved3" /></div>
              <div className='col-md-3 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeliveryNoteReportAndExport} name="DeliveryNoteReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">StockAdjustment</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAdjustmentRead} name="StockAdjustmentRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAdjustmentWrite} name="StockAdjustmentWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAdjustmentModify} name="StockAdjustmentModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAdjustmentDelete} name="StockAdjustmentDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Vendor Po</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorPoRead} name="VendorPoRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorPoWrite} name="VendorPoWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorPoModify} name="VendorPoModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorPoDelete} name="VendorPoDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Vendor Survey</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorSurveyRead} name="VendorSurveyRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorSurveyWrite} name="VendorSurveyWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorSurveyModify} name="VendorSurveyModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorSurveyDelete} name="VendorSurveyDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Vendor Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorMasterRead} name="VendorMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorMasterWrite} name="VendorMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorMasterModify} name="VendorMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorMasterDelete} name="VendorMasterDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Vendor Record</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorRecordRead} name="VendorRecordRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorRecordWrite} name="VendorRecordWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorRecordModify} name="VendorRecordModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VendorRecordDelete} name="VendorRecordDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Inventry Report</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryReportRead} name="InventryReportRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' ><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InventryReport_ReportAndExport} name="InventryReport_ReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Pending Bills </p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PendingBillsRead} name="PendingBillsRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PendingBillsReportAndExport} name="PendingBillsReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Stock Assign</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAssignRead} name="StockAssignRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.StockAssignReportAndExport} name="StockAssignReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Logistic History</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LogisticHistoryRead} name="LogisticHistoryRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LogisticHistoryReportAndExport} name="LogisticHistoryReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Finished Goods</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FinishedGoodsRead} name="FinishedGoodsRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FinishedGoodsReportAndExport} name="FinishedGoodsReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Return Rejected</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ReturnRejectedRead} name="ReturnRejectedRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ReturnRejectedWrite} name="ReturnRejectedWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ReturnRejectedModify} name="ReturnRejectedModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ReturnRejectedDelete} name="ReturnRejectedDelete" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ReturnRejectedReportAndExport} name="ReturnRejectedReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'>  <p className="m-0 p-0">Rejected Report</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RejectedReportRead} name="RejectedReportRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' >  <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RejectedReport_ReportAndExport} name="RejectedReport_ReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Packing Master</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PackingMasterRead} name="PackingMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PackingMasterWrite} name="PackingMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PackingMasterModify} name="PackingMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PackingMasterDelete} name="PackingMasterDelete" /></div>
              <div className='col-md-6'></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">EU Declaration</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EuDeclarationRead} name="EuDeclarationRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EuDeclarationWrite} name="EuDeclarationWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EuDeclarationModify} name="EuDeclarationModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EuDeclarationDelete} name="EuDeclarationDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">ContractReview</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContractReviewRead} name="ContractReviewRead"/></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContractReviewWrite} name="ContractReviewWrite"/></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContractReviewModify} name="ContractReviewModify"/></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContractReviewDelete} name="ContractReviewDelete"/></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">JobWorkBalance</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JobWorkBalanceRead} name="JobWorkBalanceRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name="" /></div>
              <div className='col-md-6 text-end' ><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JobWorkBalanceReportAndExport} name="JobWorkBalanceReportAndExport" /></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">AddBOMMaster</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AddBOMMasterRead} name="AddBOMMasterRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AddBOMMasterWrite} name="AddBOMMasterWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AddBOMMasterModify} name="AddBOMMasterModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AddBOMMasterDelete} name="AddBOMMasterDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">BatchSerialSetting</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BatchSerialSettingRead} name="BatchSerialSettingRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BatchSerialSettingWrite} name="BatchSerialSettingWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BatchSerialSettingModify} name="BatchSerialSettingModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.BatchSerialSettingDelete} name="BatchSerialSettingDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'>  <p className="m-0 p-0">ServiceRequisition</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ServiceRequisitionRead} name="ServiceRequisitionRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ServiceRequisitionWrite} name="ServiceRequisitionWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ServiceRequisitionModify} name="ServiceRequisitionModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ServiceRequisitionDelete} name="ServiceRequisitionDelete" /></div>
              <div className='col-md-6' ></div>
            </div>
            <div className='row'>
              <div className='col-md-2'><p className="m-0 p-0">Specific Details</p></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SpecificDetailsRead} name="SpecificDetailsRead" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SpecificDetailsWrite} name="SpecificDetailsWrite" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SpecificDetailsModify} name="SpecificDetailsModify" /></div>
              <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SpecificDetailsDelete} name="SpecificDetailsDelete" /></div>
              <div className='col-md-6' ></div>
            </div>  
              <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Phone Group</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneGroupRead}  name="PhoneGroupRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneGroupWrite}  name="PhoneGroupWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneGroupModify}  name="PhoneGroupModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneGroupDelete}  name="PhoneGroupDelete" /></div>
              </div>            
            </div>                       
          </div>
          </div>

          {/* finance */}
          <div className='row'>
            <h5 className=" my-1">Finance</h5>
            <div className='row'>
                <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Finance Group</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FinanceGroupRead} name="FinanceGroupRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FinanceGroupWrite} name="FinanceGroupWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FinanceGroupModify} name="FinanceGroupModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FinanceGroupDelete} name="FinanceGroupDelete" /></div>
                  <div className='col-md-6' ></div>
                 </div>
               <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Ledger</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LedgerRead}  name="LedgerRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LedgerWrite}  name="LedgerWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LedgerModify}  name="LedgerModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LedgerDelete}  name="LedgerDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LedgerApproved1}  name="LedgerApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LedgerApproved2}  name="LedgerApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LedgerApproved3}  name="LedgerApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LedgerReportAndExport}  name="LedgerReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Register Setting</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RegisterSettingRead}   name="RegisterSettingRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RegisterSettingReportAndExport}  name="RegisterSettingReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">PaymentMaster</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentMasterRead} name="PaymentMasterRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentMasterWrite} name="PaymentMasterWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentMasterModify} name="PaymentMasterModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentMasterDelete} name="PaymentMasterDelete" /></div>
                  <div className='col-md-6' ></div>
                 </div>
                 <div className='row'>
                    <div className='col-md-2'><p className="m-0 p-0">ChequeBookMaster</p></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChequeBookMasterRead} name="ChequeBookMasterRead" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChequeBookMasterWrite} name="ChequeBookMasterWrite" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChequeBookMasterModify} name="ChequeBookMasterModify" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChequeBookMasterDelete} name="ChequeBookMasterDelete" /></div>
                    <div className='col-md-6' ></div>
                 </div>
                <div className='row'>
                    <div className='col-md-2'><p className="m-0 p-0">Cheque Master</p></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChequeMasterRead} name="ChequeMasterRead" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChequeMasterWrite} name="ChequeMasterWrite" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChequeMasterModify} name="ChequeMasterModify" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChequeMasterDelete} name="ChequeMasterDelete" /></div>
                    <div className='col-md-6' ></div>
                 </div>
                 <div className='row'>
                    <div className='col-md-2 '><p className="m-0 p-0">ChequeStatement</p></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ChequeStatementRead}  name="ChequeStatementRead" /></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><p className="m-0 p-0">Currency</p></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CurrencyRead} name="CurrencyRead" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CurrencyWrite} name="CurrencyWrite" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CurrencyModify} name="CurrencyModify" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CurrencyDelete} name="CurrencyDelete" /></div>
                    <div className='col-md-6' ></div>
                 </div>
                 <div className='row'>
                    <div className='col-md-2'><p className="m-0 p-0">IEC No Master</p></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IECNoMasterRead} name="IECNoMasterRead" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IECNoMasterWrite} name="IECNoMasterWrite" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IECNoMasterModify} name="IECNoMasterModify" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IECNoMasterDelete} name="IECNoMasterDelete" /></div>
                    <div className='col-md-6' ></div>
                 </div>
                 <div className='row'>
                    <div className='col-md-2'><p className="m-0 p-0">LUT No Master</p></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LUTNoMasterRead} name="LUTNoMasterRead" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LUTNoMasterWrite} name="LUTNoMasterWrite" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LUTNoMasterModify} name="LUTNoMasterModify" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LUTNoMasterDelete} name="LUTNoMasterDelete" /></div>
                    <div className='col-md-6' ></div>
                 </div>
                 <div className='row'>
                    <div className='col-md-2'><p className="m-0 p-0">LC No Master</p></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LCNoMasterRead} name="LCNoMasterRead" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LCNoMasterWrite} name="LCNoMasterWrite" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LCNoMasterModify} name="LCNoMasterModify" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LCNoMasterDelete} name="LCNoMasterDelete" /></div>
                    <div className='col-md-6' ></div>
                 </div>
                 <div className='row'>
                    <div className='col-md-2'><p className="m-0 p-0">AdvanceAuthNo</p></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvanceAuthNoRead} name="AdvanceAuthNoRead" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvanceAuthNoWrite} name="AdvanceAuthNoWrite" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvanceAuthNoModify} name="AdvanceAuthNoModify" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvanceAuthNoDelete} name="AdvanceAuthNoDelete" /></div>
                    <div className='col-md-6' ></div>
                 </div>
                 <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Purchase Order</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseOrderRead}  name="PurchaseOrderRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseOrderWrite}  name="PurchaseOrderWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseOrderModify}  name="PurchaseOrderModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseOrderDelete}  name="PurchaseOrderDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseOrderApproved1}  name="PurchaseOrderApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseOrderApproved2}  name="PurchaseOrderApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseOrderApproved3}  name="PurchaseOrderApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseOrderReportAndExport}  name="PurchaseOrderReportAndExport" /></div>
                </div>
                <div className='row'>
                    <div className='col-md-2'><p className="m-0 p-0">Grade Master</p></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="GradeMasterRead" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="GradeMasterWrite" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="GradeMasterModify" /></div>
                    <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" name="GradeMasterDelete" /></div>
                    <div className='col-md-6' ></div>
                 </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">RetailPurchaseOrder</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseOrderRead}  name="RetailPurchaseOrderRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseOrderWrite}  name="RetailPurchaseOrderWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseOrderModify}  name="RetailPurchaseOrderModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseOrderDelete}  name="RetailPurchaseOrderDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseOrderApproved1}  name="RetailPurchaseOrderApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseOrderApproved2}  name="RetailPurchaseOrderApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseOrderApproved3}  name="RetailPurchaseOrderApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseOrderReportAndExport}  name="RetailPurchaseOrderReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Import Order</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportOrderRead}  name="ImportOrderRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportOrderWrite}  name="ImportOrderWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportOrderModify}  name="ImportOrderModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportOrderDelete}  name="ImportOrderDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportOrderApproved1}  name="ImportOrderApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportOrderApproved2}  name="ImportOrderApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportOrderApproved3} name="ImportOrderApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportOrderReportAndExport} name="ImportOrderReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">ImportRetailOrder</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailOrderRead}  name="ImportRetailOrderRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailOrderWrite}  name="ImportRetailOrderWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailOrderModify}  name="ImportRetailOrderModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailOrderDelete}  name="ImportRetailOrderDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailOrderApproved1}  name="ImportRetailOrderApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailOrderApproved2}  name="ImportRetailOrderApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailOrderApproved3}  name="ImportRetailOrderApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailOrderReportAndExport}  name="ImportRetailOrderReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Purchase</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseRead}  name="PurchaseRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseWrite}  name="PurchaseWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseModify}  name="PurchaseModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseDelete}  name="PurchaseDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseApproved1}  name="PurchaseApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseApproved2}  name="PurchaseApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseApproved3}  name="PurchaseApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseReportAndExport} name="PurchaseReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Retail Purchase</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseRead} name="RetailPurchaseRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseWrite} name="RetailPurchaseWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseModify} name="RetailPurchaseModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseDelete} name="RetailPurchaseDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseApproved1} name="RetailPurchaseApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseApproved2} name="RetailPurchaseApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseApproved3} name="RetailPurchaseApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseReportAndExport}  name="RetailPurchaseReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Import Invoice</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportInvoiceRead}  name="ImportInvoiceRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportInvoiceWrite}  name="ImportInvoiceWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportInvoiceModify}  name="ImportInvoiceModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportInvoiceDelete} name="ImportInvoiceDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportInvoiceApproved1}  name="ImportInvoiceApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportInvoiceApproved2}  name="ImportInvoiceApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportInvoiceApproved3}  name="ImportInvoiceApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportInvoiceReportAndExport}  name="ImportInvoiceReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">ImportRetailInvoice</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailInvoiceRead}  name="ImportRetailInvoiceRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailInvoiceWrite}  name="ImportRetailInvoiceWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailInvoiceModify}  name="ImportRetailInvoiceModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailInvoiceDelete}  name="ImportRetailInvoiceDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailInvoiceApproved1}  name="ImportRetailInvoiceApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailInvoiceApproved2}  name="ImportRetailInvoiceApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailInvoiceApproved3}  name="ImportRetailInvoiceApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ImportRetailInvoiceReportAndExport}  name="ImportRetailInvoiceReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Purchase Return</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseReturnRead}  name="PurchaseReturnRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseReturnWrite}  name="PurchaseReturnWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseReturnModify}  name="PurchaseReturnModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseReturnDelete}  name="PurchaseReturnDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseReturnApproved1} name="PurchaseReturnApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseReturnApproved2} name="PurchaseReturnApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseReturnApproved3}  name="PurchaseReturnApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseReturnReportAndExport} name="PurchaseReturnReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">RetailPurchaseReturn</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseReturnRead}  name="RetailPurchaseReturnRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseReturnWrite}  name="RetailPurchaseReturnWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseReturnModify}  name="RetailPurchaseReturnModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseReturnDelete}  name="RetailPurchaseReturnDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseReturnApproved1}  name="RetailPurchaseReturnApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseReturnApproved2}  name="RetailPurchaseReturnApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseReturnApproved3}  name="RetailPurchaseReturnApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailPurchaseReturnReportAndExport}  name="RetailPurchaseReturnReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Sales Order</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesOrderRead}  name="SalesOrderRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesOrderWrite}  name="SalesOrderWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesOrderModify}  name="SalesOrderModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesOrderDelete} name="SalesOrderDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesOrderApproved1} name="SalesOrderApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesOrderApproved2}  name="SalesOrderApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesOrderApproved3}  name="SalesOrderApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesOrderReportAndExport}  name="SalesOrderReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">RetailSalesOrder</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesOrderRead}  name="RetailSalesOrderRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesOrderWrite}  name="RetailSalesOrderWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesOrderModify}  name="RetailSalesOrderModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesOrderDelete}  name="RetailSalesOrderDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesOrderApproved1}  name="RetailSalesOrderApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesOrderApproved2}  name="RetailSalesOrderApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesOrderApproved3}  name="RetailSalesOrderApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesOrderReportAndExport}  name="RetailSalesOrderReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Export Order</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportOrderRead}  name="ExportOrderRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportOrderWrite}  name="ExportOrderWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportOrderModify}  name="ExportOrderModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportOrderDelete}  name="ExportOrderDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportOrderApproved1}  name="ExportOrderApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportOrderApproved2}  name="ExportOrderApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportOrderApproved3}  name="ExportOrderApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportOrderReportAndExport}  name="ExportOrderReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">ExportRetailOrder</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailOrderRead}  name="ExportRetailOrderRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailOrderWrite}  name="ExportRetailOrderWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailOrderModify}  name="ExportRetailOrderModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailOrderDelete}  name="ExportRetailOrderDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailOrderApproved1}  name="ExportRetailOrderApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailOrderApproved2}  name="ExportRetailOrderApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailOrderApproved3}  name="ExportRetailOrderApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailOrderReportAndExport}  name="ExportRetailOrderReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Sales</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesRead}  name="SalesRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesWrite}  name="SalesWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesModify}  name="SalesModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesDelete} name="SalesDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesApproved1} name="SalesApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesApproved2}  name="SalesApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesApproved3}  name="SalesApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesReportAndExport}  name="SalesReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Retail Sales</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesRead}  name="RetailSalesRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesWrite}  name="RetailSalesWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesModify}  name="RetailSalesModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesDelete}  name="RetailSalesDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesApproved1}  name="RetailSalesApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesApproved2}  name="RetailSalesApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesApproved3}  name="RetailSalesApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesReportAndExport}  name="RetailSalesReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Export Invoice</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportInvoiceRead}  name="ExportInvoiceRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportInvoiceWrite}  name="ExportInvoiceWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportInvoiceModify}  name="ExportInvoiceModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportInvoiceDelete}  name="ExportInvoiceDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportInvoiceApproved1}  name="ExportInvoiceApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportInvoiceApproved2} name="ExportInvoiceApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportInvoiceApproved3}  name="ExportInvoiceApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportInvoiceReportAndExport}  name="ExportInvoiceReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">ExportRetailInvoice</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailInvoiceRead}  name="ExportRetailInvoiceRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailInvoiceWrite}  name="ExportRetailInvoiceWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailInvoiceModify}  name="ExportRetailInvoiceModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailInvoiceDelete}  name="ExportRetailInvoiceDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailInvoiceApproved1} name="ExportRetailInvoiceApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailInvoiceApproved2}  name="ExportRetailInvoiceApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailInvoiceApproved3}  name="ExportRetailInvoiceApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportRetailInvoiceReportAndExport}  name="ExportRetailInvoiceReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Sales Return</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesReturnRead}  name="SalesReturnRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesReturnWrite}  name="SalesReturnWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesReturnModify}  name="SalesReturnModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesReturnDelete}  name="SalesReturnDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesReturnApproved1}  name="SalesReturnApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesReturnApproved2}  name="SalesReturnApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesReturnApproved3}  name="SalesReturnApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalesReturnReportAndExport}  name="SalesReturnReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">RetailSalesReturn</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesReturnRead}  name="RetailSalesReturnRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesReturnWrite}  name="RetailSalesReturnWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesReturnModify}  name="RetailSalesReturnModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesReturnDelete}  name="RetailSalesReturnDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesReturnApproved1}  name="RetailSalesReturnApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesReturnApproved2}  name="RetailSalesReturnApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesReturnApproved3}  name="RetailSalesReturnApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailSalesReturnReportAndExport}  name="RetailSalesReturnReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Payment Issue</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentIssueRead}  name="PaymentIssueRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentIssueWrite}  name="PaymentIssueWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentIssueModify}  name="PaymentIssueModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentIssueDelete}  name="PaymentIssueDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentIssueApproved1}  name="PaymentIssueApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentIssueApproved2}  name="PaymentIssueApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentIssueApproved3}  name="PaymentIssueApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentIssueReportAndExport}  name="PaymentIssueReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">PaymentReceipt</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentReceiptRead}  name="PaymentReceiptRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentReceiptWrite}  name="PaymentReceiptWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentReceiptModify}  name="PaymentReceiptModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentReceiptDelete}  name="PaymentReceiptDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentReceiptApproved1}  name="PaymentReceiptApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentReceiptApproved2}  name="PaymentReceiptApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentReceiptApproved3}  name="PaymentReceiptApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaymentReceiptReportAndExport}  name="PaymentReceiptReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Journal Entry</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JournalEntryRead}  name="JournalEntryRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JournalEntryWrite}  name="JournalEntryWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JournalEntryModify}  name="JournalEntryModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JournalEntryDelete}  name="JournalEntryDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JournalEntryApproved1}  name="JournalEntryApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JournalEntryApproved2}  name="JournalEntryApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JournalEntryApproved3}  name="JournalEntryApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.JournalEntryReportAndExport}  name="JournalEntryReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Contra Voucher</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContraVoucherRead}  name="ContraVoucherRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContraVoucherWrite}  name="ContraVoucherWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContraVoucherModify}  name="ContraVoucherModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContraVoucherDelete}  name="ContraVoucherDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContraVoucherApproved1}  name="ContraVoucherApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContraVoucherApproved2}  name="ContraVoucherApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContraVoucherApproved3}  name="ContraVoucherApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContraVoucherReportAndExport}  name="ContraVoucherReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Gain Profit/Loss</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GainProfitLossRead}  name="GainProfitLossRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GainProfitLossWrite}  name="GainProfitLossWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GainProfitLossModify}  name="GainProfitLossModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GainProfitLossDelete}  name="GainProfitLossDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GainProfitLossApproved1}  name="GainProfitLossApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GainProfitLossApproved2}  name="GainProfitLossApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GainProfitLossApproved3}  name="GainProfitLossApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GainProfitLossReportAndExport}  name="GainProfitLossReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Debit Note</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DebitNoteRead}  name="DebitNoteRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DebitNoteWrite}  name="DebitNoteWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DebitNoteModify}  name="DebitNoteModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DebitNoteDelete}  name="DebitNoteDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DebitNoteApproved1}  name="DebitNoteApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DebitNoteApproved2}  name="DebitNoteApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DebitNoteApproved3}  name="DebitNoteApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DebitNoteReportAndExport}  name="DebitNoteReportAndExport" /></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">RetailDebitNote</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailDebitNoteRead}  name="RetailDebitNoteRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailDebitNoteWrite}  name="RetailDebitNoteWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailDebitNoteModify}  name="RetailDebitNoteModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailDebitNoteDelete}  name="RetailDebitNoteDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailDebitNoteApproved1} name="RetailDebitNoteApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailDebitNoteApproved2}  name="RetailDebitNoteApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailDebitNoteApproved3}  name="RetailDebitNoteApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailDebitNoteReportAndExport}  name="RetailDebitNoteReportAndExport" /></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Credit Note</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CreditNoteRead}  name="CreditNoteRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CreditNoteWrite}  name="CreditNoteWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CreditNoteModify}  name="CreditNoteModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CreditNoteDelete}  name="CreditNoteDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CreditNoteApproved1}  name="CreditNoteApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CreditNoteApproved2}  name="CreditNoteApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CreditNoteApproved3}  name="CreditNoteApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CreditNoteReportAndExport}  name="CreditNoteReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">RetailCreditNote</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailCreditNoteRead}  name="RetailCreditNoteRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailCreditNoteWrite}  name="RetailCreditNoteWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailCreditNoteModify}  name="RetailCreditNoteModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailCreditNoteDelete}  name="RetailCreditNoteDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailCreditNoteApproved1}  name="RetailCreditNoteApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailCreditNoteApproved2} name="RetailCreditNoteApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailCreditNoteApproved3} name="RetailCreditNoteApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailCreditNoteReportAndExport} name="RetailCreditNoteReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">TermConditionMaster</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TermConditionMasterRead}  name="TermConditionMasterRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TermConditionMasterWrite}  name="TermConditionMasterWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TermConditionMasterModify}  name="TermConditionMasterModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TermConditionMasterDelete}  name="TermConditionMasterDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TermConditionMasterApproved1}  name="TermConditionMasterApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TermConditionMasterApproved2}  name="TermConditionMasterApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TermConditionMasterApproved3}  name="TermConditionMasterApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TermConditionMasterReportAndExport}  name="TermConditionMasterReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">OutstandingReport</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutstandingReportRead}  name="OutstandingReportRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutstandingReportWrite}  name="OutstandingReportWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutstandingReportModify}  name="OutstandingReportModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutstandingReportDelete}  name="OutstandingReportDelete" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutstandingReportApproved1}  name="OutstandingReportApproved1" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutstandingReportApproved2}  name="OutstandingReportApproved2" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutstandingReportApproved3}  name="OutstandingReportApproved3" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutstandingReport_ReportAndExport}  name="OutstandingReport_ReportAndExport" /></div>
                </div>
                </div>
            </div>
          </div>

          {/* QC AND QA */}
          <div className='row mt-2'>
            <h5 className="my-1">QC/QA</h5>
            <div className='row'>
              <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">QC Testing</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCTestingRead} name="QCTestingRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCTestingWrite} name="QCTestingWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCTestingModify} name="QCTestingModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCTestingDelete} name="QCTestingDelete"  /></div>
                 <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">QCSamplaningPlan</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCSamplaningPlanRead} name="QCSamplaningPlanRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCSamplaningPlanWrite} name="QCSamplaningPlanWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCSamplaningPlanModify} name="QCSamplaningPlanModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCSamplaningPlanDelete} name="QCSamplaningPlanDelete"  /></div>
                 <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">QCIsoTolerance</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCIsoToleranceRead} name="QCIsoToleranceRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCIsoToleranceWrite} name="QCIsoToleranceWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCIsoToleranceModify} name="QCIsoToleranceModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCIsoToleranceDelete} name="QCIsoToleranceDelete"  /></div>
                 <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Variant Master</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VariantMasterRead} name="VariantMasterRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VariantMasterWrite} name="VariantMasterWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VariantMasterModify} name="VariantMasterModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.VariantMasterDelete} name="VariantMasterDelete"  /></div>
                 <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">RM COA</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RMCOARead} name="RMCOARead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RMCOAWrite} name="RMCOAWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RMCOAModify} name="RMCOAModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RMCOADelete} name="RMCOADelete"  /></div>
                 <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">RM Visual</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RMVisualRead} name="RMVisualRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RMVisualWrite} name="RMVisualWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RMVisualModify} name="RMVisualModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RMVisualDelete} name="RMVisualDelete"  /></div>
                 <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">FG COA</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FGCOARead} name="FGCOARead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FGCOAWrite} name="FGCOAWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FGCOAModify} name="FGCOAModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FGCOADelete} name="FGCOADelete"  /></div>
                 <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">FG Visual</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FGVisualRead} name="FGVisualRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FGVisualWrite} name="FGVisualWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FGVisualModify} name="FGVisualModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.FGVisualDelete} name="FGVisualDelete"  /></div>
                 <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">INProcess</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.INProcessRead} name="INProcessRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.INProcessWrite} name="INProcessWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.INProcessModify} name="INProcessModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.INProcessDelete} name="INProcessDelete"  /></div>
                 <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">ISO Document</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ISODocumentRead} name="ISODocumentRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox"  className="form-check-input p-2 d-none" name=""  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ISODocumentModify} name="ISODocumentModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none" name=""  /></div>
                 <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">MinutesOfMeeting</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MinutesOfMeetingRead} name="MinutesOfMeetingRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MinutesOfMeetingWrite} name="MinutesOfMeetingWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MinutesOfMeetingModify} name="MinutesOfMeetingModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MinutesOfMeetingDelete} name="MinutesOfMeetingDelete"  /></div>
                 <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">QC Item</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCItemRead} name="QCItemRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCItemWrite} name="QCItemWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCItemModify} name="QCItemModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QCItemDelete} name="QCItemDelete"  /></div>
                 <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">PendingSOFOperator </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PendingSOFOperatorRead} name="PendingSOFOperatorRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PendingSOFOperatorReportAndExport}  name="PendingSOFOperatorReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">PendingSalesOrder </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PendingSalesOrderRead}  name="PendingSalesOrderRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PendingSalesOrderReportAndExport}  name="PendingSalesOrderReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">DutyDrawbackReport </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DutyDrawbackReportRead}  name="DutyDrawbackReportRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DutyDrawbackReport_ReportAndExport}  name="DutyDrawbackReport_ReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Tally Integration </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TallyIntegrationRead}  name="TallyIntegrationRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" className="form-check-input p-2 d-none"  name="" /></div>
                  <div className='col-md-3 text-end'>   <input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TallyIntegrationReportAndExport}  name="TallyIntegrationReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">TaxClassification </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaxClassificationRead}  name="TaxClassificationRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaxClassificationWrite}  name="TaxClassificationWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaxClassificationModify}  name="TaxClassificationModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaxClassificationDelete} name="TaxClassificationDelete" /></div>                  
                  <div className='col-md-6 text-end'></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Contract Report </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContractReportRead}  name="ContractReportRead" /></div>
                  <div className='col-md-9 text-end'><input type="checkbox"     onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContractReport_ReportAndExport}  name="ContractReport_ReportAndExport" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">ExpanceVoucherType </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExpanceVoucherTypeRead}  name="ExpanceVoucherTypeRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExpanceVoucherTypeWrite}  name="ExpanceVoucherTypeWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExpanceVoucherTypeModify} name="ExpanceVoucherTypeModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExpanceVoucherTypeDelete}  name="ExpanceVoucherTypeDelete" /></div>
                  <div className='col-md-6 text-end'></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">ExpanceVoucher </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExpanceVoucherRead}  name="ExpanceVoucherRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExpanceVoucherWrite}  name="ExpanceVoucherWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExpanceVoucherModify}  name="ExpanceVoucherModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExpanceVoucherDelete}  name="ExpanceVoucherDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Contact Type </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactTypeRead}  name="ContactTypeRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactTypeWrite}  name="ContactTypeWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactTypeModify}  name="ContactTypeModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactTypeDelete}  name="ContactTypeDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Quotation Type </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QuotationTypeRead}  name="QuotationTypeRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QuotationTypeWrite}  name="QuotationTypeWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QuotationTypeModify}  name="QuotationTypeModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QuotationTypeDelete}  name="QuotationTypeDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Deal Stage</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DealStageRead}  name="DealStageRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DealStageWrite}  name="DealStageWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DealStageModify} name="DealStageModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DealStageDelete} name="DealStageDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Task Status</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaskStatusRead}  name="TaskStatusRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaskStatusWrite}  name="TaskStatusWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaskStatusModify}  name="TaskStatusModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaskStatusDelete}  name="TaskStatusDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">ComplaintStatus</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ComplaintStatusRead}  name="ComplaintStatusRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ComplaintStatusWrite}  name="ComplaintStatusWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ComplaintStatusModify}  name="ComplaintStatusModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ComplaintStatusDelete}  name="ComplaintStatusDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Company Type </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CompanyTypeRead}  name="CompanyTypeRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CompanyTypeWrite}  name="CompanyTypeWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CompanyTypeModify}  name="CompanyTypeModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CompanyTypeDelete}  name="CompanyTypeDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Inquiry</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InquiryRead}  name="InquiryRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InquiryWrite}  name="InquiryWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InquiryModify}  name="InquiryModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InquiryDelete}  name="InquiryDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Deal</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DealRead}  name="DealRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DealWrite}  name="DealWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DealModify}  name="DealModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DealDelete}  name="DealDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Task</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaskRead}  name="TaskRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaskWrite}  name="TaskWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaskModify}  name="TaskModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.TaskDelete}  name="TaskDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Company</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QcCompanyRead}  name="QcCompanyRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QcCompanyWrite}  name="QcCompanyWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QcCompanyModify}  name="QcCompanyModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QcCompanyDelete}  name="QcCompanyDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Contact</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactRead}  name="ContactRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactWrite}  name="ContactWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactModify}  name="ContactModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactDelete}  name="ContactDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Complaint</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ComplaintRead}  name="ComplaintRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ComplaintWrite}  name="ComplaintWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ComplaintModify}  name="ComplaintModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ComplaintDelete}  name="ComplaintDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Call Type</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CallTypeRead}  name="CallTypeRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CallTypeWrite}  name="CallTypeWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CallTypeModify}  name="CallTypeModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CallTypeDelete}  name="CallTypeDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Event Type </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EventTypeRead}  name="EventTypeRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EventTypeWrite}  name="EventTypeWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EventTypeModify}  name="EventTypeModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EventTypeDelete}  name="EventTypeDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Quotation </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QuotationRead}  name="QuotationRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QuotationWrite}  name="QuotationWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QuotationModify}  name="QuotationModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.QuotationDelete}  name="QuotationDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Retail Quotation </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailQuotationRead}  name="RetailQuotationRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailQuotationWrite}  name="RetailQuotationWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailQuotationModify}  name="RetailQuotationModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RetailQuotationDelete}  name="RetailQuotationDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">ExportQuotation </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportQuotationRead}  name="ExportQuotationRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportQuotationWrite}  name="ExportQuotationWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportQuotationModify}  name="ExportQuotationModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ExportQuotationDelete}  name="ExportQuotationDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Purchase Indent</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseIndentRead}  name="PurchaseIndentRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseIndentWrite}  name="PurchaseIndentWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseIndentModify}  name="PurchaseIndentModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseIndentDelete}  name="PurchaseIndentDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">PurchaseQuotation </p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseQuotationRead}  name="PurchaseQuotationRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseQuotationWrite}  name="PurchaseQuotationWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseQuotationModify}  name="PurchaseQuotationModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PurchaseQuotationDelete}  name="PurchaseQuotationDelete" /></div>
                </div>
                <div className='row d-none '>
                  <div className='col-md-2 '><p className="m-0 p-0">Phone Group</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneGroupRead}  name="PhoneGroupRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneGroupWrite}  name="PhoneGroupWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneGroupModify}  name="PhoneGroupModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneGroupDelete}  name="PhoneGroupDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Phone Book</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneBookRead}  name="PhoneBookRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneBookWrite}  name="PhoneBookWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneBookModify}  name="PhoneBookModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PhoneBookDelete}  name="PhoneBookDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Send Message</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SendMessageRead}  name="SendMessageRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SendMessageWrite}  name="SendMessageWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SendMessageModify}  name="SendMessageModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SendMessageDelete}  name="SendMessageDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Comment</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CommentRead}  name="CommentRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CommentWrite}  name="CommentWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CommentModify}  name="CommentModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CommentDelete}  name="CommentDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Event</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EventRead}  name="EventRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EventWrite}  name="EventWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EventModify}  name="EventModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EventDelete}  name="EventDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Contact Group</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactGroupRead}  name="ContactGroupRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactGroupWrite}  name="ContactGroupWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactGroupModify}  name="ContactGroupModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ContactGroupDelete}  name="ContactGroupDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Message</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MessageRead}  name="MessageRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MessageWrite}  name="MessageWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MessageModify}  name="MessageModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MessageDelete}  name="MessageDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Call</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CallRead}  name="CallRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CallWrite}  name="CallWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CallModify}  name="CallModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CallDelete}  name="CallDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Meeting</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MeetingRead}  name="MeetingRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MeetingWrite}  name="MeetingWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MeetingModify}  name="MeetingModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MeetingDelete}  name="MeetingDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Remainder</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RemainderRead}  name="RemainderRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RemainderWrite}  name="RemainderWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RemainderModify}  name="RemainderModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RemainderDelete}  name="RemainderDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">CustomerSatisfication</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CustomerSatisficationRead}  name="CustomerSatisficationRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CustomerSatisficationWrite}  name="CustomerSatisficationWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CustomerSatisficationModify}  name="CustomerSatisficationModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.CustomerSatisficationDelete}  name="CustomerSatisficationDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">InvoiceSatisfication</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InvoiceSatisficationRead}  name="InvoiceSatisficationRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InvoiceSatisficationWrite}  name="InvoiceSatisficationWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InvoiceSatisficationModify}  name="InvoiceSatisficationModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.InvoiceSatisficationDelete}  name="InvoiceSatisficationDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">AttachmentCategory</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AttachmentCategoryRead}  name="AttachmentCategoryRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AttachmentCategoryWrite}  name="AttachmentCategoryWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AttachmentCategoryModify}  name="AttachmentCategoryModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AttachmentCategoryDelete}  name="AttachmentCategoryDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">AttachmentRecord</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AttachmentRecordRead}  name="AttachmentRecordRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AttachmentRecordWrite}  name="AttachmentRecordWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AttachmentRecordModify}  name="AttachmentRecordModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AttachmentRecordDelete}  name="AttachmentRecordDelete" /></div>
                </div>
                <div className='row'>
                  <div className='col-md-2 '><p className="m-0 p-0">Pre Inquiry</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  name="PreInquiryRead" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  name="PreInquiryWrite" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  name="PreInquiryModify" /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2"  name="PreInquiryDelete" /></div>
                </div>
              </div>
            </div>
          </div>

        {/* // Hr& Payroll */}
        <div className='row mt-2'>
            <h5 className="my-1">HR & Payroll</h5>
            <div className='row'>
                <div className='col-md-12'>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">EmployeeCategory</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EmployeeCategoryRead} name="EmployeeCategoryRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EmployeeCategoryWrite} name="EmployeeCategoryWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EmployeeCategoryModify} name="EmployeeCategoryModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EmployeeCategoryDelete} name="EmployeeCategoryDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Department</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DepartmentRead} name="DepartmentRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DepartmentWrite} name="DepartmentWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DepartmentModify} name="DepartmentModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DepartmentDelete} name="DepartmentDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>  
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Position</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PositionRead} name="PositionRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PositionWrite} name="PositionWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PositionModify} name="PositionModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PositionDelete} name="PositionDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Holiday</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HolidayRead} name="HolidayRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HolidayWrite} name="HolidayWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HolidayModify} name="HolidayModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HolidayDelete} name="HolidayDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Leave Type</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveTypeRead} name="LeaveTypeRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveTypeWrite} name="LeaveTypeWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveTypeModify} name="LeaveTypeModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveTypeDelete} name="LeaveTypeDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Leave</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveRead} name="LeaveRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveWrite} name="LeaveWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveModify} name="LeaveModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveDelete} name="LeaveDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Apply Leave</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ApplyLeaveRead} name="ApplyLeaveRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ApplyLeaveWrite} name="ApplyLeaveWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ApplyLeaveModify} name="ApplyLeaveModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ApplyLeaveDelete} name="ApplyLeaveDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Leave Approved</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveApprovedRead} name="LeaveApprovedRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveApprovedWrite} name="LeaveApprovedWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveApprovedModify} name="LeaveApprovedModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveApprovedDelete} name="LeaveApprovedDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">LeaveMonthlyAdd</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveMonthlyAddRead} name="LeaveMonthlyAddRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveMonthlyAddWrite} name="LeaveMonthlyAddWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveMonthlyAddModify} name="LeaveMonthlyAddModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveMonthlyAddDelete} name="LeaveMonthlyAddDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">LeaveMonthlyDeduct</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveMonthlyDeductRead} name="LeaveMonthlyDeductRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveMonthlyDeductWrite} name="LeaveMonthlyDeductWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveMonthlyDeductModify} name="LeaveMonthlyDeductModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.LeaveMonthlyDeductDelete} name="LeaveMonthlyDeductDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Shift</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ShiftRead} name="ShiftRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ShiftWrite} name="ShiftWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ShiftModify} name="ShiftModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.ShiftDelete} name="ShiftDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Employee</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EmployeeRead} name="EmployeeRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EmployeeWrite} name="EmployeeWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EmployeeModify} name="EmployeeModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.EmployeeDelete} name="EmployeeDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Assign Shift</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AssignShiftWrite} name="AssignShiftRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AssignShiftWrite} name="AssignShiftWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AssignShiftModify} name="AssignShiftModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AssignShiftDelete} name="AssignShiftDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div> 
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">AppraisalQuestions</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AppraisalQuestionsRead} name="AppraisalQuestionsRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AppraisalQuestionsWrite} name="AppraisalQuestionsWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AppraisalQuestionsModify} name="AppraisalQuestionsModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AppraisalQuestionsDelete} name="AppraisalQuestionsDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Indicator</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IndicatorRead} name="IndicatorRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IndicatorWrite} name="IndicatorWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IndicatorModify} name="IndicatorModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IndicatorDelete} name="IndicatorDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Rating Head</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RatingHeadRead} name="RatingHeadRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RatingHeadWrite} name="RatingHeadWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RatingHeadModify} name="RatingHeadModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RatingHeadDelete} name="RatingHeadDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Ratings</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RatingsRead} name="RatingsRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RatingsWrite} name="RatingsWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RatingsModify} name="RatingsModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.RatingsDelete} name="RatingsDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Increment</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IncrementRead} name="IncrementRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IncrementWrite} name="IncrementWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IncrementModify} name="IncrementModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.IncrementDelete} name="IncrementDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Memo</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MemoRead} name="MemoRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MemoWrite} name="MemoWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MemoModify} name="MemoModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.MemoDelete} name="MemoDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Performance</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PerformanceRead} name="PerformanceRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PerformanceWrite} name="PerformanceWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PerformanceModify} name="PerformanceModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PerformanceDelete} name="PerformanceDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Appriasal</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AppriasalRead} name="AppriasalRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AppriasalWrite} name="AppriasalWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AppriasalModify} name="AppriasalModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AppriasalDelete} name="AppriasalDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Device</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeviceRead} name="DeviceRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeviceWrite} name="DeviceWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeviceModify} name="DeviceModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeviceDelete} name="DeviceDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">DeviceConnection</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeviceConnectionRead} name="DeviceConnectionRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeviceConnectionWrite} name="DeviceConnectionWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeviceConnectionModify} name="DeviceConnectionModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.DeviceConnectionDelete} name="DeviceConnectionDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">OutdoreAttendace</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutdoreAttendaceRead} name="OutdoreAttendaceRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutdoreAttendaceWrite} name="OutdoreAttendaceWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutdoreAttendaceModify} name="OutdoreAttendaceModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.OutdoreAttendaceDelete} name="OutdoreAttendaceDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                 <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Salary Formula</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryFormulaRead} name="SalaryFormulaRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryFormulaWrite} name="SalaryFormulaWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryFormulaModify} name="SalaryFormulaModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryFormulaDelete} name="SalaryFormulaDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Salary Category</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryCategoryRead} name="SalaryCategoryRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryCategoryWrite} name="SalaryCategoryWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryCategoryModify} name="SalaryCategoryModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryCategoryDelete} name="SalaryCategoryDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">SalaryIncrement</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryIncrementRead} name="SalaryIncrementRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryIncrementWrite} name="SalaryIncrementWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryIncrementModify} name="SalaryIncrementModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.SalaryIncrementDelete} name="SalaryIncrementDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">AdvancePayment</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvancePaymentRead} name="AdvancePaymentRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvancePaymentWrite} name="AdvancePaymentWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvancePaymentModify} name="AdvancePaymentModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvancePaymentDelete} name="AdvancePaymentDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">AdvancePaySalary</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvancePaySalaryRead} name="AdvancePaySalaryRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvancePaySalaryWrite} name="AdvancePaySalaryWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvancePaySalaryModify} name="AdvancePaySalaryModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.AdvancePaySalaryDelete} name="AdvancePaySalaryDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Generate Salary</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GenerateSalaryRead} name="GenerateSalaryRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GenerateSalaryWrite} name="GenerateSalaryWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GenerateSalaryModify} name="GenerateSalaryModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.GenerateSalaryDelete} name="GenerateSalaryDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">Pay Salary</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaySalaryRead} name="PaySalaryRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaySalaryWrite} name="PaySalaryWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaySalaryModify} name="PaySalaryModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.PaySalaryDelete} name="PaySalaryDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className='row'>
                  <div className='col-md-2'><p className="m-0 p-0">HourlyAttendance</p></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HourlyAttendanceRead} name="HourlyAttendanceRead"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HourlyAttendanceWrite} name="HourlyAttendanceWrite"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HourlyAttendanceModify} name="HourlyAttendanceModify"  /></div>
                  <div className='col-md-1 text-center'><input type="checkbox" onChange={ChangeHandler} className="form-check-input p-2" value={permission.HourlyAttendanceDelete} name="HourlyAttendanceDelete"  /></div>
                  <div className='col-md-6' ></div>
                </div>
                <div className="d-flex justify-content-end mt-2 " onClick={PermissonSubmitHandler}>
                  <button className="btn btn-primary px-3">Submit</button>
                </div>



                </div>
            </div>
        </div>
          
      </div>
      
  
  )
}

export default ModuleMenuCommon