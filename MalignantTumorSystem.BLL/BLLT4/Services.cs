 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.DI;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model;
using MalignantTumorSystem.Model.Entities;
namespace MalignantTumorSystem.BLL
{
	
	public partial class Comm_Platform_WorkerService:BaseService<Comm_Platform_Worker>,IComm_Platform_WorkerService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetComm_Platform_WorkerDal();
            //CurrentDal =NinjectDI.GetComm_Platform_WorkerDal;
        } 
	}  
	
	public partial class MT_RoleInfoService:BaseService<MT_RoleInfo>,IMT_RoleInfoService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetMT_RoleInfoDal();
            //CurrentDal =NinjectDI.GetMT_RoleInfoDal;
        } 
	}  
	
	public partial class MT_WorkerRoleInfoService:BaseService<MT_WorkerRoleInfo>,IMT_WorkerRoleInfoService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetMT_WorkerRoleInfoDal();
            //CurrentDal =NinjectDI.GetMT_WorkerRoleInfoDal;
        } 
	}  
	
	public partial class Share_ProvinceService:BaseService<Share_Province>,IShare_ProvinceService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetShare_ProvinceDal();
            //CurrentDal =NinjectDI.GetShare_ProvinceDal;
        } 
	}  
	
	public partial class Share_CityService:BaseService<Share_City>,IShare_CityService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetShare_CityDal();
            //CurrentDal =NinjectDI.GetShare_CityDal;
        } 
	}  
	
	public partial class Share_CountyService:BaseService<Share_County>,IShare_CountyService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetShare_CountyDal();
            //CurrentDal =NinjectDI.GetShare_CountyDal;
        } 
	}  
	
	public partial class Share_StreetService:BaseService<Share_Street>,IShare_StreetService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetShare_StreetDal();
            //CurrentDal =NinjectDI.GetShare_StreetDal;
        } 
	}  
	
	public partial class Share_CommunityInfoService:BaseService<Share_CommunityInfo>,IShare_CommunityInfoService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetShare_CommunityInfoDal();
            //CurrentDal =NinjectDI.GetShare_CommunityInfoDal;
        } 
	}  
	
	public partial class Comm_TumourService:BaseService<Comm_Tumour>,IComm_TumourService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetComm_TumourDal();
            //CurrentDal =NinjectDI.GetComm_TumourDal;
        } 
	}  
	
	public partial class Comm_ResidentFileService:BaseService<Comm_ResidentFile>,IComm_ResidentFileService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetComm_ResidentFileDal();
            //CurrentDal =NinjectDI.GetComm_ResidentFileDal;
        } 
	}  
	
	public partial class Comm_ResidentFile_Followup_DiseaseService:BaseService<Comm_ResidentFile_Followup_Disease>,IComm_ResidentFile_Followup_DiseaseService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetComm_ResidentFile_Followup_DiseaseDal();
            //CurrentDal =NinjectDI.GetComm_ResidentFile_Followup_DiseaseDal;
        } 
	}  
	
	public partial class Comm_ResidentFile_Followup_SurgeryService:BaseService<Comm_ResidentFile_Followup_Surgery>,IComm_ResidentFile_Followup_SurgeryService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetComm_ResidentFile_Followup_SurgeryDal();
            //CurrentDal =NinjectDI.GetComm_ResidentFile_Followup_SurgeryDal;
        } 
	}  
	
	public partial class Comm_ResidentFile_Followup_TraumaService:BaseService<Comm_ResidentFile_Followup_Trauma>,IComm_ResidentFile_Followup_TraumaService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetComm_ResidentFile_Followup_TraumaDal();
            //CurrentDal =NinjectDI.GetComm_ResidentFile_Followup_TraumaDal;
        } 
	}  
	
	public partial class Comm_ResidentFile_Followup_Blood_TransfusionService:BaseService<Comm_ResidentFile_Followup_Blood_Transfusion>,IComm_ResidentFile_Followup_Blood_TransfusionService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetComm_ResidentFile_Followup_Blood_TransfusionDal();
            //CurrentDal =NinjectDI.GetComm_ResidentFile_Followup_Blood_TransfusionDal;
        } 
	}  
	
	public partial class Comm_ResidentFile_Followup_Family_DiseaseService:BaseService<Comm_ResidentFile_Followup_Family_Disease>,IComm_ResidentFile_Followup_Family_DiseaseService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetComm_ResidentFile_Followup_Family_DiseaseDal();
            //CurrentDal =NinjectDI.GetComm_ResidentFile_Followup_Family_DiseaseDal;
        } 
	}  
	
	public partial class Chronic_disease_SmokeAndDrinkService:BaseService<Chronic_disease_SmokeAndDrink>,IChronic_disease_SmokeAndDrinkService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_SmokeAndDrinkDal();
            //CurrentDal =NinjectDI.GetChronic_disease_SmokeAndDrinkDal;
        } 
	}  
	
	public partial class Comm_EHR_AbstractService:BaseService<Comm_EHR_Abstract>,IComm_EHR_AbstractService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetComm_EHR_AbstractDal();
            //CurrentDal =NinjectDI.GetComm_EHR_AbstractDal;
        } 
	}  
	
	public partial class Comm_ResidentFile_Change_AddressService:BaseService<Comm_ResidentFile_Change_Address>,IComm_ResidentFile_Change_AddressService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetComm_ResidentFile_Change_AddressDal();
            //CurrentDal =NinjectDI.GetComm_ResidentFile_Change_AddressDal;
        } 
	}  
	
	public partial class Share_DataDictionaryService:BaseService<Share_DataDictionary>,IShare_DataDictionaryService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetShare_DataDictionaryDal();
            //CurrentDal =NinjectDI.GetShare_DataDictionaryDal;
        } 
	}  
	
	public partial class Chronic_disease_Diabetes_familyService:BaseService<Chronic_disease_Diabetes_family>,IChronic_disease_Diabetes_familyService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Diabetes_familyDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Diabetes_familyDal;
        } 
	}  
	
	public partial class Chronic_disease_Diabetes_family_relationService:BaseService<Chronic_disease_Diabetes_family_relation>,IChronic_disease_Diabetes_family_relationService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Diabetes_family_relationDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Diabetes_family_relationDal;
        } 
	}  
	
	public partial class Chronic_disease_DailyLifeService:BaseService<Chronic_disease_DailyLife>,IChronic_disease_DailyLifeService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_DailyLifeDal();
            //CurrentDal =NinjectDI.GetChronic_disease_DailyLifeDal;
        } 
	}  
	
	public partial class Chronic_disease_PhysicalExerciseService:BaseService<Chronic_disease_PhysicalExercise>,IChronic_disease_PhysicalExerciseService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_PhysicalExerciseDal();
            //CurrentDal =NinjectDI.GetChronic_disease_PhysicalExerciseDal;
        } 
	}  
	
	public partial class Chronic_disease_PhysicalExercise_AddService:BaseService<Chronic_disease_PhysicalExercise_Add>,IChronic_disease_PhysicalExercise_AddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_PhysicalExercise_AddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_PhysicalExercise_AddDal;
        } 
	}  
	
	public partial class ICD_10_oldService:BaseService<ICD_10_old>,IICD_10_oldService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetICD_10_oldDal();
            //CurrentDal =NinjectDI.GetICD_10_oldDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_MedicineService:BaseService<Chronic_disease_Comm_Medicine>,IChronic_disease_Comm_MedicineService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_MedicineDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_MedicineDal;
        } 
	}  
	
	public partial class Chronic_disease_Data_DiseaseNameService:BaseService<Chronic_disease_Data_DiseaseName>,IChronic_disease_Data_DiseaseNameService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Data_DiseaseNameDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Data_DiseaseNameDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_DiagnosticService:BaseService<Chronic_disease_Comm_Diagnostic>,IChronic_disease_Comm_DiagnosticService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_DiagnosticDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_DiagnosticDal;
        } 
	}  
	
	public partial class Chronic_disease_OutpatientService:BaseService<Chronic_disease_Outpatient>,IChronic_disease_OutpatientService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_OutpatientDal();
            //CurrentDal =NinjectDI.GetChronic_disease_OutpatientDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_MedicationService:BaseService<Chronic_disease_Comm_Medication>,IChronic_disease_Comm_MedicationService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_MedicationDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_MedicationDal;
        } 
	}  
	
	public partial class Chronic_disease_Outpatient_JudgeService:BaseService<Chronic_disease_Outpatient_Judge>,IChronic_disease_Outpatient_JudgeService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Outpatient_JudgeDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Outpatient_JudgeDal;
        } 
	}  
	
	public partial class Chronic_disease_Outpatient_PrescriptionService:BaseService<Chronic_disease_Outpatient_Prescription>,IChronic_disease_Outpatient_PrescriptionService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Outpatient_PrescriptionDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Outpatient_PrescriptionDal;
        } 
	}  
	
	public partial class Chronic_disease_Outpatient_AccessoryExaminationService:BaseService<Chronic_disease_Outpatient_AccessoryExamination>,IChronic_disease_Outpatient_AccessoryExaminationService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Outpatient_AccessoryExaminationDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Outpatient_AccessoryExaminationDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_MedicationAddService:BaseService<Chronic_disease_Comm_MedicationAdd>,IChronic_disease_Comm_MedicationAddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_MedicationAddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_MedicationAddDal;
        } 
	}  
	
	public partial class Chronic_disease_HospitalizationService:BaseService<Chronic_disease_Hospitalization>,IChronic_disease_HospitalizationService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_HospitalizationDal();
            //CurrentDal =NinjectDI.GetChronic_disease_HospitalizationDal;
        } 
	}  
	
	public partial class Chronic_disease_Hospitalization_ConsultationRecordService:BaseService<Chronic_disease_Hospitalization_ConsultationRecord>,IChronic_disease_Hospitalization_ConsultationRecordService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Hospitalization_ConsultationRecordDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Hospitalization_ConsultationRecordDal;
        } 
	}  
	
	public partial class Chronic_disease_Hospitalization_CourseRecordService:BaseService<Chronic_disease_Hospitalization_CourseRecord>,IChronic_disease_Hospitalization_CourseRecordService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Hospitalization_CourseRecordDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Hospitalization_CourseRecordDal;
        } 
	}  
	
	public partial class Chronic_disease_Hospitalization_ExpensesService:BaseService<Chronic_disease_Hospitalization_Expenses>,IChronic_disease_Hospitalization_ExpensesService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Hospitalization_ExpensesDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Hospitalization_ExpensesDal;
        } 
	}  
	
	public partial class Chronic_disease_Hospitalization_DischargeAbstractService:BaseService<Chronic_disease_Hospitalization_DischargeAbstract>,IChronic_disease_Hospitalization_DischargeAbstractService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Hospitalization_DischargeAbstractDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Hospitalization_DischargeAbstractDal;
        } 
	}  
	
	public partial class Chronic_disease_Hospitalization_DischargeAbstract_AdviceService:BaseService<Chronic_disease_Hospitalization_DischargeAbstract_Advice>,IChronic_disease_Hospitalization_DischargeAbstract_AdviceService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Hospitalization_DischargeAbstract_AdviceDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Hospitalization_DischargeAbstract_AdviceDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_DiagnosticAddService:BaseService<Chronic_disease_Comm_DiagnosticAdd>,IChronic_disease_Comm_DiagnosticAddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_DiagnosticAddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_DiagnosticAddDal;
        } 
	}  
	
	public partial class Chronic_disease_Data_NamesService:BaseService<Chronic_disease_Data_Names>,IChronic_disease_Data_NamesService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Data_NamesDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Data_NamesDal;
        } 
	}  
	
	public partial class Chronic_disease_Data_UnitsService:BaseService<Chronic_disease_Data_Units>,IChronic_disease_Data_UnitsService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Data_UnitsDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Data_UnitsDal;
        } 
	}  
	
	public partial class Chronic_disease_Data_SectionsService:BaseService<Chronic_disease_Data_Sections>,IChronic_disease_Data_SectionsService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Data_SectionsDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Data_SectionsDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_BloodService:BaseService<Chronic_disease_Comm_Testing_Blood>,IChronic_disease_Comm_Testing_BloodService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_BloodDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_BloodDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_Blood_AddService:BaseService<Chronic_disease_Comm_Testing_Blood_Add>,IChronic_disease_Comm_Testing_Blood_AddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_Blood_AddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_Blood_AddDal;
        } 
	}  
	
	public partial class Chronic_disease_PicturesService:BaseService<Chronic_disease_Pictures>,IChronic_disease_PicturesService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_PicturesDal();
            //CurrentDal =NinjectDI.GetChronic_disease_PicturesDal;
        } 
	}  
	
	public partial class Chronic_disease_Data_ResultsService:BaseService<Chronic_disease_Data_Results>,IChronic_disease_Data_ResultsService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Data_ResultsDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Data_ResultsDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_UrineService:BaseService<Chronic_disease_Comm_Testing_Urine>,IChronic_disease_Comm_Testing_UrineService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_UrineDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_UrineDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_Urine_AddService:BaseService<Chronic_disease_Comm_Testing_Urine_Add>,IChronic_disease_Comm_Testing_Urine_AddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_Urine_AddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_Urine_AddDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_FaecesService:BaseService<Chronic_disease_Comm_Testing_Faeces>,IChronic_disease_Comm_Testing_FaecesService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_FaecesDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_FaecesDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_SputumService:BaseService<Chronic_disease_Comm_Testing_Sputum>,IChronic_disease_Comm_Testing_SputumService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_SputumDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_SputumDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_CSFService:BaseService<Chronic_disease_Comm_Testing_CSF>,IChronic_disease_Comm_Testing_CSFService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_CSFDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_CSFDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_CSFAddService:BaseService<Chronic_disease_Comm_Testing_CSFAdd>,IChronic_disease_Comm_Testing_CSFAddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_CSFAddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_CSFAddDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_SCEService:BaseService<Chronic_disease_Comm_Testing_SCE>,IChronic_disease_Comm_Testing_SCEService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_SCEDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_SCEDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_SCEAddService:BaseService<Chronic_disease_Comm_Testing_SCEAdd>,IChronic_disease_Comm_Testing_SCEAddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_SCEAddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_SCEAddDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_HumorProjectNamesService:BaseService<Chronic_disease_Comm_HumorProjectNames>,IChronic_disease_Comm_HumorProjectNamesService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_HumorProjectNamesDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_HumorProjectNamesDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_HumorAddService:BaseService<Chronic_disease_Comm_HumorAdd>,IChronic_disease_Comm_HumorAddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_HumorAddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_HumorAddDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_HumorService:BaseService<Chronic_disease_Comm_Humor>,IChronic_disease_Comm_HumorService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_HumorDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_HumorDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_HumorUnitService:BaseService<Chronic_disease_Comm_HumorUnit>,IChronic_disease_Comm_HumorUnitService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_HumorUnitDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_HumorUnitDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_HumorResultService:BaseService<Chronic_disease_Comm_HumorResult>,IChronic_disease_Comm_HumorResultService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_HumorResultDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_HumorResultDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_HumorQuJianService:BaseService<Chronic_disease_Comm_HumorQuJian>,IChronic_disease_Comm_HumorQuJianService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_HumorQuJianDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_HumorQuJianDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_BMCService:BaseService<Chronic_disease_Comm_Testing_BMC>,IChronic_disease_Comm_Testing_BMCService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_BMCDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_BMCDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_BMCAddService:BaseService<Chronic_disease_Comm_Testing_BMCAdd>,IChronic_disease_Comm_Testing_BMCAddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_BMCAddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_BMCAddDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_GeneDetection_AddService:BaseService<Chronic_disease_Comm_Testing_GeneDetection_Add>,IChronic_disease_Comm_Testing_GeneDetection_AddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_GeneDetection_AddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_GeneDetection_AddDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_Testing_GeneDetectionService:BaseService<Chronic_disease_Comm_Testing_GeneDetection>,IChronic_disease_Comm_Testing_GeneDetectionService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_Testing_GeneDetectionDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_Testing_GeneDetectionDal;
        } 
	}  
	
	public partial class ICD_9_oldService:BaseService<ICD_9_old>,IICD_9_oldService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetICD_9_oldDal();
            //CurrentDal =NinjectDI.GetICD_9_oldDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_OperationService:BaseService<Chronic_disease_Comm_Operation>,IChronic_disease_Comm_OperationService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_OperationDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_OperationDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_OperationAddService:BaseService<Chronic_disease_Comm_OperationAdd>,IChronic_disease_Comm_OperationAddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_OperationAddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_OperationAddDal;
        } 
	}  
	
	public partial class Chronic_disease_Supplementary_Examination_CTService:BaseService<Chronic_disease_Supplementary_Examination_CT>,IChronic_disease_Supplementary_Examination_CTService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Supplementary_Examination_CTDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Supplementary_Examination_CTDal;
        } 
	}  
	
	public partial class Chronic_disease_Supplementary_Examination_XService:BaseService<Chronic_disease_Supplementary_Examination_X>,IChronic_disease_Supplementary_Examination_XService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Supplementary_Examination_XDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Supplementary_Examination_XDal;
        } 
	}  
	
	public partial class Chronic_disease_Supplementary_Examination_USService:BaseService<Chronic_disease_Supplementary_Examination_US>,IChronic_disease_Supplementary_Examination_USService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Supplementary_Examination_USDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Supplementary_Examination_USDal;
        } 
	}  
	
	public partial class Chronic_disease_Supplementary_Examination_StomachService:BaseService<Chronic_disease_Supplementary_Examination_Stomach>,IChronic_disease_Supplementary_Examination_StomachService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Supplementary_Examination_StomachDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Supplementary_Examination_StomachDal;
        } 
	}  
	
	public partial class Chronic_disease_Supplementary_Examination_MRIService:BaseService<Chronic_disease_Supplementary_Examination_MRI>,IChronic_disease_Supplementary_Examination_MRIService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Supplementary_Examination_MRIDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Supplementary_Examination_MRIDal;
        } 
	}  
	
	public partial class Chronic_disease_Supplementary_Examination_HeartService:BaseService<Chronic_disease_Supplementary_Examination_Heart>,IChronic_disease_Supplementary_Examination_HeartService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Supplementary_Examination_HeartDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Supplementary_Examination_HeartDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_LungProjectNamesService:BaseService<Chronic_disease_Comm_LungProjectNames>,IChronic_disease_Comm_LungProjectNamesService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_LungProjectNamesDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_LungProjectNamesDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_LungQuJianService:BaseService<Chronic_disease_Comm_LungQuJian>,IChronic_disease_Comm_LungQuJianService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_LungQuJianDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_LungQuJianDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_LungSexQuJianService:BaseService<Chronic_disease_Comm_LungSexQuJian>,IChronic_disease_Comm_LungSexQuJianService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_LungSexQuJianDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_LungSexQuJianDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_LungTitleService:BaseService<Chronic_disease_Comm_LungTitle>,IChronic_disease_Comm_LungTitleService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_LungTitleDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_LungTitleDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_LungUnitService:BaseService<Chronic_disease_Comm_LungUnit>,IChronic_disease_Comm_LungUnitService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_LungUnitDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_LungUnitDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_LungService:BaseService<Chronic_disease_Comm_Lung>,IChronic_disease_Comm_LungService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_LungDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_LungDal;
        } 
	}  
	
	public partial class Chronic_disease_Comm_LungAddService:BaseService<Chronic_disease_Comm_LungAdd>,IChronic_disease_Comm_LungAddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_Comm_LungAddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_Comm_LungAddDal;
        } 
	}  
	
	public partial class TestService:BaseService<Test>,ITestService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetTestDal();
            //CurrentDal =NinjectDI.GetTestDal;
        } 
	}  
	
	public partial class Chronic_disease_BloodPressureService:BaseService<Chronic_disease_BloodPressure>,IChronic_disease_BloodPressureService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_BloodPressureDal();
            //CurrentDal =NinjectDI.GetChronic_disease_BloodPressureDal;
        } 
	}  
	
	public partial class Chronic_disease_BloodPressure_AddService:BaseService<Chronic_disease_BloodPressure_Add>,IChronic_disease_BloodPressure_AddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_BloodPressure_AddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_BloodPressure_AddDal;
        } 
	}  
	
	public partial class Chronic_disease_BloodGlucoseService:BaseService<Chronic_disease_BloodGlucose>,IChronic_disease_BloodGlucoseService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_BloodGlucoseDal();
            //CurrentDal =NinjectDI.GetChronic_disease_BloodGlucoseDal;
        } 
	}  
	
	public partial class Chronic_disease_BloodGlucose_AddService:BaseService<Chronic_disease_BloodGlucose_Add>,IChronic_disease_BloodGlucose_AddService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_BloodGlucose_AddDal();
            //CurrentDal =NinjectDI.GetChronic_disease_BloodGlucose_AddDal;
        } 
	}  
	
	public partial class Chronic_disease_ConstitutionService:BaseService<Chronic_disease_Constitution>,IChronic_disease_ConstitutionService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetChronic_disease_ConstitutionDal();
            //CurrentDal =NinjectDI.GetChronic_disease_ConstitutionDal;
        } 
	}  
	
	public partial class MT_BC_SelfCheckService:BaseService<MT_BC_SelfCheck>,IMT_BC_SelfCheckService
    {	
		public override void SetCurrentDal()
        {
            CurrentDal =AbstractFactory.GetMT_BC_SelfCheckDal();
            //CurrentDal =NinjectDI.GetMT_BC_SelfCheckDal;
        } 
	}  
}