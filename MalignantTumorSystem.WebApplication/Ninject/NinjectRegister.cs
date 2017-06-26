 
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.BLL;
using MalignantTumorSystem.IDAL;
using MalignantTumorSystem.DAL;

namespace MalignantTumorSystem.WebApplication.Ninject
{
    public partial class NinjectRegister
    {
        private static readonly IKernel Kernel;
        static NinjectRegister()
        {
            Kernel = new StandardKernel();
            AddBindings();
        }

        public static void RegisterFovMvc()
        {
            DependencyResolver.SetResolver(new NinjectDependencyResolverForMvc(Kernel));
        }

        public static void RegisterFovWebApi(HttpConfiguration config)
        {
            config.DependencyResolver = new NinjectDependencyResolverForWebApi(Kernel);
        }
        //绑定接口实现
        private static void AddBindings()
        {
           Kernel.Bind<IBasicInformationService>().To<BasicInformationService>();
		
            Kernel.Bind<IComm_Platform_WorkerDal>().To<Comm_Platform_WorkerDal>();
	        Kernel.Bind<IComm_Platform_WorkerService>().To<Comm_Platform_WorkerService>();
		
            Kernel.Bind<IMT_RoleInfoDal>().To<MT_RoleInfoDal>();
	        Kernel.Bind<IMT_RoleInfoService>().To<MT_RoleInfoService>();
		
            Kernel.Bind<IMT_WorkerRoleInfoDal>().To<MT_WorkerRoleInfoDal>();
	        Kernel.Bind<IMT_WorkerRoleInfoService>().To<MT_WorkerRoleInfoService>();
		
            Kernel.Bind<IShare_ProvinceDal>().To<Share_ProvinceDal>();
	        Kernel.Bind<IShare_ProvinceService>().To<Share_ProvinceService>();
		
            Kernel.Bind<IShare_CityDal>().To<Share_CityDal>();
	        Kernel.Bind<IShare_CityService>().To<Share_CityService>();
		
            Kernel.Bind<IShare_CountyDal>().To<Share_CountyDal>();
	        Kernel.Bind<IShare_CountyService>().To<Share_CountyService>();
		
            Kernel.Bind<IShare_StreetDal>().To<Share_StreetDal>();
	        Kernel.Bind<IShare_StreetService>().To<Share_StreetService>();
		
            Kernel.Bind<IShare_CommunityInfoDal>().To<Share_CommunityInfoDal>();
	        Kernel.Bind<IShare_CommunityInfoService>().To<Share_CommunityInfoService>();
		
            Kernel.Bind<IComm_TumourDal>().To<Comm_TumourDal>();
	        Kernel.Bind<IComm_TumourService>().To<Comm_TumourService>();
		
            Kernel.Bind<IComm_ResidentFileDal>().To<Comm_ResidentFileDal>();
	        Kernel.Bind<IComm_ResidentFileService>().To<Comm_ResidentFileService>();
		
            Kernel.Bind<IComm_ResidentFile_Followup_DiseaseDal>().To<Comm_ResidentFile_Followup_DiseaseDal>();
	        Kernel.Bind<IComm_ResidentFile_Followup_DiseaseService>().To<Comm_ResidentFile_Followup_DiseaseService>();
		
            Kernel.Bind<IComm_ResidentFile_Followup_SurgeryDal>().To<Comm_ResidentFile_Followup_SurgeryDal>();
	        Kernel.Bind<IComm_ResidentFile_Followup_SurgeryService>().To<Comm_ResidentFile_Followup_SurgeryService>();
		
            Kernel.Bind<IComm_ResidentFile_Followup_TraumaDal>().To<Comm_ResidentFile_Followup_TraumaDal>();
	        Kernel.Bind<IComm_ResidentFile_Followup_TraumaService>().To<Comm_ResidentFile_Followup_TraumaService>();
		
            Kernel.Bind<IComm_ResidentFile_Followup_Blood_TransfusionDal>().To<Comm_ResidentFile_Followup_Blood_TransfusionDal>();
	        Kernel.Bind<IComm_ResidentFile_Followup_Blood_TransfusionService>().To<Comm_ResidentFile_Followup_Blood_TransfusionService>();
		
            Kernel.Bind<IComm_ResidentFile_Followup_Family_DiseaseDal>().To<Comm_ResidentFile_Followup_Family_DiseaseDal>();
	        Kernel.Bind<IComm_ResidentFile_Followup_Family_DiseaseService>().To<Comm_ResidentFile_Followup_Family_DiseaseService>();
		
            Kernel.Bind<IChronic_disease_SmokeAndDrinkDal>().To<Chronic_disease_SmokeAndDrinkDal>();
	        Kernel.Bind<IChronic_disease_SmokeAndDrinkService>().To<Chronic_disease_SmokeAndDrinkService>();
		
            Kernel.Bind<IComm_EHR_AbstractDal>().To<Comm_EHR_AbstractDal>();
	        Kernel.Bind<IComm_EHR_AbstractService>().To<Comm_EHR_AbstractService>();
		
            Kernel.Bind<IComm_ResidentFile_Change_AddressDal>().To<Comm_ResidentFile_Change_AddressDal>();
	        Kernel.Bind<IComm_ResidentFile_Change_AddressService>().To<Comm_ResidentFile_Change_AddressService>();
		
            Kernel.Bind<IShare_DataDictionaryDal>().To<Share_DataDictionaryDal>();
	        Kernel.Bind<IShare_DataDictionaryService>().To<Share_DataDictionaryService>();
		
            Kernel.Bind<IChronic_disease_Diabetes_familyDal>().To<Chronic_disease_Diabetes_familyDal>();
	        Kernel.Bind<IChronic_disease_Diabetes_familyService>().To<Chronic_disease_Diabetes_familyService>();
		
            Kernel.Bind<IChronic_disease_Diabetes_family_relationDal>().To<Chronic_disease_Diabetes_family_relationDal>();
	        Kernel.Bind<IChronic_disease_Diabetes_family_relationService>().To<Chronic_disease_Diabetes_family_relationService>();
		
            Kernel.Bind<IChronic_disease_DailyLifeDal>().To<Chronic_disease_DailyLifeDal>();
	        Kernel.Bind<IChronic_disease_DailyLifeService>().To<Chronic_disease_DailyLifeService>();
		
            Kernel.Bind<IChronic_disease_PhysicalExerciseDal>().To<Chronic_disease_PhysicalExerciseDal>();
	        Kernel.Bind<IChronic_disease_PhysicalExerciseService>().To<Chronic_disease_PhysicalExerciseService>();
		
            Kernel.Bind<IChronic_disease_PhysicalExercise_AddDal>().To<Chronic_disease_PhysicalExercise_AddDal>();
	        Kernel.Bind<IChronic_disease_PhysicalExercise_AddService>().To<Chronic_disease_PhysicalExercise_AddService>();
		
            Kernel.Bind<IICD_10_oldDal>().To<ICD_10_oldDal>();
	        Kernel.Bind<IICD_10_oldService>().To<ICD_10_oldService>();
		
            Kernel.Bind<IChronic_disease_Comm_MedicineDal>().To<Chronic_disease_Comm_MedicineDal>();
	        Kernel.Bind<IChronic_disease_Comm_MedicineService>().To<Chronic_disease_Comm_MedicineService>();
		
            Kernel.Bind<IChronic_disease_Data_DiseaseNameDal>().To<Chronic_disease_Data_DiseaseNameDal>();
	        Kernel.Bind<IChronic_disease_Data_DiseaseNameService>().To<Chronic_disease_Data_DiseaseNameService>();
		
            Kernel.Bind<IChronic_disease_Comm_DiagnosticDal>().To<Chronic_disease_Comm_DiagnosticDal>();
	        Kernel.Bind<IChronic_disease_Comm_DiagnosticService>().To<Chronic_disease_Comm_DiagnosticService>();
		
            Kernel.Bind<IChronic_disease_OutpatientDal>().To<Chronic_disease_OutpatientDal>();
	        Kernel.Bind<IChronic_disease_OutpatientService>().To<Chronic_disease_OutpatientService>();
		
            Kernel.Bind<IChronic_disease_Comm_MedicationDal>().To<Chronic_disease_Comm_MedicationDal>();
	        Kernel.Bind<IChronic_disease_Comm_MedicationService>().To<Chronic_disease_Comm_MedicationService>();
		
            Kernel.Bind<IChronic_disease_Outpatient_JudgeDal>().To<Chronic_disease_Outpatient_JudgeDal>();
	        Kernel.Bind<IChronic_disease_Outpatient_JudgeService>().To<Chronic_disease_Outpatient_JudgeService>();
		
            Kernel.Bind<IChronic_disease_Outpatient_PrescriptionDal>().To<Chronic_disease_Outpatient_PrescriptionDal>();
	        Kernel.Bind<IChronic_disease_Outpatient_PrescriptionService>().To<Chronic_disease_Outpatient_PrescriptionService>();
		
            Kernel.Bind<IChronic_disease_Outpatient_AccessoryExaminationDal>().To<Chronic_disease_Outpatient_AccessoryExaminationDal>();
	        Kernel.Bind<IChronic_disease_Outpatient_AccessoryExaminationService>().To<Chronic_disease_Outpatient_AccessoryExaminationService>();
		
            Kernel.Bind<IChronic_disease_Comm_MedicationAddDal>().To<Chronic_disease_Comm_MedicationAddDal>();
	        Kernel.Bind<IChronic_disease_Comm_MedicationAddService>().To<Chronic_disease_Comm_MedicationAddService>();
		
            Kernel.Bind<IChronic_disease_HospitalizationDal>().To<Chronic_disease_HospitalizationDal>();
	        Kernel.Bind<IChronic_disease_HospitalizationService>().To<Chronic_disease_HospitalizationService>();
		
            Kernel.Bind<IChronic_disease_Hospitalization_ConsultationRecordDal>().To<Chronic_disease_Hospitalization_ConsultationRecordDal>();
	        Kernel.Bind<IChronic_disease_Hospitalization_ConsultationRecordService>().To<Chronic_disease_Hospitalization_ConsultationRecordService>();
		
            Kernel.Bind<IChronic_disease_Hospitalization_CourseRecordDal>().To<Chronic_disease_Hospitalization_CourseRecordDal>();
	        Kernel.Bind<IChronic_disease_Hospitalization_CourseRecordService>().To<Chronic_disease_Hospitalization_CourseRecordService>();
		
            Kernel.Bind<IChronic_disease_Hospitalization_ExpensesDal>().To<Chronic_disease_Hospitalization_ExpensesDal>();
	        Kernel.Bind<IChronic_disease_Hospitalization_ExpensesService>().To<Chronic_disease_Hospitalization_ExpensesService>();
		
            Kernel.Bind<IChronic_disease_Hospitalization_DischargeAbstractDal>().To<Chronic_disease_Hospitalization_DischargeAbstractDal>();
	        Kernel.Bind<IChronic_disease_Hospitalization_DischargeAbstractService>().To<Chronic_disease_Hospitalization_DischargeAbstractService>();
		
            Kernel.Bind<IChronic_disease_Hospitalization_DischargeAbstract_AdviceDal>().To<Chronic_disease_Hospitalization_DischargeAbstract_AdviceDal>();
	        Kernel.Bind<IChronic_disease_Hospitalization_DischargeAbstract_AdviceService>().To<Chronic_disease_Hospitalization_DischargeAbstract_AdviceService>();
		
            Kernel.Bind<IChronic_disease_Comm_DiagnosticAddDal>().To<Chronic_disease_Comm_DiagnosticAddDal>();
	        Kernel.Bind<IChronic_disease_Comm_DiagnosticAddService>().To<Chronic_disease_Comm_DiagnosticAddService>();
		
            Kernel.Bind<IChronic_disease_Data_NamesDal>().To<Chronic_disease_Data_NamesDal>();
	        Kernel.Bind<IChronic_disease_Data_NamesService>().To<Chronic_disease_Data_NamesService>();
		
            Kernel.Bind<IChronic_disease_Data_UnitsDal>().To<Chronic_disease_Data_UnitsDal>();
	        Kernel.Bind<IChronic_disease_Data_UnitsService>().To<Chronic_disease_Data_UnitsService>();
		
            Kernel.Bind<IChronic_disease_Data_SectionsDal>().To<Chronic_disease_Data_SectionsDal>();
	        Kernel.Bind<IChronic_disease_Data_SectionsService>().To<Chronic_disease_Data_SectionsService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_BloodDal>().To<Chronic_disease_Comm_Testing_BloodDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_BloodService>().To<Chronic_disease_Comm_Testing_BloodService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_Blood_AddDal>().To<Chronic_disease_Comm_Testing_Blood_AddDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_Blood_AddService>().To<Chronic_disease_Comm_Testing_Blood_AddService>();
		
            Kernel.Bind<IChronic_disease_PicturesDal>().To<Chronic_disease_PicturesDal>();
	        Kernel.Bind<IChronic_disease_PicturesService>().To<Chronic_disease_PicturesService>();
		
            Kernel.Bind<IChronic_disease_Data_ResultsDal>().To<Chronic_disease_Data_ResultsDal>();
	        Kernel.Bind<IChronic_disease_Data_ResultsService>().To<Chronic_disease_Data_ResultsService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_UrineDal>().To<Chronic_disease_Comm_Testing_UrineDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_UrineService>().To<Chronic_disease_Comm_Testing_UrineService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_Urine_AddDal>().To<Chronic_disease_Comm_Testing_Urine_AddDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_Urine_AddService>().To<Chronic_disease_Comm_Testing_Urine_AddService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_FaecesDal>().To<Chronic_disease_Comm_Testing_FaecesDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_FaecesService>().To<Chronic_disease_Comm_Testing_FaecesService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_SputumDal>().To<Chronic_disease_Comm_Testing_SputumDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_SputumService>().To<Chronic_disease_Comm_Testing_SputumService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_CSFDal>().To<Chronic_disease_Comm_Testing_CSFDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_CSFService>().To<Chronic_disease_Comm_Testing_CSFService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_CSFAddDal>().To<Chronic_disease_Comm_Testing_CSFAddDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_CSFAddService>().To<Chronic_disease_Comm_Testing_CSFAddService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_SCEDal>().To<Chronic_disease_Comm_Testing_SCEDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_SCEService>().To<Chronic_disease_Comm_Testing_SCEService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_SCEAddDal>().To<Chronic_disease_Comm_Testing_SCEAddDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_SCEAddService>().To<Chronic_disease_Comm_Testing_SCEAddService>();
		
            Kernel.Bind<IChronic_disease_Comm_HumorProjectNamesDal>().To<Chronic_disease_Comm_HumorProjectNamesDal>();
	        Kernel.Bind<IChronic_disease_Comm_HumorProjectNamesService>().To<Chronic_disease_Comm_HumorProjectNamesService>();
		
            Kernel.Bind<IChronic_disease_Comm_HumorAddDal>().To<Chronic_disease_Comm_HumorAddDal>();
	        Kernel.Bind<IChronic_disease_Comm_HumorAddService>().To<Chronic_disease_Comm_HumorAddService>();
		
            Kernel.Bind<IChronic_disease_Comm_HumorDal>().To<Chronic_disease_Comm_HumorDal>();
	        Kernel.Bind<IChronic_disease_Comm_HumorService>().To<Chronic_disease_Comm_HumorService>();
		
            Kernel.Bind<IChronic_disease_Comm_HumorUnitDal>().To<Chronic_disease_Comm_HumorUnitDal>();
	        Kernel.Bind<IChronic_disease_Comm_HumorUnitService>().To<Chronic_disease_Comm_HumorUnitService>();
		
            Kernel.Bind<IChronic_disease_Comm_HumorResultDal>().To<Chronic_disease_Comm_HumorResultDal>();
	        Kernel.Bind<IChronic_disease_Comm_HumorResultService>().To<Chronic_disease_Comm_HumorResultService>();
		
            Kernel.Bind<IChronic_disease_Comm_HumorQuJianDal>().To<Chronic_disease_Comm_HumorQuJianDal>();
	        Kernel.Bind<IChronic_disease_Comm_HumorQuJianService>().To<Chronic_disease_Comm_HumorQuJianService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_BMCDal>().To<Chronic_disease_Comm_Testing_BMCDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_BMCService>().To<Chronic_disease_Comm_Testing_BMCService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_BMCAddDal>().To<Chronic_disease_Comm_Testing_BMCAddDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_BMCAddService>().To<Chronic_disease_Comm_Testing_BMCAddService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_GeneDetection_AddDal>().To<Chronic_disease_Comm_Testing_GeneDetection_AddDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_GeneDetection_AddService>().To<Chronic_disease_Comm_Testing_GeneDetection_AddService>();
		
            Kernel.Bind<IChronic_disease_Comm_Testing_GeneDetectionDal>().To<Chronic_disease_Comm_Testing_GeneDetectionDal>();
	        Kernel.Bind<IChronic_disease_Comm_Testing_GeneDetectionService>().To<Chronic_disease_Comm_Testing_GeneDetectionService>();
		
            Kernel.Bind<IICD_9_oldDal>().To<ICD_9_oldDal>();
	        Kernel.Bind<IICD_9_oldService>().To<ICD_9_oldService>();
		
            Kernel.Bind<IChronic_disease_Comm_OperationDal>().To<Chronic_disease_Comm_OperationDal>();
	        Kernel.Bind<IChronic_disease_Comm_OperationService>().To<Chronic_disease_Comm_OperationService>();
		
            Kernel.Bind<IChronic_disease_Comm_OperationAddDal>().To<Chronic_disease_Comm_OperationAddDal>();
	        Kernel.Bind<IChronic_disease_Comm_OperationAddService>().To<Chronic_disease_Comm_OperationAddService>();
		
            Kernel.Bind<IChronic_disease_Supplementary_Examination_CTDal>().To<Chronic_disease_Supplementary_Examination_CTDal>();
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_CTService>().To<Chronic_disease_Supplementary_Examination_CTService>();
		
            Kernel.Bind<IChronic_disease_Supplementary_Examination_XDal>().To<Chronic_disease_Supplementary_Examination_XDal>();
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_XService>().To<Chronic_disease_Supplementary_Examination_XService>();
		
            Kernel.Bind<IChronic_disease_Supplementary_Examination_USDal>().To<Chronic_disease_Supplementary_Examination_USDal>();
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_USService>().To<Chronic_disease_Supplementary_Examination_USService>();
		
            Kernel.Bind<IChronic_disease_Supplementary_Examination_StomachDal>().To<Chronic_disease_Supplementary_Examination_StomachDal>();
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_StomachService>().To<Chronic_disease_Supplementary_Examination_StomachService>();
		
            Kernel.Bind<IChronic_disease_Supplementary_Examination_MRIDal>().To<Chronic_disease_Supplementary_Examination_MRIDal>();
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_MRIService>().To<Chronic_disease_Supplementary_Examination_MRIService>();
		
            Kernel.Bind<IChronic_disease_Supplementary_Examination_HeartDal>().To<Chronic_disease_Supplementary_Examination_HeartDal>();
	        Kernel.Bind<IChronic_disease_Supplementary_Examination_HeartService>().To<Chronic_disease_Supplementary_Examination_HeartService>();
		
            Kernel.Bind<IChronic_disease_Comm_LungProjectNamesDal>().To<Chronic_disease_Comm_LungProjectNamesDal>();
	        Kernel.Bind<IChronic_disease_Comm_LungProjectNamesService>().To<Chronic_disease_Comm_LungProjectNamesService>();
		
            Kernel.Bind<IChronic_disease_Comm_LungQuJianDal>().To<Chronic_disease_Comm_LungQuJianDal>();
	        Kernel.Bind<IChronic_disease_Comm_LungQuJianService>().To<Chronic_disease_Comm_LungQuJianService>();
		
            Kernel.Bind<IChronic_disease_Comm_LungSexQuJianDal>().To<Chronic_disease_Comm_LungSexQuJianDal>();
	        Kernel.Bind<IChronic_disease_Comm_LungSexQuJianService>().To<Chronic_disease_Comm_LungSexQuJianService>();
		
            Kernel.Bind<IChronic_disease_Comm_LungTitleDal>().To<Chronic_disease_Comm_LungTitleDal>();
	        Kernel.Bind<IChronic_disease_Comm_LungTitleService>().To<Chronic_disease_Comm_LungTitleService>();
		
            Kernel.Bind<IChronic_disease_Comm_LungUnitDal>().To<Chronic_disease_Comm_LungUnitDal>();
	        Kernel.Bind<IChronic_disease_Comm_LungUnitService>().To<Chronic_disease_Comm_LungUnitService>();
		
            Kernel.Bind<IChronic_disease_Comm_LungDal>().To<Chronic_disease_Comm_LungDal>();
	        Kernel.Bind<IChronic_disease_Comm_LungService>().To<Chronic_disease_Comm_LungService>();
		
            Kernel.Bind<IChronic_disease_Comm_LungAddDal>().To<Chronic_disease_Comm_LungAddDal>();
	        Kernel.Bind<IChronic_disease_Comm_LungAddService>().To<Chronic_disease_Comm_LungAddService>();
		
            Kernel.Bind<ITestDal>().To<TestDal>();
	        Kernel.Bind<ITestService>().To<TestService>();
		
            Kernel.Bind<IChronic_disease_BloodPressureDal>().To<Chronic_disease_BloodPressureDal>();
	        Kernel.Bind<IChronic_disease_BloodPressureService>().To<Chronic_disease_BloodPressureService>();
		
            Kernel.Bind<IChronic_disease_BloodPressure_AddDal>().To<Chronic_disease_BloodPressure_AddDal>();
	        Kernel.Bind<IChronic_disease_BloodPressure_AddService>().To<Chronic_disease_BloodPressure_AddService>();
		
            Kernel.Bind<IChronic_disease_BloodGlucoseDal>().To<Chronic_disease_BloodGlucoseDal>();
	        Kernel.Bind<IChronic_disease_BloodGlucoseService>().To<Chronic_disease_BloodGlucoseService>();
		
            Kernel.Bind<IChronic_disease_BloodGlucose_AddDal>().To<Chronic_disease_BloodGlucose_AddDal>();
	        Kernel.Bind<IChronic_disease_BloodGlucose_AddService>().To<Chronic_disease_BloodGlucose_AddService>();
		
            Kernel.Bind<IChronic_disease_ConstitutionDal>().To<Chronic_disease_ConstitutionDal>();
	        Kernel.Bind<IChronic_disease_ConstitutionService>().To<Chronic_disease_ConstitutionService>();
		
            Kernel.Bind<IMT_BC_SelfCheckDal>().To<MT_BC_SelfCheckDal>();
	        Kernel.Bind<IMT_BC_SelfCheckService>().To<MT_BC_SelfCheckService>();
		
            Kernel.Bind<IMT_BC_FollowupDal>().To<MT_BC_FollowupDal>();
	        Kernel.Bind<IMT_BC_FollowupService>().To<MT_BC_FollowupService>();
		
            Kernel.Bind<IMT_BC_Followup_DoseDal>().To<MT_BC_Followup_DoseDal>();
	        Kernel.Bind<IMT_BC_Followup_DoseService>().To<MT_BC_Followup_DoseService>();
		
            Kernel.Bind<IMT_Comm_Adults_Health_Examination_NewDal>().To<MT_Comm_Adults_Health_Examination_NewDal>();
	        Kernel.Bind<IMT_Comm_Adults_Health_Examination_NewService>().To<MT_Comm_Adults_Health_Examination_NewService>();
		
            Kernel.Bind<IErrorLogDal>().To<ErrorLogDal>();
	        Kernel.Bind<IErrorLogService>().To<ErrorLogService>();
		
            Kernel.Bind<IUserLogDal>().To<UserLogDal>();
	        Kernel.Bind<IUserLogService>().To<UserLogService>();
		
            Kernel.Bind<IMT_BC_ClinicalExaminationDal>().To<MT_BC_ClinicalExaminationDal>();
	        Kernel.Bind<IMT_BC_ClinicalExaminationService>().To<MT_BC_ClinicalExaminationService>();
		
            Kernel.Bind<IMT_BC_MammographyDal>().To<MT_BC_MammographyDal>();
	        Kernel.Bind<IMT_BC_MammographyService>().To<MT_BC_MammographyService>();
		
            Kernel.Bind<IMT_BC_UltrasonographyDal>().To<MT_BC_UltrasonographyDal>();
	        Kernel.Bind<IMT_BC_UltrasonographyService>().To<MT_BC_UltrasonographyService>();
		
            Kernel.Bind<IMT_BC_PathologicalDiagnosisDal>().To<MT_BC_PathologicalDiagnosisDal>();
	        Kernel.Bind<IMT_BC_PathologicalDiagnosisService>().To<MT_BC_PathologicalDiagnosisService>();
		
            Kernel.Bind<IMT_BC_OperativeTreatmentDal>().To<MT_BC_OperativeTreatmentDal>();
	        Kernel.Bind<IMT_BC_OperativeTreatmentService>().To<MT_BC_OperativeTreatmentService>();
		
            Kernel.Bind<IMT_BC_RadiotherapyDal>().To<MT_BC_RadiotherapyDal>();
	        Kernel.Bind<IMT_BC_RadiotherapyService>().To<MT_BC_RadiotherapyService>();
		
            Kernel.Bind<IMT_BC_EndocrinotherapyDal>().To<MT_BC_EndocrinotherapyDal>();
	        Kernel.Bind<IMT_BC_EndocrinotherapyService>().To<MT_BC_EndocrinotherapyService>();
		
            Kernel.Bind<IMT_BC_ChemicalTreatmentDal>().To<MT_BC_ChemicalTreatmentDal>();
	        Kernel.Bind<IMT_BC_ChemicalTreatmentService>().To<MT_BC_ChemicalTreatmentService>();
		
            Kernel.Bind<IMT_BC_TCMTreatmentDal>().To<MT_BC_TCMTreatmentDal>();
	        Kernel.Bind<IMT_BC_TCMTreatmentService>().To<MT_BC_TCMTreatmentService>();
		
            Kernel.Bind<IMT_BC_21GenesDal>().To<MT_BC_21GenesDal>();
	        Kernel.Bind<IMT_BC_21GenesService>().To<MT_BC_21GenesService>();
		
            Kernel.Bind<IMT_BC_QOLDal>().To<MT_BC_QOLDal>();
	        Kernel.Bind<IMT_BC_QOLService>().To<MT_BC_QOLService>();
        }
    }
}