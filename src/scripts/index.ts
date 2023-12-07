import { baseApi as api } from "./baseApi";
export const addTagTypes = [
  "Authentication",
  "Users",
  "Uploads",
  "Beneficiaries",
  "CurrencyCloud",
  "OpenPayd",
  "Transactions",
  "Admin",
] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      authControllerLogin: build.mutation<
        AuthControllerLoginApiResponse,
        AuthControllerLoginApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/auth/login`,
          method: "POST",
          body: queryArg.loginDto,
          headers: {
            "User-Agent": queryArg["User-Agent"],
            "2fa-token": queryArg["2fa-token"],
          },
        }),
        invalidatesTags: ["Authentication"],
      }),
      authControllerForgotPassword: build.mutation<
        AuthControllerForgotPasswordApiResponse,
        AuthControllerForgotPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/auth/forgot-password`,
          method: "POST",
          body: queryArg.forgotDto,
        }),
        invalidatesTags: ["Authentication"],
      }),
      twoFaVerificationControllerSend: build.mutation<
        TwoFaVerificationControllerSendApiResponse,
        TwoFaVerificationControllerSendApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/2fa/verification/send`,
          method: "POST",
          body: queryArg.twoFaCodeDto,
        }),
        invalidatesTags: ["Authentication"],
      }),
      twoFaVerificationControllerCheck: build.mutation<
        TwoFaVerificationControllerCheckApiResponse,
        TwoFaVerificationControllerCheckApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/2fa/verification/check`,
          method: "POST",
          body: queryArg.twoFaCodeCheckDto,
          headers: { "User-Agent": queryArg["User-Agent"] },
        }),
        invalidatesTags: ["Authentication"],
      }),
      usersControllerCreate: build.mutation<
        UsersControllerCreateApiResponse,
        UsersControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/users`,
          method: "POST",
          body: queryArg.createAccountDto,
        }),
        invalidatesTags: ["Users"],
      }),
      usersControllerInviteFromAdmin: build.mutation<
        UsersControllerInviteFromAdminApiResponse,
        UsersControllerInviteFromAdminApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/users/invited`,
          method: "POST",
          body: queryArg.adminInvitationDto,
        }),
        invalidatesTags: ["Users"],
      }),
      usersControllerProfile: build.query<
        UsersControllerProfileApiResponse,
        UsersControllerProfileApiArg
      >({
        query: () => ({ url: `/api/v1/users/current` }),
        providesTags: ["Users"],
      }),
      usersControllerFetch: build.query<
        UsersControllerFetchApiResponse,
        UsersControllerFetchApiArg
      >({
        query: (queryArg) => ({ url: `/api/v1/users/${queryArg.uuid}` }),
        providesTags: ["Users"],
      }),
      usersControllerUpdate: build.mutation<
        UsersControllerUpdateApiResponse,
        UsersControllerUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/users/${queryArg.uuid}`,
          method: "POST",
          body: queryArg.adminCreateUserDto,
        }),
        invalidatesTags: ["Users"],
      }),
      usersControllerAcceptTerms: build.mutation<
        UsersControllerAcceptTermsApiResponse,
        UsersControllerAcceptTermsApiArg
      >({
        query: () => ({ url: `/api/v1/users/current/terms`, method: "POST" }),
        invalidatesTags: ["Users"],
      }),
      usersControllerUpdateCurrentUser: build.mutation<
        UsersControllerUpdateCurrentUserApiResponse,
        UsersControllerUpdateCurrentUserApiArg
      >({
        query: () => ({
          url: `/api/v1/users/current/metadata`,
          method: "POST",
        }),
        invalidatesTags: ["Users"],
      }),
      usersControllerUpdateDocuments: build.mutation<
        UsersControllerUpdateDocumentsApiResponse,
        UsersControllerUpdateDocumentsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/users/current/documents`,
          method: "POST",
          body: queryArg.userDocumentsDto,
        }),
        invalidatesTags: ["Users"],
      }),
      usersControllerGetDocuments: build.query<
        UsersControllerGetDocumentsApiResponse,
        UsersControllerGetDocumentsApiArg
      >({
        query: () => ({ url: `/api/v1/users/current/documents` }),
        providesTags: ["Users"],
      }),
      usersControllerRemoveDocuments: build.mutation<
        UsersControllerRemoveDocumentsApiResponse,
        UsersControllerRemoveDocumentsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/users/current/remove_documents`,
          method: "POST",
          body: queryArg.userDocumentsDto,
        }),
        invalidatesTags: ["Users"],
      }),
      usersControllerVerifyUser: build.mutation<
        UsersControllerVerifyUserApiResponse,
        UsersControllerVerifyUserApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/users/${queryArg.username}/verify`,
          method: "POST",
          body: queryArg.verifyEmailDto,
        }),
        invalidatesTags: ["Users"],
      }),
      usersControllerResetPassword: build.mutation<
        UsersControllerResetPasswordApiResponse,
        UsersControllerResetPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/users/current/reset-password`,
          method: "POST",
          body: queryArg.resetPasswordDto,
        }),
        invalidatesTags: ["Users"],
      }),
      usersControllerPrepare2Fa: build.mutation<
        UsersControllerPrepare2FaApiResponse,
        UsersControllerPrepare2FaApiArg
      >({
        query: () => ({ url: `/api/v1/users/prepare2FA`, method: "POST" }),
        invalidatesTags: ["Users"],
      }),
      usersControllerEnable2Fa: build.mutation<
        UsersControllerEnable2FaApiResponse,
        UsersControllerEnable2FaApiArg
      >({
        query: () => ({ url: `/api/v1/users/enable2FA`, method: "POST" }),
        invalidatesTags: ["Users"],
      }),
      usersControllerDisable2Fa: build.mutation<
        UsersControllerDisable2FaApiResponse,
        UsersControllerDisable2FaApiArg
      >({
        query: () => ({ url: `/api/v1/users/disable2FA`, method: "POST" }),
        invalidatesTags: ["Users"],
      }),
      invitationsControllerCreate: build.mutation<
        InvitationsControllerCreateApiResponse,
        InvitationsControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/invitations`,
          method: "POST",
          body: queryArg.invitationDto,
        }),
        invalidatesTags: ["Users"],
      }),
      invitationsControllerRequestAccess: build.mutation<
        InvitationsControllerRequestAccessApiResponse,
        InvitationsControllerRequestAccessApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/invitations/access`,
          method: "POST",
          body: queryArg.requestAccessDto,
        }),
        invalidatesTags: ["Users"],
      }),
      invitationsControllerFetch: build.query<
        InvitationsControllerFetchApiResponse,
        InvitationsControllerFetchApiArg
      >({
        query: (queryArg) => ({ url: `/api/v1/invitations/${queryArg.uuid}` }),
        providesTags: ["Users"],
      }),
      documentsControllerUploadDocument: build.mutation<
        DocumentsControllerUploadDocumentApiResponse,
        DocumentsControllerUploadDocumentApiArg
      >({
        query: () => ({ url: `/api/v1/documents`, method: "POST" }),
        invalidatesTags: ["Uploads"],
      }),
      documentsControllerDeleteDocument: build.mutation<
        DocumentsControllerDeleteDocumentApiResponse,
        DocumentsControllerDeleteDocumentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/documents/${queryArg.uuid}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Uploads"],
      }),
      beneficiariesControllerCreate: build.mutation<
        BeneficiariesControllerCreateApiResponse,
        BeneficiariesControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/beneficiaries`,
          method: "POST",
          body: queryArg.createBeneficiaryDto,
        }),
        invalidatesTags: ["Beneficiaries"],
      }),
      beneficiariesControllerList: build.query<
        BeneficiariesControllerListApiResponse,
        BeneficiariesControllerListApiArg
      >({
        query: () => ({ url: `/api/v1/beneficiaries` }),
        providesTags: ["Beneficiaries"],
      }),
      beneficiariesControllerReview: build.mutation<
        BeneficiariesControllerReviewApiResponse,
        BeneficiariesControllerReviewApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/beneficiaries/review`,
          method: "POST",
          body: queryArg.createBeneficiaryDto,
        }),
        invalidatesTags: ["Beneficiaries"],
      }),
      beneficiariesControllerFetch: build.query<
        BeneficiariesControllerFetchApiResponse,
        BeneficiariesControllerFetchApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/beneficiaries/${queryArg.uuid}`,
        }),
        providesTags: ["Beneficiaries"],
      }),
      beneficiariesControllerUpdate: build.mutation<
        BeneficiariesControllerUpdateApiResponse,
        BeneficiariesControllerUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/beneficiaries/${queryArg.uuid}`,
          method: "POST",
          body: queryArg.createBeneficiaryDto,
        }),
        invalidatesTags: ["Beneficiaries"],
      }),
      beneficiariesControllerDelete: build.mutation<
        BeneficiariesControllerDeleteApiResponse,
        BeneficiariesControllerDeleteApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/beneficiaries/${queryArg.uuid}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Beneficiaries"],
      }),
      beneficiariesControllerApprove: build.mutation<
        BeneficiariesControllerApproveApiResponse,
        BeneficiariesControllerApproveApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/beneficiaries/${queryArg.uuid}/approve`,
          method: "POST",
        }),
        invalidatesTags: ["Beneficiaries"],
      }),
      currencyCloudControllerWebhook: build.mutation<
        CurrencyCloudControllerWebhookApiResponse,
        CurrencyCloudControllerWebhookApiArg
      >({
        query: () => ({ url: `/api/v1/currencycloud/webhook`, method: "POST" }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerBalances: build.query<
        CurrencyCloudControllerBalancesApiResponse,
        CurrencyCloudControllerBalancesApiArg
      >({
        query: () => ({ url: `/api/v1/currencycloud/balances` }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerCurrencies: build.query<
        CurrencyCloudControllerCurrenciesApiResponse,
        CurrencyCloudControllerCurrenciesApiArg
      >({
        query: () => ({ url: `/api/v1/currencycloud/currencies` }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerBeneficiaries: build.query<
        CurrencyCloudControllerBeneficiariesApiResponse,
        CurrencyCloudControllerBeneficiariesApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/beneficiaries/${queryArg.currency}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerPayers: build.mutation<
        CurrencyCloudControllerPayersApiResponse,
        CurrencyCloudControllerPayersApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/payers`,
          method: "POST",
          body: queryArg.deletePaymentDto,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerTransaction: build.query<
        CurrencyCloudControllerTransactionApiResponse,
        CurrencyCloudControllerTransactionApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/transaction/${queryArg.currency}/${queryArg.settlesAtFrom}/${queryArg.completedAtFrom}/${queryArg.pathPage}`,
          params: { page: queryArg.queryPage, limit: queryArg.limit },
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerTransactionref: build.query<
        CurrencyCloudControllerTransactionrefApiResponse,
        CurrencyCloudControllerTransactionrefApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/transactionref/${queryArg.shortRef}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerConversion: build.query<
        CurrencyCloudControllerConversionApiResponse,
        CurrencyCloudControllerConversionApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/conversion/${queryArg.uuid}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerDateChange: build.mutation<
        CurrencyCloudControllerDateChangeApiResponse,
        CurrencyCloudControllerDateChangeApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/conversion/${queryArg.uuid}/edit`,
          method: "POST",
          body: queryArg.dateChangeDto,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerSplitPreview: build.mutation<
        CurrencyCloudControllerSplitPreviewApiResponse,
        CurrencyCloudControllerSplitPreviewApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/conversion/${queryArg.uuid}/split_preview`,
          method: "POST",
          body: queryArg.splitConversionDto,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerSplit: build.mutation<
        CurrencyCloudControllerSplitApiResponse,
        CurrencyCloudControllerSplitApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/conversion/${queryArg.uuid}/split`,
          method: "POST",
          body: queryArg.splitConversionDto,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerPayment: build.query<
        CurrencyCloudControllerPaymentApiResponse,
        CurrencyCloudControllerPaymentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/payment/${queryArg.uuid}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerBeneficiary: build.query<
        CurrencyCloudControllerBeneficiaryApiResponse,
        CurrencyCloudControllerBeneficiaryApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/beneficiary/${queryArg.uuid}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerBankBeneficiary: build.query<
        CurrencyCloudControllerBankBeneficiaryApiResponse,
        CurrencyCloudControllerBankBeneficiaryApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/bank_beneficiary/${queryArg.uuid}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerCurrencyaccount: build.query<
        CurrencyCloudControllerCurrencyaccountApiResponse,
        CurrencyCloudControllerCurrencyaccountApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/currencyaccount/${queryArg.currency}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerAccounts: build.query<
        CurrencyCloudControllerAccountsApiResponse,
        CurrencyCloudControllerAccountsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/accounts`,
          params: { page: queryArg.page, limit: queryArg.limit },
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerCurrent: build.query<
        CurrencyCloudControllerCurrentApiResponse,
        CurrencyCloudControllerCurrentApiArg
      >({
        query: () => ({ url: `/api/v1/currencycloud/current` }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerAccount: build.query<
        CurrencyCloudControllerAccountApiResponse,
        CurrencyCloudControllerAccountApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/account/${queryArg.accountId}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerSender: build.query<
        CurrencyCloudControllerSenderApiResponse,
        CurrencyCloudControllerSenderApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/sender/${queryArg.entityId}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerContacts: build.query<
        CurrencyCloudControllerContactsApiResponse,
        CurrencyCloudControllerContactsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/contacts/${queryArg.accountId}`,
          params: { page: queryArg.page, limit: queryArg.limit },
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerAllContacts: build.query<
        CurrencyCloudControllerAllContactsApiResponse,
        CurrencyCloudControllerAllContactsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/subaccounts`,
          params: { page: queryArg.page, limit: queryArg.limit },
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerContact: build.query<
        CurrencyCloudControllerContactApiResponse,
        CurrencyCloudControllerContactApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/contact/${queryArg.contactId}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerSettleAccounts: build.query<
        CurrencyCloudControllerSettleAccountsApiResponse,
        CurrencyCloudControllerSettleAccountsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/settle_accounts/${queryArg.currency}/${queryArg.accountId}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerCreateQuote: build.mutation<
        CurrencyCloudControllerCreateQuoteApiResponse,
        CurrencyCloudControllerCreateQuoteApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/create_quote`,
          method: "POST",
          body: queryArg.createCurrencyQuote,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerCreateTopUp: build.mutation<
        CurrencyCloudControllerCreateTopUpApiResponse,
        CurrencyCloudControllerCreateTopUpApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/create_top_up`,
          method: "POST",
          body: queryArg.createCurrencyTopUp,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerValidatePayment: build.mutation<
        CurrencyCloudControllerValidatePaymentApiResponse,
        CurrencyCloudControllerValidatePaymentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/validate_payment`,
          method: "POST",
          body: queryArg.createValidatePayment,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerCreatePayment: build.mutation<
        CurrencyCloudControllerCreatePaymentApiResponse,
        CurrencyCloudControllerCreatePaymentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/create_payment`,
          method: "POST",
          body: queryArg.createValidatePayment,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerEditPayment: build.mutation<
        CurrencyCloudControllerEditPaymentApiResponse,
        CurrencyCloudControllerEditPaymentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/edit_payment`,
          method: "POST",
          body: queryArg.createValidatePayment,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerDeletePayment: build.mutation<
        CurrencyCloudControllerDeletePaymentApiResponse,
        CurrencyCloudControllerDeletePaymentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/delete_payment`,
          method: "POST",
          body: queryArg.deletePaymentDto,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerCancelConversion: build.mutation<
        CurrencyCloudControllerCancelConversionApiResponse,
        CurrencyCloudControllerCancelConversionApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/cancel_conversion`,
          method: "POST",
          body: queryArg.deletePaymentDto,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerCreateBeneficiary: build.mutation<
        CurrencyCloudControllerCreateBeneficiaryApiResponse,
        CurrencyCloudControllerCreateBeneficiaryApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/create_beneficiary`,
          method: "POST",
          body: queryArg.createCurrencyBeneficiary,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerLoadQuote: build.query<
        CurrencyCloudControllerLoadQuoteApiResponse,
        CurrencyCloudControllerLoadQuoteApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/load_quote/${queryArg.buyCurrency}/${queryArg.sellCurrency}/${queryArg.amount}/${queryArg.fixedSide}/${queryArg.date}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerLoadDeliveryDate: build.mutation<
        CurrencyCloudControllerLoadDeliveryDateApiResponse,
        CurrencyCloudControllerLoadDeliveryDateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/delivery_date`,
          method: "POST",
          body: queryArg.deliveryDateDto,
        }),
        invalidatesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerHolidays: build.query<
        CurrencyCloudControllerHolidaysApiResponse,
        CurrencyCloudControllerHolidaysApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/holidays/${queryArg.country}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerConversionDates: build.query<
        CurrencyCloudControllerConversionDatesApiResponse,
        CurrencyCloudControllerConversionDatesApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/conversion_dates/${queryArg.pair}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerPaymentDates: build.query<
        CurrencyCloudControllerPaymentDatesApiResponse,
        CurrencyCloudControllerPaymentDatesApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/currencycloud/payment_dates/${queryArg.currency}`,
        }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerDashboardInfo: build.query<
        CurrencyCloudControllerDashboardInfoApiResponse,
        CurrencyCloudControllerDashboardInfoApiArg
      >({
        query: () => ({ url: `/api/v1/currencycloud/dashboard-info` }),
        providesTags: ["CurrencyCloud"],
      }),
      currencyCloudControllerSearchTransactions: build.query<
        CurrencyCloudControllerSearchTransactionsApiResponse,
        CurrencyCloudControllerSearchTransactionsApiArg
      >({
        query: () => ({ url: `/api/v1/currencycloud/search/transactions` }),
        providesTags: ["CurrencyCloud"],
      }),
      openPaydControllerWebhook: build.mutation<
        OpenPaydControllerWebhookApiResponse,
        OpenPaydControllerWebhookApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/webhook`,
          method: "POST",
          body: queryArg.webhookDto,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerSubaccounts: build.query<
        OpenPaydControllerSubaccountsApiResponse,
        OpenPaydControllerSubaccountsApiArg
      >({
        query: () => ({ url: `/api/v1/openpayd/subaccounts` }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerBalances: build.query<
        OpenPaydControllerBalancesApiResponse,
        OpenPaydControllerBalancesApiArg
      >({
        query: () => ({ url: `/api/v1/openpayd/balances` }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerCurrencies: build.query<
        OpenPaydControllerCurrenciesApiResponse,
        OpenPaydControllerCurrenciesApiArg
      >({
        query: () => ({ url: `/api/v1/openpayd/currencies` }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerBeneficiaries: build.query<
        OpenPaydControllerBeneficiariesApiResponse,
        OpenPaydControllerBeneficiariesApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/beneficiaries/${queryArg.currency}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerRenameLinkedClient: build.mutation<
        OpenPaydControllerRenameLinkedClientApiResponse,
        OpenPaydControllerRenameLinkedClientApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/renameLinkedClient`,
          method: "POST",
          body: queryArg.renameLinkedClientDto,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerPayers: build.mutation<
        OpenPaydControllerPayersApiResponse,
        OpenPaydControllerPayersApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/payers`,
          method: "POST",
          body: queryArg.deletePaymentDto,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerTransaction: build.query<
        OpenPaydControllerTransactionApiResponse,
        OpenPaydControllerTransactionApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/transaction/${queryArg.accountId}/${queryArg.currency}/${queryArg.settlesAtFrom}/${queryArg.completedAtFrom}/${queryArg.pathPage}`,
          params: { page: queryArg.queryPage, limit: queryArg.limit },
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerTransactionref: build.query<
        OpenPaydControllerTransactionrefApiResponse,
        OpenPaydControllerTransactionrefApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/transactionref/${queryArg.shortRef}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerConversion: build.query<
        OpenPaydControllerConversionApiResponse,
        OpenPaydControllerConversionApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/conversion/${queryArg.uuid}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerDateChange: build.mutation<
        OpenPaydControllerDateChangeApiResponse,
        OpenPaydControllerDateChangeApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/conversion/${queryArg.uuid}/edit`,
          method: "POST",
          body: queryArg.dateChangeDto,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerSplitPreview: build.mutation<
        OpenPaydControllerSplitPreviewApiResponse,
        OpenPaydControllerSplitPreviewApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/conversion/${queryArg.uuid}/split_preview`,
          method: "POST",
          body: queryArg.splitConversionDto,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerSplit: build.mutation<
        OpenPaydControllerSplitApiResponse,
        OpenPaydControllerSplitApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/conversion/${queryArg.uuid}/split`,
          method: "POST",
          body: queryArg.splitConversionDto,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerPayment: build.query<
        OpenPaydControllerPaymentApiResponse,
        OpenPaydControllerPaymentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/payment/${queryArg.uuid}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerBeneficiary: build.query<
        OpenPaydControllerBeneficiaryApiResponse,
        OpenPaydControllerBeneficiaryApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/beneficiary/${queryArg.uuid}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerBankBeneficiary: build.query<
        OpenPaydControllerBankBeneficiaryApiResponse,
        OpenPaydControllerBankBeneficiaryApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/bank_beneficiary/${queryArg.uuid}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerCurrencyaccount: build.query<
        OpenPaydControllerCurrencyaccountApiResponse,
        OpenPaydControllerCurrencyaccountApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/currencyaccount/${queryArg.currency}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerAccounts: build.query<
        OpenPaydControllerAccountsApiResponse,
        OpenPaydControllerAccountsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/accounts`,
          params: { page: queryArg.page, limit: queryArg.limit },
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerCurrent: build.query<
        OpenPaydControllerCurrentApiResponse,
        OpenPaydControllerCurrentApiArg
      >({
        query: () => ({ url: `/api/v1/openpayd/current` }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerAccount: build.query<
        OpenPaydControllerAccountApiResponse,
        OpenPaydControllerAccountApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/account/${queryArg.accountId}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerSender: build.query<
        OpenPaydControllerSenderApiResponse,
        OpenPaydControllerSenderApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/sender/${queryArg.entityId}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerContacts: build.query<
        OpenPaydControllerContactsApiResponse,
        OpenPaydControllerContactsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/contacts/${queryArg.accountId}`,
          params: { page: queryArg.page, limit: queryArg.limit },
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerContact: build.query<
        OpenPaydControllerContactApiResponse,
        OpenPaydControllerContactApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/contact/${queryArg.contactId}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerSettleAccounts: build.query<
        OpenPaydControllerSettleAccountsApiResponse,
        OpenPaydControllerSettleAccountsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/settle_accounts/${queryArg.currency}/${queryArg.accountId}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerCreateQuote: build.mutation<
        OpenPaydControllerCreateQuoteApiResponse,
        OpenPaydControllerCreateQuoteApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/create_quote`,
          method: "POST",
          body: queryArg.createCurrencyQuote,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerCreateTopUp: build.mutation<
        OpenPaydControllerCreateTopUpApiResponse,
        OpenPaydControllerCreateTopUpApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/create_top_up`,
          method: "POST",
          body: queryArg.createCurrencyTopUp,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerGetFees: build.mutation<
        OpenPaydControllerGetFeesApiResponse,
        OpenPaydControllerGetFeesApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/get_fees`,
          method: "POST",
          body: queryArg.createValidatePayment,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerValidatePayment: build.mutation<
        OpenPaydControllerValidatePaymentApiResponse,
        OpenPaydControllerValidatePaymentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/validate_payment`,
          method: "POST",
          body: queryArg.createValidatePayment,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerCreatePayment: build.mutation<
        OpenPaydControllerCreatePaymentApiResponse,
        OpenPaydControllerCreatePaymentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/create_payment`,
          method: "POST",
          body: queryArg.createValidatePayment,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerEditPayment: build.mutation<
        OpenPaydControllerEditPaymentApiResponse,
        OpenPaydControllerEditPaymentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/edit_payment`,
          method: "POST",
          body: queryArg.createValidatePayment,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerDeletePayment: build.mutation<
        OpenPaydControllerDeletePaymentApiResponse,
        OpenPaydControllerDeletePaymentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/delete_payment`,
          method: "POST",
          body: queryArg.deletePaymentDto,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerCancelConversion: build.mutation<
        OpenPaydControllerCancelConversionApiResponse,
        OpenPaydControllerCancelConversionApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/cancel_conversion`,
          method: "POST",
          body: queryArg.deletePaymentDto,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerCreateBeneficiary: build.mutation<
        OpenPaydControllerCreateBeneficiaryApiResponse,
        OpenPaydControllerCreateBeneficiaryApiArg
      >({
        query: () => ({
          url: `/api/v1/openpayd/create_beneficiary`,
          method: "POST",
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerLoadQuote: build.query<
        OpenPaydControllerLoadQuoteApiResponse,
        OpenPaydControllerLoadQuoteApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/load_quote/${queryArg.buyCurrency}/${queryArg.sellCurrency}/${queryArg.amount}/${queryArg.fixedSide}/${queryArg.date}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerLoadDeliveryDate: build.mutation<
        OpenPaydControllerLoadDeliveryDateApiResponse,
        OpenPaydControllerLoadDeliveryDateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/delivery_date`,
          method: "POST",
          body: queryArg.deliveryDateDto,
        }),
        invalidatesTags: ["OpenPayd"],
      }),
      openPaydControllerHolidays: build.query<
        OpenPaydControllerHolidaysApiResponse,
        OpenPaydControllerHolidaysApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/openpayd/holidays/${queryArg.country}`,
        }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerDashboardInfo: build.query<
        OpenPaydControllerDashboardInfoApiResponse,
        OpenPaydControllerDashboardInfoApiArg
      >({
        query: () => ({ url: `/api/v1/openpayd/dashboard-info` }),
        providesTags: ["OpenPayd"],
      }),
      openPaydControllerSearchTransactions: build.query<
        OpenPaydControllerSearchTransactionsApiResponse,
        OpenPaydControllerSearchTransactionsApiArg
      >({
        query: () => ({ url: `/api/v1/openpayd/search/transactions` }),
        providesTags: ["OpenPayd"],
      }),
      transactionsControllerFetch: build.query<
        TransactionsControllerFetchApiResponse,
        TransactionsControllerFetchApiArg
      >({
        query: (queryArg) => ({ url: `/api/v1/transactions/${queryArg.uuid}` }),
        providesTags: ["Transactions"],
      }),
      transactionsControllerSearchTransactions: build.query<
        TransactionsControllerSearchTransactionsApiResponse,
        TransactionsControllerSearchTransactionsApiArg
      >({
        query: () => ({ url: `/api/v1/transactions/search/transactions` }),
        providesTags: ["Transactions"],
      }),
      usersAdminControllerList: build.query<
        UsersAdminControllerListApiResponse,
        UsersAdminControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/users`,
          params: {
            page: queryArg.page,
            limit: queryArg.limit,
            roles: queryArg.roles,
          },
        }),
        providesTags: ["Admin"],
      }),
      usersAdminControllerCreate: build.mutation<
        UsersAdminControllerCreateApiResponse,
        UsersAdminControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/users`,
          method: "POST",
          body: queryArg.adminCreateUserDto,
        }),
        invalidatesTags: ["Admin"],
      }),
      usersAdminControllerLinkUser: build.mutation<
        UsersAdminControllerLinkUserApiResponse,
        UsersAdminControllerLinkUserApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/users/link-user`,
          method: "POST",
          body: queryArg.linkedUserDto,
        }),
        invalidatesTags: ["Admin"],
      }),
      usersAdminControllerRemoveLinkUser: build.mutation<
        UsersAdminControllerRemoveLinkUserApiResponse,
        UsersAdminControllerRemoveLinkUserApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/users/remove-link-user/${queryArg.uuid}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Admin"],
      }),
      usersAdminControllerFetch: build.query<
        UsersAdminControllerFetchApiResponse,
        UsersAdminControllerFetchApiArg
      >({
        query: (queryArg) => ({ url: `/api/v1/admin/users/${queryArg.uuid}` }),
        providesTags: ["Admin"],
      }),
      usersAdminControllerDelete: build.mutation<
        UsersAdminControllerDeleteApiResponse,
        UsersAdminControllerDeleteApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/users/${queryArg.uuid}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Admin"],
      }),
      usersAdminControllerUpdate: build.mutation<
        UsersAdminControllerUpdateApiResponse,
        UsersAdminControllerUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/users/${queryArg.uuid}`,
          method: "POST",
          body: queryArg.adminCreateUserDto,
        }),
        invalidatesTags: ["Admin"],
      }),
      usersAdminControllerUserExists: build.query<
        UsersAdminControllerUserExistsApiResponse,
        UsersAdminControllerUserExistsApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/users/${queryArg.username}/exists`,
        }),
        providesTags: ["Admin"],
      }),
      clientsAdminControllerList: build.query<
        ClientsAdminControllerListApiResponse,
        ClientsAdminControllerListApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients`,
          params: {
            page: queryArg.page,
            limit: queryArg.limit,
            name: queryArg.name,
            entityType: queryArg.entityType,
            country: queryArg.country,
          },
        }),
        providesTags: ["Admin"],
      }),
      clientsAdminControllerCreate: build.mutation<
        ClientsAdminControllerCreateApiResponse,
        ClientsAdminControllerCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients`,
          method: "POST",
          body: queryArg.adminCreateUserDto,
        }),
        invalidatesTags: ["Admin"],
      }),
      clientsAdminControllerGetArchivedUsers: build.query<
        ClientsAdminControllerGetArchivedUsersApiResponse,
        ClientsAdminControllerGetArchivedUsersApiArg
      >({
        query: () => ({ url: `/api/v1/admin/clients/archived` }),
        providesTags: ["Admin"],
      }),
      clientsAdminControllerRestoreUser: build.mutation<
        ClientsAdminControllerRestoreUserApiResponse,
        ClientsAdminControllerRestoreUserApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients/${queryArg.uuid}/restore`,
          method: "POST",
        }),
        invalidatesTags: ["Admin"],
      }),
      clientsAdminControllerFetch: build.query<
        ClientsAdminControllerFetchApiResponse,
        ClientsAdminControllerFetchApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients/${queryArg.uuid}`,
        }),
        providesTags: ["Admin"],
      }),
      clientsAdminControllerDelete: build.mutation<
        ClientsAdminControllerDeleteApiResponse,
        ClientsAdminControllerDeleteApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients/${queryArg.uuid}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Admin"],
      }),
      clientsAdminControllerUpdate: build.mutation<
        ClientsAdminControllerUpdateApiResponse,
        ClientsAdminControllerUpdateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients/${queryArg.uuid}`,
          method: "POST",
          body: queryArg.adminCreateUserDto,
        }),
        invalidatesTags: ["Admin"],
      }),
      clientsAdminControllerResetPassword: build.mutation<
        ClientsAdminControllerResetPasswordApiResponse,
        ClientsAdminControllerResetPasswordApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients/${queryArg.uuid}/reset-password`,
          method: "POST",
          body: queryArg.adminResetPasswordDto,
        }),
        invalidatesTags: ["Admin"],
      }),
      clientsAdminControllerUpdateMetadata: build.mutation<
        ClientsAdminControllerUpdateMetadataApiResponse,
        ClientsAdminControllerUpdateMetadataApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients/${queryArg.uuid}/metadata`,
          method: "POST",
          body: queryArg.userMetadataDto,
        }),
        invalidatesTags: ["Admin"],
      }),
      clientsAdminControllerUpdateCurrencyCloudData: build.mutation<
        ClientsAdminControllerUpdateCurrencyCloudDataApiResponse,
        ClientsAdminControllerUpdateCurrencyCloudDataApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients/${queryArg.uuid}/currency-cloud-data`,
          method: "POST",
          body: queryArg.currencyCloudDataDto,
        }),
        invalidatesTags: ["Admin"],
      }),
      clientsAdminControllerCreateOpenPaydLinkedAccount: build.mutation<
        ClientsAdminControllerCreateOpenPaydLinkedAccountApiResponse,
        ClientsAdminControllerCreateOpenPaydLinkedAccountApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients/${queryArg.uuid}/openpayd`,
          method: "POST",
          body: queryArg.openPaydDataDto,
        }),
        invalidatesTags: ["Admin"],
      }),
      clientsAdminControllerApproveDocument: build.mutation<
        ClientsAdminControllerApproveDocumentApiResponse,
        ClientsAdminControllerApproveDocumentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients/${queryArg.owner}/document/${queryArg.uuid}/approve`,
          method: "POST",
        }),
        invalidatesTags: ["Admin"],
      }),
      clientsAdminControllerRejectDocument: build.mutation<
        ClientsAdminControllerRejectDocumentApiResponse,
        ClientsAdminControllerRejectDocumentApiArg
      >({
        query: (queryArg) => ({
          url: `/api/v1/admin/clients/${queryArg.owner}/document/${queryArg.uuid}/reject`,
          method: "POST",
        }),
        invalidatesTags: ["Admin"],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as apiSlice };
export type AuthControllerLoginApiResponse = unknown;
export type AuthControllerLoginApiArg = {
  "User-Agent": string;
  "2fa-token": string;
  loginDto: LoginDto;
};
export type AuthControllerForgotPasswordApiResponse = unknown;
export type AuthControllerForgotPasswordApiArg = {
  forgotDto: ForgotDto;
};
export type TwoFaVerificationControllerSendApiResponse = unknown;
export type TwoFaVerificationControllerSendApiArg = {
  twoFaCodeDto: TwoFaCodeDto;
};
export type TwoFaVerificationControllerCheckApiResponse = unknown;
export type TwoFaVerificationControllerCheckApiArg = {
  "User-Agent": string;
  twoFaCodeCheckDto: TwoFaCodeCheckDto;
};
export type UsersControllerCreateApiResponse = unknown;
export type UsersControllerCreateApiArg = {
  createAccountDto: CreateAccountDto;
};
export type UsersControllerInviteFromAdminApiResponse = unknown;
export type UsersControllerInviteFromAdminApiArg = {
  adminInvitationDto: AdminInvitationDto;
};
export type UsersControllerProfileApiResponse = unknown;
export type UsersControllerProfileApiArg = void;
export type UsersControllerFetchApiResponse = unknown;
export type UsersControllerFetchApiArg = {
  uuid: string;
};
export type UsersControllerUpdateApiResponse = unknown;
export type UsersControllerUpdateApiArg = {
  uuid: string;
  adminCreateUserDto: AdminCreateUserDto;
};
export type UsersControllerAcceptTermsApiResponse = unknown;
export type UsersControllerAcceptTermsApiArg = void;
export type UsersControllerUpdateCurrentUserApiResponse = unknown;
export type UsersControllerUpdateCurrentUserApiArg = void;
export type UsersControllerUpdateDocumentsApiResponse = unknown;
export type UsersControllerUpdateDocumentsApiArg = {
  userDocumentsDto: UserDocumentsDto;
};
export type UsersControllerGetDocumentsApiResponse = unknown;
export type UsersControllerGetDocumentsApiArg = void;
export type UsersControllerRemoveDocumentsApiResponse = unknown;
export type UsersControllerRemoveDocumentsApiArg = {
  userDocumentsDto: UserDocumentsDto;
};
export type UsersControllerVerifyUserApiResponse = unknown;
export type UsersControllerVerifyUserApiArg = {
  username: string;
  verifyEmailDto: VerifyEmailDto;
};
export type UsersControllerResetPasswordApiResponse = unknown;
export type UsersControllerResetPasswordApiArg = {
  resetPasswordDto: ResetPasswordDto;
};
export type UsersControllerPrepare2FaApiResponse = unknown;
export type UsersControllerPrepare2FaApiArg = void;
export type UsersControllerEnable2FaApiResponse = unknown;
export type UsersControllerEnable2FaApiArg = void;
export type UsersControllerDisable2FaApiResponse = unknown;
export type UsersControllerDisable2FaApiArg = void;
export type InvitationsControllerCreateApiResponse = unknown;
export type InvitationsControllerCreateApiArg = {
  invitationDto: InvitationDto;
};
export type InvitationsControllerRequestAccessApiResponse = unknown;
export type InvitationsControllerRequestAccessApiArg = {
  requestAccessDto: RequestAccessDto;
};
export type InvitationsControllerFetchApiResponse = unknown;
export type InvitationsControllerFetchApiArg = {
  uuid: string;
};
export type DocumentsControllerUploadDocumentApiResponse = unknown;
export type DocumentsControllerUploadDocumentApiArg = void;
export type DocumentsControllerDeleteDocumentApiResponse = unknown;
export type DocumentsControllerDeleteDocumentApiArg = {
  uuid: string;
};
export type BeneficiariesControllerCreateApiResponse = unknown;
export type BeneficiariesControllerCreateApiArg = {
  createBeneficiaryDto: CreateBeneficiaryDto;
};
export type BeneficiariesControllerListApiResponse = unknown;
export type BeneficiariesControllerListApiArg = void;
export type BeneficiariesControllerReviewApiResponse = unknown;
export type BeneficiariesControllerReviewApiArg = {
  createBeneficiaryDto: CreateBeneficiaryDto;
};
export type BeneficiariesControllerFetchApiResponse = unknown;
export type BeneficiariesControllerFetchApiArg = {
  uuid: string;
};
export type BeneficiariesControllerUpdateApiResponse = unknown;
export type BeneficiariesControllerUpdateApiArg = {
  uuid: string;
  createBeneficiaryDto: CreateBeneficiaryDto;
};
export type BeneficiariesControllerDeleteApiResponse = unknown;
export type BeneficiariesControllerDeleteApiArg = {
  uuid: string;
};
export type BeneficiariesControllerApproveApiResponse = unknown;
export type BeneficiariesControllerApproveApiArg = {
  uuid: string;
};
export type CurrencyCloudControllerWebhookApiResponse = unknown;
export type CurrencyCloudControllerWebhookApiArg = void;
export type CurrencyCloudControllerBalancesApiResponse = unknown;
export type CurrencyCloudControllerBalancesApiArg = void;
export type CurrencyCloudControllerCurrenciesApiResponse = unknown;
export type CurrencyCloudControllerCurrenciesApiArg = void;
export type CurrencyCloudControllerBeneficiariesApiResponse = unknown;
export type CurrencyCloudControllerBeneficiariesApiArg = {
  currency: string;
};
export type CurrencyCloudControllerPayersApiResponse = unknown;
export type CurrencyCloudControllerPayersApiArg = {
  deletePaymentDto: DeletePaymentDto;
};
export type CurrencyCloudControllerTransactionApiResponse = unknown;
export type CurrencyCloudControllerTransactionApiArg = {
  currency: string;
  settlesAtFrom: string;
  completedAtFrom: string;
  pathPage: number;
  queryPage: number;
  limit: number;
};
export type CurrencyCloudControllerTransactionrefApiResponse = unknown;
export type CurrencyCloudControllerTransactionrefApiArg = {
  shortRef: string;
};
export type CurrencyCloudControllerConversionApiResponse = unknown;
export type CurrencyCloudControllerConversionApiArg = {
  uuid: string;
};
export type CurrencyCloudControllerDateChangeApiResponse = unknown;
export type CurrencyCloudControllerDateChangeApiArg = {
  uuid: string;
  dateChangeDto: DateChangeDto;
};
export type CurrencyCloudControllerSplitPreviewApiResponse = unknown;
export type CurrencyCloudControllerSplitPreviewApiArg = {
  uuid: string;
  splitConversionDto: SplitConversionDto;
};
export type CurrencyCloudControllerSplitApiResponse = unknown;
export type CurrencyCloudControllerSplitApiArg = {
  uuid: string;
  splitConversionDto: SplitConversionDto;
};
export type CurrencyCloudControllerPaymentApiResponse = unknown;
export type CurrencyCloudControllerPaymentApiArg = {
  uuid: string;
};
export type CurrencyCloudControllerBeneficiaryApiResponse = unknown;
export type CurrencyCloudControllerBeneficiaryApiArg = {
  uuid: string;
};
export type CurrencyCloudControllerBankBeneficiaryApiResponse = unknown;
export type CurrencyCloudControllerBankBeneficiaryApiArg = {
  uuid: string;
};
export type CurrencyCloudControllerCurrencyaccountApiResponse = unknown;
export type CurrencyCloudControllerCurrencyaccountApiArg = {
  currency: string;
};
export type CurrencyCloudControllerAccountsApiResponse = unknown;
export type CurrencyCloudControllerAccountsApiArg = {
  page: number;
  limit: number;
};
export type CurrencyCloudControllerCurrentApiResponse = unknown;
export type CurrencyCloudControllerCurrentApiArg = void;
export type CurrencyCloudControllerAccountApiResponse = unknown;
export type CurrencyCloudControllerAccountApiArg = {
  accountId: string;
};
export type CurrencyCloudControllerSenderApiResponse = unknown;
export type CurrencyCloudControllerSenderApiArg = {
  entityId: string;
};
export type CurrencyCloudControllerContactsApiResponse = unknown;
export type CurrencyCloudControllerContactsApiArg = {
  accountId: string;
  page: number;
  limit: number;
};
export type CurrencyCloudControllerAllContactsApiResponse = unknown;
export type CurrencyCloudControllerAllContactsApiArg = {
  page: number;
  limit: number;
};
export type CurrencyCloudControllerContactApiResponse = unknown;
export type CurrencyCloudControllerContactApiArg = {
  contactId: string;
};
export type CurrencyCloudControllerSettleAccountsApiResponse = unknown;
export type CurrencyCloudControllerSettleAccountsApiArg = {
  currency: string;
  accountId: string;
};
export type CurrencyCloudControllerCreateQuoteApiResponse = unknown;
export type CurrencyCloudControllerCreateQuoteApiArg = {
  createCurrencyQuote: CreateCurrencyQuote;
};
export type CurrencyCloudControllerCreateTopUpApiResponse = unknown;
export type CurrencyCloudControllerCreateTopUpApiArg = {
  createCurrencyTopUp: CreateCurrencyTopUp;
};
export type CurrencyCloudControllerValidatePaymentApiResponse = unknown;
export type CurrencyCloudControllerValidatePaymentApiArg = {
  createValidatePayment: CreateValidatePayment;
};
export type CurrencyCloudControllerCreatePaymentApiResponse = unknown;
export type CurrencyCloudControllerCreatePaymentApiArg = {
  createValidatePayment: CreateValidatePayment;
};
export type CurrencyCloudControllerEditPaymentApiResponse = unknown;
export type CurrencyCloudControllerEditPaymentApiArg = {
  createValidatePayment: CreateValidatePayment;
};
export type CurrencyCloudControllerDeletePaymentApiResponse = unknown;
export type CurrencyCloudControllerDeletePaymentApiArg = {
  deletePaymentDto: DeletePaymentDto;
};
export type CurrencyCloudControllerCancelConversionApiResponse = unknown;
export type CurrencyCloudControllerCancelConversionApiArg = {
  deletePaymentDto: DeletePaymentDto;
};
export type CurrencyCloudControllerCreateBeneficiaryApiResponse = unknown;
export type CurrencyCloudControllerCreateBeneficiaryApiArg = {
  createCurrencyBeneficiary: CreateCurrencyBeneficiary;
};
export type CurrencyCloudControllerLoadQuoteApiResponse = unknown;
export type CurrencyCloudControllerLoadQuoteApiArg = {
  buyCurrency: string;
  sellCurrency: string;
  amount: string;
  fixedSide: string;
  date: string;
};
export type CurrencyCloudControllerLoadDeliveryDateApiResponse = unknown;
export type CurrencyCloudControllerLoadDeliveryDateApiArg = {
  deliveryDateDto: DeliveryDateDto;
};
export type CurrencyCloudControllerHolidaysApiResponse = unknown;
export type CurrencyCloudControllerHolidaysApiArg = {
  country: string;
};
export type CurrencyCloudControllerConversionDatesApiResponse = unknown;
export type CurrencyCloudControllerConversionDatesApiArg = {
  pair: string;
};
export type CurrencyCloudControllerPaymentDatesApiResponse = unknown;
export type CurrencyCloudControllerPaymentDatesApiArg = {
  currency: string;
};
export type CurrencyCloudControllerDashboardInfoApiResponse = unknown;
export type CurrencyCloudControllerDashboardInfoApiArg = void;
export type CurrencyCloudControllerSearchTransactionsApiResponse = unknown;
export type CurrencyCloudControllerSearchTransactionsApiArg = void;
export type OpenPaydControllerWebhookApiResponse = unknown;
export type OpenPaydControllerWebhookApiArg = {
  webhookDto: WebhookDto;
};
export type OpenPaydControllerSubaccountsApiResponse = unknown;
export type OpenPaydControllerSubaccountsApiArg = void;
export type OpenPaydControllerBalancesApiResponse = unknown;
export type OpenPaydControllerBalancesApiArg = void;
export type OpenPaydControllerCurrenciesApiResponse = unknown;
export type OpenPaydControllerCurrenciesApiArg = void;
export type OpenPaydControllerBeneficiariesApiResponse = unknown;
export type OpenPaydControllerBeneficiariesApiArg = {
  currency: string;
};
export type OpenPaydControllerRenameLinkedClientApiResponse = unknown;
export type OpenPaydControllerRenameLinkedClientApiArg = {
  renameLinkedClientDto: RenameLinkedClientDto;
};
export type OpenPaydControllerPayersApiResponse = unknown;
export type OpenPaydControllerPayersApiArg = {
  deletePaymentDto: DeletePaymentDto;
};
export type OpenPaydControllerTransactionApiResponse = unknown;
export type OpenPaydControllerTransactionApiArg = {
  accountId: string;
  currency: string;
  settlesAtFrom: string;
  completedAtFrom: string;
  pathPage: number;
  queryPage: number;
  limit: number;
};
export type OpenPaydControllerTransactionrefApiResponse = unknown;
export type OpenPaydControllerTransactionrefApiArg = {
  shortRef: string;
};
export type OpenPaydControllerConversionApiResponse = unknown;
export type OpenPaydControllerConversionApiArg = {
  uuid: string;
};
export type OpenPaydControllerDateChangeApiResponse = unknown;
export type OpenPaydControllerDateChangeApiArg = {
  uuid: string;
  dateChangeDto: DateChangeDto;
};
export type OpenPaydControllerSplitPreviewApiResponse = unknown;
export type OpenPaydControllerSplitPreviewApiArg = {
  uuid: string;
  splitConversionDto: SplitConversionDto;
};
export type OpenPaydControllerSplitApiResponse = unknown;
export type OpenPaydControllerSplitApiArg = {
  uuid: string;
  splitConversionDto: SplitConversionDto;
};
export type OpenPaydControllerPaymentApiResponse = unknown;
export type OpenPaydControllerPaymentApiArg = {
  uuid: string;
};
export type OpenPaydControllerBeneficiaryApiResponse = unknown;
export type OpenPaydControllerBeneficiaryApiArg = {
  uuid: string;
};
export type OpenPaydControllerBankBeneficiaryApiResponse = unknown;
export type OpenPaydControllerBankBeneficiaryApiArg = {
  uuid: string;
};
export type OpenPaydControllerCurrencyaccountApiResponse = unknown;
export type OpenPaydControllerCurrencyaccountApiArg = {
  currency: string;
};
export type OpenPaydControllerAccountsApiResponse = unknown;
export type OpenPaydControllerAccountsApiArg = {
  page: number;
  limit: number;
};
export type OpenPaydControllerCurrentApiResponse = unknown;
export type OpenPaydControllerCurrentApiArg = void;
export type OpenPaydControllerAccountApiResponse = unknown;
export type OpenPaydControllerAccountApiArg = {
  accountId: string;
};
export type OpenPaydControllerSenderApiResponse = unknown;
export type OpenPaydControllerSenderApiArg = {
  entityId: string;
};
export type OpenPaydControllerContactsApiResponse = unknown;
export type OpenPaydControllerContactsApiArg = {
  accountId: string;
  page: number;
  limit: number;
};
export type OpenPaydControllerContactApiResponse = unknown;
export type OpenPaydControllerContactApiArg = {
  contactId: string;
};
export type OpenPaydControllerSettleAccountsApiResponse = unknown;
export type OpenPaydControllerSettleAccountsApiArg = {
  currency: string;
  accountId: string;
};
export type OpenPaydControllerCreateQuoteApiResponse = unknown;
export type OpenPaydControllerCreateQuoteApiArg = {
  createCurrencyQuote: CreateCurrencyQuote;
};
export type OpenPaydControllerCreateTopUpApiResponse = unknown;
export type OpenPaydControllerCreateTopUpApiArg = {
  createCurrencyTopUp: CreateCurrencyTopUp;
};
export type OpenPaydControllerGetFeesApiResponse = unknown;
export type OpenPaydControllerGetFeesApiArg = {
  createValidatePayment: CreateValidatePayment;
};
export type OpenPaydControllerValidatePaymentApiResponse = unknown;
export type OpenPaydControllerValidatePaymentApiArg = {
  createValidatePayment: CreateValidatePayment;
};
export type OpenPaydControllerCreatePaymentApiResponse = unknown;
export type OpenPaydControllerCreatePaymentApiArg = {
  createValidatePayment: CreateValidatePayment;
};
export type OpenPaydControllerEditPaymentApiResponse = unknown;
export type OpenPaydControllerEditPaymentApiArg = {
  createValidatePayment: CreateValidatePayment;
};
export type OpenPaydControllerDeletePaymentApiResponse = unknown;
export type OpenPaydControllerDeletePaymentApiArg = {
  deletePaymentDto: DeletePaymentDto;
};
export type OpenPaydControllerCancelConversionApiResponse = unknown;
export type OpenPaydControllerCancelConversionApiArg = {
  deletePaymentDto: DeletePaymentDto;
};
export type OpenPaydControllerCreateBeneficiaryApiResponse = unknown;
export type OpenPaydControllerCreateBeneficiaryApiArg = void;
export type OpenPaydControllerLoadQuoteApiResponse = unknown;
export type OpenPaydControllerLoadQuoteApiArg = {
  buyCurrency: string;
  sellCurrency: string;
  amount: string;
  fixedSide: string;
  date: string;
};
export type OpenPaydControllerLoadDeliveryDateApiResponse = unknown;
export type OpenPaydControllerLoadDeliveryDateApiArg = {
  deliveryDateDto: DeliveryDateDto;
};
export type OpenPaydControllerHolidaysApiResponse = unknown;
export type OpenPaydControllerHolidaysApiArg = {
  country: string;
};
export type OpenPaydControllerDashboardInfoApiResponse = unknown;
export type OpenPaydControllerDashboardInfoApiArg = void;
export type OpenPaydControllerSearchTransactionsApiResponse = unknown;
export type OpenPaydControllerSearchTransactionsApiArg = void;
export type TransactionsControllerFetchApiResponse = unknown;
export type TransactionsControllerFetchApiArg = {
  uuid: string;
};
export type TransactionsControllerSearchTransactionsApiResponse = unknown;
export type TransactionsControllerSearchTransactionsApiArg = void;
export type UsersAdminControllerListApiResponse = unknown;
export type UsersAdminControllerListApiArg = {
  page: number;
  limit: number;
  roles: "user:admin" | "user:viewer" | "user:team" | "admin:super";
};
export type UsersAdminControllerCreateApiResponse = unknown;
export type UsersAdminControllerCreateApiArg = {
  adminCreateUserDto: AdminCreateUserDto;
};
export type UsersAdminControllerLinkUserApiResponse = unknown;
export type UsersAdminControllerLinkUserApiArg = {
  linkedUserDto: LinkedUserDto;
};
export type UsersAdminControllerRemoveLinkUserApiResponse = unknown;
export type UsersAdminControllerRemoveLinkUserApiArg = {
  uuid: string;
};
export type UsersAdminControllerFetchApiResponse = unknown;
export type UsersAdminControllerFetchApiArg = {
  uuid: string;
};
export type UsersAdminControllerDeleteApiResponse = unknown;
export type UsersAdminControllerDeleteApiArg = {
  uuid: string;
};
export type UsersAdminControllerUpdateApiResponse = unknown;
export type UsersAdminControllerUpdateApiArg = {
  uuid: string;
  adminCreateUserDto: AdminCreateUserDto;
};
export type UsersAdminControllerUserExistsApiResponse = unknown;
export type UsersAdminControllerUserExistsApiArg = {
  username: string;
};
export type ClientsAdminControllerListApiResponse = unknown;
export type ClientsAdminControllerListApiArg = {
  page: number;
  limit: number;
  name: string;
  entityType: string;
  country: string;
};
export type ClientsAdminControllerCreateApiResponse = unknown;
export type ClientsAdminControllerCreateApiArg = {
  adminCreateUserDto: AdminCreateUserDto;
};
export type ClientsAdminControllerGetArchivedUsersApiResponse = unknown;
export type ClientsAdminControllerGetArchivedUsersApiArg = void;
export type ClientsAdminControllerRestoreUserApiResponse = unknown;
export type ClientsAdminControllerRestoreUserApiArg = {
  uuid: string;
};
export type ClientsAdminControllerFetchApiResponse = unknown;
export type ClientsAdminControllerFetchApiArg = {
  uuid: string;
};
export type ClientsAdminControllerDeleteApiResponse = unknown;
export type ClientsAdminControllerDeleteApiArg = {
  uuid: string;
};
export type ClientsAdminControllerUpdateApiResponse = unknown;
export type ClientsAdminControllerUpdateApiArg = {
  uuid: string;
  adminCreateUserDto: AdminCreateUserDto;
};
export type ClientsAdminControllerResetPasswordApiResponse = unknown;
export type ClientsAdminControllerResetPasswordApiArg = {
  uuid: string;
  adminResetPasswordDto: AdminResetPasswordDto;
};
export type ClientsAdminControllerUpdateMetadataApiResponse = unknown;
export type ClientsAdminControllerUpdateMetadataApiArg = {
  uuid: string;
  userMetadataDto: UserMetadataDto;
};
export type ClientsAdminControllerUpdateCurrencyCloudDataApiResponse = unknown;
export type ClientsAdminControllerUpdateCurrencyCloudDataApiArg = {
  uuid: string;
  currencyCloudDataDto: CurrencyCloudDataDto;
};
export type ClientsAdminControllerCreateOpenPaydLinkedAccountApiResponse =
  unknown;
export type ClientsAdminControllerCreateOpenPaydLinkedAccountApiArg = {
  uuid: string;
  openPaydDataDto: OpenPaydDataDto;
};
export type ClientsAdminControllerApproveDocumentApiResponse = unknown;
export type ClientsAdminControllerApproveDocumentApiArg = {
  owner: string;
  uuid: string;
};
export type ClientsAdminControllerRejectDocumentApiResponse = unknown;
export type ClientsAdminControllerRejectDocumentApiArg = {
  owner: string;
  uuid: string;
};
export type LoginDto = {
  username: string;
  password: string;
  r: string;
};
export type ForgotDto = {
  email: string;
};
export type TwoFaCodeDto = {};
export type TwoFaCodeCheckDto = {};
export type CreateAccountDto = {
  firstname: string;
  lastname: string;
  dob: string;
  email: string;
  entityType: string;
  country: string;
  mobileNumber: string;
  verificationCode: string;
  businessRole: string;
  invitationUuid: string;
  invitationCode: string;
  companyType: string;
  password: string;
};
export type AdminInvitationDto = {
  password: string;
  confirmPassword: string;
  invitation: string;
  code: string;
};
export type AdminCreateUserDto = {
  firstname: string;
  lastname: string;
  email: string;
  entityType: string;
  country: string;
  mobileNumber: string;
  businessRole: string;
  password: string;
  role: ("user:admin" | "user:viewer" | "user:team" | "admin:super") | null;
  companyType:
    | "LIMITED_LIABILITY"
    | "SOLE_TRADER"
    | "PARTNERSHIP"
    | "CHARITY"
    | "JOINT_STOCK_COMPANY"
    | "PUBLIC_LIMITED_COMPANY";
  verifiedAt: string;
  invitedBy: string;
  skipWelcomeEmail: boolean;
};
export type UserDocumentsDto = {
  documents: string[];
};
export type VerifyEmailDto = {
  code: string;
};
export type ResetPasswordDto = {
  currentPassword: string;
  password: string;
  confirmPassword: string;
};
export type InvitationDto = {
  firstname: string;
  lastname: string;
  email: string;
  userRole: "user:admin" | "user:viewer" | "user:team" | "admin:super";
};
export type RequestAccessDto = {
  firstname: string;
  lastname: string;
  email: string;
  mobileNumber: string;
};
export type CreateBeneficiaryDto = {
  firstname: string;
  lastname: string;
  entityType: string;
  currency: string;
  paymentType: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  companyName: string;
  bankCountry: string;
  accountNumber: string;
  sortCode: string;
  IBAN: string;
  bicSwift: string;
};
export type DeletePaymentDto = {
  uuid: string;
};
export type DateChangeDto = {
  new_settlement_date: string;
};
export type SplitConversionDto = {
  amount: string;
};
export type CreateCurrencyQuote = {
  buy_currency: string;
  sell_currency: string;
  fixed_side: string;
  amount: string;
  conversion_date: string;
  term_agreement: boolean;
  quoteId: string;
  buy_account_id: string;
  sell_account_id: string;
};
export type CreateCurrencyTopUp = {
  currency: string;
  amount: string;
};
export type CreateValidatePayment = {
  id: string;
  currency: string;
  beneficiary_id: string;
  amount: string;
  reason: string;
  purpose_code: string;
  reference: string;
  payment_type: string;
  payment_types: string[];
  payment_date: string;
  conversion_id: string;
  payer_entity_type: string;
  payer_company_name: string;
  payer_first_name: string;
  payer_last_name: string;
  payer_city: string;
  payer_address: string;
  payer_country: string;
  payer_date_of_birth: string;
  account_id: string;
};
export type CreateCurrencyBeneficiary = {
  name: string;
  bank_account_holder_name: string;
  bank_country: string;
  currency: string;
};
export type DeliveryDateDto = {
  currency: string;
  bank_country: string;
  payment_date: string;
  payment_type: string;
};
export type SourceInfoDto = {};
export type WebhookAmountDto = {};
export type WebhookDto = {
  accountId: string;
  createdAt: string;
  type: string;
  shortId: string;
  status: string;
  accountHolderId: string;
  sourceInfo: SourceInfoDto;
  destinationInfo: SourceInfoDto;
  amount: WebhookAmountDto;
  buyAmount: WebhookAmountDto;
  paymentType: string;
  fixedSide: string;
  transactionId: string;
  fee: WebhookAmountDto;
  reference: string;
  comment: string;
  fxRate: string;
  source: string;
  destination: string;
  senderIban: string;
  senderBic: string;
  senderAccountNumber: string;
  senderName: string;
  senderAddress: string;
  senderInformation: string;
  routingCodeEntries: string[];
  senderRoutingCodeValue: string;
};
export type RenameLinkedClientDto = {
  id: string;
  name: string;
};
export type LinkedUserDto = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  account_uuid: string;
  uuid: string;
  linked_user_uuid: string;
  role: string;
  country: string;
};
export type AdminResetPasswordDto = {
  newPassword: string;
  confirmPassword: string;
};
export type BusinessMetadataDto = {
  companyName: string;
  tradingName: string;
  websiteUrl: string;
  otherContactInfo: string;
  natureOfBusiness: string;
  companyRegistrationNumber: string;
  isVatRegistered: boolean;
  vatNumber: string;
  companyType: string;
  isPubliclyTrading: boolean;
  stockMarketLocation: string;
  stockMarket: string;
  isRegulated: boolean;
  regulatorName: string;
  legalEntity: string;
  email: string;
  otherTradingNames: string;
  countryOfRegistration: string;
  dateOfRegistration: string;
  telephoneNumber: string;
  dateOfIncorporation: string;
  statutoryProvision: string;
  registeredOffice1: string;
  registeredOffice1_address2: string;
  registeredOffice1_city: string;
  registeredOffice1_postcode: string;
  registeredOffice1_state: string;
  registeredOffice2: string;
  registeredOffice3: string;
  principalPlace: string;
  mailingAddress: string;
  address1: string;
  address2: string;
  previousOffice1: string;
  previousOffice2: string;
  previousOffice3: string;
  expectedActivity: string;
  expectedVolume: string;
};
export type IndividualMetadataDto = {
  title: "Mr." | "Mrs." | "Miss" | "Ms.";
  firstname: string;
  lastname: string;
  formerName: string;
  otherName: string;
  dateOfBirth: string;
  placeOfBirth: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  postcode: string;
  state: string;
  country: string;
  previousAddressLine1: string;
  previousAddressLine2: string;
  previousCity: string;
  previousPostcode: string;
  previousCountry: string;
  previousState: string;
  nationality: string;
  gender: "male" | "female" | "other";
  identificationNumber: string;
  identificationType:
    | ""
    | "drivers_license"
    | "social_security_number"
    | "green_card"
    | "passport"
    | "visa"
    | "matricula_consular"
    | "registro_federal_de_contribuyentes"
    | "clave_unica_de_registro_de_poblacion"
    | "credential_de_elector"
    | "social_insurance_number"
    | "citizenship_papers"
    | "drivers_license_canadian"
    | "existing_credit_card_details"
    | "employer_identification_number"
    | "national_id"
    | "incorporation_number"
    | "others";
  occupation: string;
  employerName: string;
  employerAddress1: string;
  employerAddress2: string;
  employerAddress3: string;
  publicPosition: string;
  highProfilePosition: string;
};
export type BankMetadataDto = {
  bankName: string;
  branch: string;
  bankCountry: string;
  accountHolderName: string;
  sortCode: string;
  accountNumber: string;
  IBAN: string;
  bicSwift: string;
  currency: string;
};
export type RiskAssessmentDto = {
  sanction: string;
  rating: string;
  apply: string;
  aml: string;
  sanctionedJurisdiction: string;
  highRiskJurisdiction: string;
  thirdParty: string;
  understood: string;
  materialConnection: string;
  sensitiveActivity: string;
  volume: string;
  transactions: string;
  knowledge: string;
  pep: string;
  adverseInformation: string;
  riskRating: string;
  completedBy: string;
  completionDate: string;
  director: string;
  approvalDate: string;
  notes: string;
  clientName: string;
  known: string;
  yearsKnown: string;
  metFace: string;
  numberOfBeneficialOwners: string;
  applicantForBusiness: string;
  classifyAsPep: string;
  automaticallyHigh: string;
  sanctionedCorporate: string;
  highRiskCorporate: string;
  highestRisk: string;
  publicOrWholly: string;
  bearer: string;
  ownershipInfo: string;
  clientEntityApply: string;
  considerWhere: string;
  principalAreaSanction: string;
  principalAreaRisk: string;
  principalAreaApply: string;
  businessPurpose: string;
  businessPurposeOptions: string;
  highRiskActivity: string;
  activityRegulated: string;
  valueOfEntity: string;
};
export type FeesDto = {
  conversion_amount: string | null;
  conversion_currency: string | null;
  SEPA_amount: string | null;
  SEPA_currency: string | null;
  SEPA_INSTANT_amount: string | null;
  SEPA_INSTANT_currency: string | null;
  TARGET2_amount: string | null;
  TARGET2_currency: string | null;
  SWIFT_amount: string | null;
  SWIFT_currency: string | null;
  CHAPS_amount: string | null;
  CHAPS_currency: string | null;
  FASTER_PAYMENTS_amount: string | null;
  FASTER_PAYMENTS_currency: string | null;
};
export type UserMetadataDto = {
  businessMetadata: BusinessMetadataDto;
  individualMetadata: IndividualMetadataDto;
  bankMetadata: BankMetadataDto;
  riskAssessment: RiskAssessmentDto;
  fees: FeesDto;
  brokers: any[];
  directors: any[];
  shareholders: any[];
  expectedVolumeOfTransactions: string;
  expectedValueOfTurnover: string;
  partial: string;
  isApproved: boolean;
};
export type CurrencyCloudDataDto = {
  contactId: string;
};
export type OpenPaydDataDto = {
  contactId: string;
};
export const {
  useAuthControllerLoginMutation,
  useAuthControllerForgotPasswordMutation,
  useTwoFaVerificationControllerSendMutation,
  useTwoFaVerificationControllerCheckMutation,
  useUsersControllerCreateMutation,
  useUsersControllerInviteFromAdminMutation,
  useUsersControllerProfileQuery,
  useUsersControllerFetchQuery,
  useUsersControllerUpdateMutation,
  useUsersControllerAcceptTermsMutation,
  useUsersControllerUpdateCurrentUserMutation,
  useUsersControllerUpdateDocumentsMutation,
  useUsersControllerGetDocumentsQuery,
  useUsersControllerRemoveDocumentsMutation,
  useUsersControllerVerifyUserMutation,
  useUsersControllerResetPasswordMutation,
  useUsersControllerPrepare2FaMutation,
  useUsersControllerEnable2FaMutation,
  useUsersControllerDisable2FaMutation,
  useInvitationsControllerCreateMutation,
  useInvitationsControllerRequestAccessMutation,
  useInvitationsControllerFetchQuery,
  useDocumentsControllerUploadDocumentMutation,
  useDocumentsControllerDeleteDocumentMutation,
  useBeneficiariesControllerCreateMutation,
  useBeneficiariesControllerListQuery,
  useBeneficiariesControllerReviewMutation,
  useBeneficiariesControllerFetchQuery,
  useBeneficiariesControllerUpdateMutation,
  useBeneficiariesControllerDeleteMutation,
  useBeneficiariesControllerApproveMutation,
  useCurrencyCloudControllerWebhookMutation,
  useCurrencyCloudControllerBalancesQuery,
  useCurrencyCloudControllerCurrenciesQuery,
  useCurrencyCloudControllerBeneficiariesQuery,
  useCurrencyCloudControllerPayersMutation,
  useCurrencyCloudControllerTransactionQuery,
  useCurrencyCloudControllerTransactionrefQuery,
  useCurrencyCloudControllerConversionQuery,
  useCurrencyCloudControllerDateChangeMutation,
  useCurrencyCloudControllerSplitPreviewMutation,
  useCurrencyCloudControllerSplitMutation,
  useCurrencyCloudControllerPaymentQuery,
  useCurrencyCloudControllerBeneficiaryQuery,
  useCurrencyCloudControllerBankBeneficiaryQuery,
  useCurrencyCloudControllerCurrencyaccountQuery,
  useCurrencyCloudControllerAccountsQuery,
  useCurrencyCloudControllerCurrentQuery,
  useCurrencyCloudControllerAccountQuery,
  useCurrencyCloudControllerSenderQuery,
  useCurrencyCloudControllerContactsQuery,
  useCurrencyCloudControllerAllContactsQuery,
  useCurrencyCloudControllerContactQuery,
  useCurrencyCloudControllerSettleAccountsQuery,
  useCurrencyCloudControllerCreateQuoteMutation,
  useCurrencyCloudControllerCreateTopUpMutation,
  useCurrencyCloudControllerValidatePaymentMutation,
  useCurrencyCloudControllerCreatePaymentMutation,
  useCurrencyCloudControllerEditPaymentMutation,
  useCurrencyCloudControllerDeletePaymentMutation,
  useCurrencyCloudControllerCancelConversionMutation,
  useCurrencyCloudControllerCreateBeneficiaryMutation,
  useCurrencyCloudControllerLoadQuoteQuery,
  useCurrencyCloudControllerLoadDeliveryDateMutation,
  useCurrencyCloudControllerHolidaysQuery,
  useCurrencyCloudControllerConversionDatesQuery,
  useCurrencyCloudControllerPaymentDatesQuery,
  useCurrencyCloudControllerDashboardInfoQuery,
  useCurrencyCloudControllerSearchTransactionsQuery,
  useOpenPaydControllerWebhookMutation,
  useOpenPaydControllerSubaccountsQuery,
  useOpenPaydControllerBalancesQuery,
  useOpenPaydControllerCurrenciesQuery,
  useOpenPaydControllerBeneficiariesQuery,
  useOpenPaydControllerRenameLinkedClientMutation,
  useOpenPaydControllerPayersMutation,
  useOpenPaydControllerTransactionQuery,
  useOpenPaydControllerTransactionrefQuery,
  useOpenPaydControllerConversionQuery,
  useOpenPaydControllerDateChangeMutation,
  useOpenPaydControllerSplitPreviewMutation,
  useOpenPaydControllerSplitMutation,
  useOpenPaydControllerPaymentQuery,
  useOpenPaydControllerBeneficiaryQuery,
  useOpenPaydControllerBankBeneficiaryQuery,
  useOpenPaydControllerCurrencyaccountQuery,
  useOpenPaydControllerAccountsQuery,
  useOpenPaydControllerCurrentQuery,
  useOpenPaydControllerAccountQuery,
  useOpenPaydControllerSenderQuery,
  useOpenPaydControllerContactsQuery,
  useOpenPaydControllerContactQuery,
  useOpenPaydControllerSettleAccountsQuery,
  useOpenPaydControllerCreateQuoteMutation,
  useOpenPaydControllerCreateTopUpMutation,
  useOpenPaydControllerGetFeesMutation,
  useOpenPaydControllerValidatePaymentMutation,
  useOpenPaydControllerCreatePaymentMutation,
  useOpenPaydControllerEditPaymentMutation,
  useOpenPaydControllerDeletePaymentMutation,
  useOpenPaydControllerCancelConversionMutation,
  useOpenPaydControllerCreateBeneficiaryMutation,
  useOpenPaydControllerLoadQuoteQuery,
  useOpenPaydControllerLoadDeliveryDateMutation,
  useOpenPaydControllerHolidaysQuery,
  useOpenPaydControllerDashboardInfoQuery,
  useOpenPaydControllerSearchTransactionsQuery,
  useTransactionsControllerFetchQuery,
  useTransactionsControllerSearchTransactionsQuery,
  useUsersAdminControllerListQuery,
  useUsersAdminControllerCreateMutation,
  useUsersAdminControllerLinkUserMutation,
  useUsersAdminControllerRemoveLinkUserMutation,
  useUsersAdminControllerFetchQuery,
  useUsersAdminControllerDeleteMutation,
  useUsersAdminControllerUpdateMutation,
  useUsersAdminControllerUserExistsQuery,
  useClientsAdminControllerListQuery,
  useClientsAdminControllerCreateMutation,
  useClientsAdminControllerGetArchivedUsersQuery,
  useClientsAdminControllerRestoreUserMutation,
  useClientsAdminControllerFetchQuery,
  useClientsAdminControllerDeleteMutation,
  useClientsAdminControllerUpdateMutation,
  useClientsAdminControllerResetPasswordMutation,
  useClientsAdminControllerUpdateMetadataMutation,
  useClientsAdminControllerUpdateCurrencyCloudDataMutation,
  useClientsAdminControllerCreateOpenPaydLinkedAccountMutation,
  useClientsAdminControllerApproveDocumentMutation,
  useClientsAdminControllerRejectDocumentMutation,
} = injectedRtkApi;
