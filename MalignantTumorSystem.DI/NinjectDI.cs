 
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;  
using System.IO;  
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.DAL;
using Ninject;
using MalignantTumorSystem.IDAL;

namespace MalignantTumorSystem.DI{

    public partial class NinjectDI
	{
           
                //public static IComm_Platform_WorkerDal GetComm_Platform_WorkerDal;
                //public NinjectDI(IComm_Platform_WorkerDal dal)
               // {
                //    GetComm_Platform_WorkerDal=dal;
               // } 
                [Inject]
                public static IComm_Platform_WorkerDal GetComm_Platform_WorkerDal{get;set;}
	  
                //public static IMT_RoleInfoDal GetMT_RoleInfoDal;
                //public NinjectDI(IMT_RoleInfoDal dal)
               // {
                //    GetMT_RoleInfoDal=dal;
               // } 
                [Inject]
                public static IMT_RoleInfoDal GetMT_RoleInfoDal{get;set;}
	  
                //public static IMT_WorkerRoleInfoDal GetMT_WorkerRoleInfoDal;
                //public NinjectDI(IMT_WorkerRoleInfoDal dal)
               // {
                //    GetMT_WorkerRoleInfoDal=dal;
               // } 
                [Inject]
                public static IMT_WorkerRoleInfoDal GetMT_WorkerRoleInfoDal{get;set;}
	  
                //public static IShare_ProvinceDal GetShare_ProvinceDal;
                //public NinjectDI(IShare_ProvinceDal dal)
               // {
                //    GetShare_ProvinceDal=dal;
               // } 
                [Inject]
                public static IShare_ProvinceDal GetShare_ProvinceDal{get;set;}
	  
                //public static IShare_CityDal GetShare_CityDal;
                //public NinjectDI(IShare_CityDal dal)
               // {
                //    GetShare_CityDal=dal;
               // } 
                [Inject]
                public static IShare_CityDal GetShare_CityDal{get;set;}
	  
                //public static IShare_CountyDal GetShare_CountyDal;
                //public NinjectDI(IShare_CountyDal dal)
               // {
                //    GetShare_CountyDal=dal;
               // } 
                [Inject]
                public static IShare_CountyDal GetShare_CountyDal{get;set;}
	  
                //public static IShare_StreetDal GetShare_StreetDal;
                //public NinjectDI(IShare_StreetDal dal)
               // {
                //    GetShare_StreetDal=dal;
               // } 
                [Inject]
                public static IShare_StreetDal GetShare_StreetDal{get;set;}
	  
                //public static IShare_CommunityInfoDal GetShare_CommunityInfoDal;
                //public NinjectDI(IShare_CommunityInfoDal dal)
               // {
                //    GetShare_CommunityInfoDal=dal;
               // } 
                [Inject]
                public static IShare_CommunityInfoDal GetShare_CommunityInfoDal{get;set;}
	  
                //public static IComm_TumourDal GetComm_TumourDal;
                //public NinjectDI(IComm_TumourDal dal)
               // {
                //    GetComm_TumourDal=dal;
               // } 
                [Inject]
                public static IComm_TumourDal GetComm_TumourDal{get;set;}
	  
                //public static IComm_ResidentFileDal GetComm_ResidentFileDal;
                //public NinjectDI(IComm_ResidentFileDal dal)
               // {
                //    GetComm_ResidentFileDal=dal;
               // } 
                [Inject]
                public static IComm_ResidentFileDal GetComm_ResidentFileDal{get;set;}
	  
                //public static IComm_ResidentFile_Followup_DiseaseDal GetComm_ResidentFile_Followup_DiseaseDal;
                //public NinjectDI(IComm_ResidentFile_Followup_DiseaseDal dal)
               // {
                //    GetComm_ResidentFile_Followup_DiseaseDal=dal;
               // } 
                [Inject]
                public static IComm_ResidentFile_Followup_DiseaseDal GetComm_ResidentFile_Followup_DiseaseDal{get;set;}
	  
                //public static IComm_ResidentFile_Followup_SurgeryDal GetComm_ResidentFile_Followup_SurgeryDal;
                //public NinjectDI(IComm_ResidentFile_Followup_SurgeryDal dal)
               // {
                //    GetComm_ResidentFile_Followup_SurgeryDal=dal;
               // } 
                [Inject]
                public static IComm_ResidentFile_Followup_SurgeryDal GetComm_ResidentFile_Followup_SurgeryDal{get;set;}
	  
                //public static IComm_ResidentFile_Followup_TraumaDal GetComm_ResidentFile_Followup_TraumaDal;
                //public NinjectDI(IComm_ResidentFile_Followup_TraumaDal dal)
               // {
                //    GetComm_ResidentFile_Followup_TraumaDal=dal;
               // } 
                [Inject]
                public static IComm_ResidentFile_Followup_TraumaDal GetComm_ResidentFile_Followup_TraumaDal{get;set;}
	  
                //public static IComm_ResidentFile_Followup_Blood_TransfusionDal GetComm_ResidentFile_Followup_Blood_TransfusionDal;
                //public NinjectDI(IComm_ResidentFile_Followup_Blood_TransfusionDal dal)
               // {
                //    GetComm_ResidentFile_Followup_Blood_TransfusionDal=dal;
               // } 
                [Inject]
                public static IComm_ResidentFile_Followup_Blood_TransfusionDal GetComm_ResidentFile_Followup_Blood_TransfusionDal{get;set;}
	  
                //public static IComm_ResidentFile_Followup_Family_DiseaseDal GetComm_ResidentFile_Followup_Family_DiseaseDal;
                //public NinjectDI(IComm_ResidentFile_Followup_Family_DiseaseDal dal)
               // {
                //    GetComm_ResidentFile_Followup_Family_DiseaseDal=dal;
               // } 
                [Inject]
                public static IComm_ResidentFile_Followup_Family_DiseaseDal GetComm_ResidentFile_Followup_Family_DiseaseDal{get;set;}
	  
                //public static IChronic_disease_SmokeAndDrinkDal GetChronic_disease_SmokeAndDrinkDal;
                //public NinjectDI(IChronic_disease_SmokeAndDrinkDal dal)
               // {
                //    GetChronic_disease_SmokeAndDrinkDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_SmokeAndDrinkDal GetChronic_disease_SmokeAndDrinkDal{get;set;}
	  
                //public static IComm_EHR_AbstractDal GetComm_EHR_AbstractDal;
                //public NinjectDI(IComm_EHR_AbstractDal dal)
               // {
                //    GetComm_EHR_AbstractDal=dal;
               // } 
                [Inject]
                public static IComm_EHR_AbstractDal GetComm_EHR_AbstractDal{get;set;}
	  
                //public static IComm_ResidentFile_Change_AddressDal GetComm_ResidentFile_Change_AddressDal;
                //public NinjectDI(IComm_ResidentFile_Change_AddressDal dal)
               // {
                //    GetComm_ResidentFile_Change_AddressDal=dal;
               // } 
                [Inject]
                public static IComm_ResidentFile_Change_AddressDal GetComm_ResidentFile_Change_AddressDal{get;set;}
	  
                //public static IShare_DataDictionaryDal GetShare_DataDictionaryDal;
                //public NinjectDI(IShare_DataDictionaryDal dal)
               // {
                //    GetShare_DataDictionaryDal=dal;
               // } 
                [Inject]
                public static IShare_DataDictionaryDal GetShare_DataDictionaryDal{get;set;}
	  
                //public static IChronic_disease_Diabetes_familyDal GetChronic_disease_Diabetes_familyDal;
                //public NinjectDI(IChronic_disease_Diabetes_familyDal dal)
               // {
                //    GetChronic_disease_Diabetes_familyDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Diabetes_familyDal GetChronic_disease_Diabetes_familyDal{get;set;}
	  
                //public static IChronic_disease_Diabetes_family_relationDal GetChronic_disease_Diabetes_family_relationDal;
                //public NinjectDI(IChronic_disease_Diabetes_family_relationDal dal)
               // {
                //    GetChronic_disease_Diabetes_family_relationDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Diabetes_family_relationDal GetChronic_disease_Diabetes_family_relationDal{get;set;}
	  
                //public static IChronic_disease_DailyLifeDal GetChronic_disease_DailyLifeDal;
                //public NinjectDI(IChronic_disease_DailyLifeDal dal)
               // {
                //    GetChronic_disease_DailyLifeDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_DailyLifeDal GetChronic_disease_DailyLifeDal{get;set;}
	  
                //public static IChronic_disease_PhysicalExerciseDal GetChronic_disease_PhysicalExerciseDal;
                //public NinjectDI(IChronic_disease_PhysicalExerciseDal dal)
               // {
                //    GetChronic_disease_PhysicalExerciseDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_PhysicalExerciseDal GetChronic_disease_PhysicalExerciseDal{get;set;}
	  
                //public static IChronic_disease_PhysicalExercise_AddDal GetChronic_disease_PhysicalExercise_AddDal;
                //public NinjectDI(IChronic_disease_PhysicalExercise_AddDal dal)
               // {
                //    GetChronic_disease_PhysicalExercise_AddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_PhysicalExercise_AddDal GetChronic_disease_PhysicalExercise_AddDal{get;set;}
	  
                //public static IICD_10_oldDal GetICD_10_oldDal;
                //public NinjectDI(IICD_10_oldDal dal)
               // {
                //    GetICD_10_oldDal=dal;
               // } 
                [Inject]
                public static IICD_10_oldDal GetICD_10_oldDal{get;set;}
	  
                //public static IChronic_disease_Comm_MedicineDal GetChronic_disease_Comm_MedicineDal;
                //public NinjectDI(IChronic_disease_Comm_MedicineDal dal)
               // {
                //    GetChronic_disease_Comm_MedicineDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_MedicineDal GetChronic_disease_Comm_MedicineDal{get;set;}
	  
                //public static IChronic_disease_Data_DiseaseNameDal GetChronic_disease_Data_DiseaseNameDal;
                //public NinjectDI(IChronic_disease_Data_DiseaseNameDal dal)
               // {
                //    GetChronic_disease_Data_DiseaseNameDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Data_DiseaseNameDal GetChronic_disease_Data_DiseaseNameDal{get;set;}
	  
                //public static IChronic_disease_Comm_DiagnosticDal GetChronic_disease_Comm_DiagnosticDal;
                //public NinjectDI(IChronic_disease_Comm_DiagnosticDal dal)
               // {
                //    GetChronic_disease_Comm_DiagnosticDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_DiagnosticDal GetChronic_disease_Comm_DiagnosticDal{get;set;}
	  
                //public static IChronic_disease_OutpatientDal GetChronic_disease_OutpatientDal;
                //public NinjectDI(IChronic_disease_OutpatientDal dal)
               // {
                //    GetChronic_disease_OutpatientDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_OutpatientDal GetChronic_disease_OutpatientDal{get;set;}
	  
                //public static IChronic_disease_Comm_MedicationDal GetChronic_disease_Comm_MedicationDal;
                //public NinjectDI(IChronic_disease_Comm_MedicationDal dal)
               // {
                //    GetChronic_disease_Comm_MedicationDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_MedicationDal GetChronic_disease_Comm_MedicationDal{get;set;}
	  
                //public static IChronic_disease_Outpatient_JudgeDal GetChronic_disease_Outpatient_JudgeDal;
                //public NinjectDI(IChronic_disease_Outpatient_JudgeDal dal)
               // {
                //    GetChronic_disease_Outpatient_JudgeDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Outpatient_JudgeDal GetChronic_disease_Outpatient_JudgeDal{get;set;}
	  
                //public static IChronic_disease_Outpatient_PrescriptionDal GetChronic_disease_Outpatient_PrescriptionDal;
                //public NinjectDI(IChronic_disease_Outpatient_PrescriptionDal dal)
               // {
                //    GetChronic_disease_Outpatient_PrescriptionDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Outpatient_PrescriptionDal GetChronic_disease_Outpatient_PrescriptionDal{get;set;}
	  
                //public static IChronic_disease_Outpatient_AccessoryExaminationDal GetChronic_disease_Outpatient_AccessoryExaminationDal;
                //public NinjectDI(IChronic_disease_Outpatient_AccessoryExaminationDal dal)
               // {
                //    GetChronic_disease_Outpatient_AccessoryExaminationDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Outpatient_AccessoryExaminationDal GetChronic_disease_Outpatient_AccessoryExaminationDal{get;set;}
	  
                //public static IChronic_disease_Comm_MedicationAddDal GetChronic_disease_Comm_MedicationAddDal;
                //public NinjectDI(IChronic_disease_Comm_MedicationAddDal dal)
               // {
                //    GetChronic_disease_Comm_MedicationAddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_MedicationAddDal GetChronic_disease_Comm_MedicationAddDal{get;set;}
	  
                //public static IChronic_disease_HospitalizationDal GetChronic_disease_HospitalizationDal;
                //public NinjectDI(IChronic_disease_HospitalizationDal dal)
               // {
                //    GetChronic_disease_HospitalizationDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_HospitalizationDal GetChronic_disease_HospitalizationDal{get;set;}
	  
                //public static IChronic_disease_Hospitalization_ConsultationRecordDal GetChronic_disease_Hospitalization_ConsultationRecordDal;
                //public NinjectDI(IChronic_disease_Hospitalization_ConsultationRecordDal dal)
               // {
                //    GetChronic_disease_Hospitalization_ConsultationRecordDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Hospitalization_ConsultationRecordDal GetChronic_disease_Hospitalization_ConsultationRecordDal{get;set;}
	  
                //public static IChronic_disease_Hospitalization_CourseRecordDal GetChronic_disease_Hospitalization_CourseRecordDal;
                //public NinjectDI(IChronic_disease_Hospitalization_CourseRecordDal dal)
               // {
                //    GetChronic_disease_Hospitalization_CourseRecordDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Hospitalization_CourseRecordDal GetChronic_disease_Hospitalization_CourseRecordDal{get;set;}
	  
                //public static IChronic_disease_Hospitalization_ExpensesDal GetChronic_disease_Hospitalization_ExpensesDal;
                //public NinjectDI(IChronic_disease_Hospitalization_ExpensesDal dal)
               // {
                //    GetChronic_disease_Hospitalization_ExpensesDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Hospitalization_ExpensesDal GetChronic_disease_Hospitalization_ExpensesDal{get;set;}
	  
                //public static IChronic_disease_Hospitalization_DischargeAbstractDal GetChronic_disease_Hospitalization_DischargeAbstractDal;
                //public NinjectDI(IChronic_disease_Hospitalization_DischargeAbstractDal dal)
               // {
                //    GetChronic_disease_Hospitalization_DischargeAbstractDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Hospitalization_DischargeAbstractDal GetChronic_disease_Hospitalization_DischargeAbstractDal{get;set;}
	  
                //public static IChronic_disease_Hospitalization_DischargeAbstract_AdviceDal GetChronic_disease_Hospitalization_DischargeAbstract_AdviceDal;
                //public NinjectDI(IChronic_disease_Hospitalization_DischargeAbstract_AdviceDal dal)
               // {
                //    GetChronic_disease_Hospitalization_DischargeAbstract_AdviceDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Hospitalization_DischargeAbstract_AdviceDal GetChronic_disease_Hospitalization_DischargeAbstract_AdviceDal{get;set;}
	  
                //public static IChronic_disease_Comm_DiagnosticAddDal GetChronic_disease_Comm_DiagnosticAddDal;
                //public NinjectDI(IChronic_disease_Comm_DiagnosticAddDal dal)
               // {
                //    GetChronic_disease_Comm_DiagnosticAddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_DiagnosticAddDal GetChronic_disease_Comm_DiagnosticAddDal{get;set;}
	  
                //public static IChronic_disease_Data_NamesDal GetChronic_disease_Data_NamesDal;
                //public NinjectDI(IChronic_disease_Data_NamesDal dal)
               // {
                //    GetChronic_disease_Data_NamesDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Data_NamesDal GetChronic_disease_Data_NamesDal{get;set;}
	  
                //public static IChronic_disease_Data_UnitsDal GetChronic_disease_Data_UnitsDal;
                //public NinjectDI(IChronic_disease_Data_UnitsDal dal)
               // {
                //    GetChronic_disease_Data_UnitsDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Data_UnitsDal GetChronic_disease_Data_UnitsDal{get;set;}
	  
                //public static IChronic_disease_Data_SectionsDal GetChronic_disease_Data_SectionsDal;
                //public NinjectDI(IChronic_disease_Data_SectionsDal dal)
               // {
                //    GetChronic_disease_Data_SectionsDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Data_SectionsDal GetChronic_disease_Data_SectionsDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_BloodDal GetChronic_disease_Comm_Testing_BloodDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_BloodDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_BloodDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_BloodDal GetChronic_disease_Comm_Testing_BloodDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_Blood_AddDal GetChronic_disease_Comm_Testing_Blood_AddDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_Blood_AddDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_Blood_AddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_Blood_AddDal GetChronic_disease_Comm_Testing_Blood_AddDal{get;set;}
	  
                //public static IChronic_disease_PicturesDal GetChronic_disease_PicturesDal;
                //public NinjectDI(IChronic_disease_PicturesDal dal)
               // {
                //    GetChronic_disease_PicturesDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_PicturesDal GetChronic_disease_PicturesDal{get;set;}
	  
                //public static IChronic_disease_Data_ResultsDal GetChronic_disease_Data_ResultsDal;
                //public NinjectDI(IChronic_disease_Data_ResultsDal dal)
               // {
                //    GetChronic_disease_Data_ResultsDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Data_ResultsDal GetChronic_disease_Data_ResultsDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_UrineDal GetChronic_disease_Comm_Testing_UrineDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_UrineDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_UrineDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_UrineDal GetChronic_disease_Comm_Testing_UrineDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_Urine_AddDal GetChronic_disease_Comm_Testing_Urine_AddDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_Urine_AddDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_Urine_AddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_Urine_AddDal GetChronic_disease_Comm_Testing_Urine_AddDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_FaecesDal GetChronic_disease_Comm_Testing_FaecesDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_FaecesDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_FaecesDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_FaecesDal GetChronic_disease_Comm_Testing_FaecesDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_SputumDal GetChronic_disease_Comm_Testing_SputumDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_SputumDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_SputumDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_SputumDal GetChronic_disease_Comm_Testing_SputumDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_CSFDal GetChronic_disease_Comm_Testing_CSFDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_CSFDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_CSFDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_CSFDal GetChronic_disease_Comm_Testing_CSFDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_CSFAddDal GetChronic_disease_Comm_Testing_CSFAddDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_CSFAddDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_CSFAddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_CSFAddDal GetChronic_disease_Comm_Testing_CSFAddDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_SCEDal GetChronic_disease_Comm_Testing_SCEDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_SCEDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_SCEDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_SCEDal GetChronic_disease_Comm_Testing_SCEDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_SCEAddDal GetChronic_disease_Comm_Testing_SCEAddDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_SCEAddDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_SCEAddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_SCEAddDal GetChronic_disease_Comm_Testing_SCEAddDal{get;set;}
	  
                //public static IChronic_disease_Comm_HumorProjectNamesDal GetChronic_disease_Comm_HumorProjectNamesDal;
                //public NinjectDI(IChronic_disease_Comm_HumorProjectNamesDal dal)
               // {
                //    GetChronic_disease_Comm_HumorProjectNamesDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_HumorProjectNamesDal GetChronic_disease_Comm_HumorProjectNamesDal{get;set;}
	  
                //public static IChronic_disease_Comm_HumorAddDal GetChronic_disease_Comm_HumorAddDal;
                //public NinjectDI(IChronic_disease_Comm_HumorAddDal dal)
               // {
                //    GetChronic_disease_Comm_HumorAddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_HumorAddDal GetChronic_disease_Comm_HumorAddDal{get;set;}
	  
                //public static IChronic_disease_Comm_HumorDal GetChronic_disease_Comm_HumorDal;
                //public NinjectDI(IChronic_disease_Comm_HumorDal dal)
               // {
                //    GetChronic_disease_Comm_HumorDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_HumorDal GetChronic_disease_Comm_HumorDal{get;set;}
	  
                //public static IChronic_disease_Comm_HumorUnitDal GetChronic_disease_Comm_HumorUnitDal;
                //public NinjectDI(IChronic_disease_Comm_HumorUnitDal dal)
               // {
                //    GetChronic_disease_Comm_HumorUnitDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_HumorUnitDal GetChronic_disease_Comm_HumorUnitDal{get;set;}
	  
                //public static IChronic_disease_Comm_HumorResultDal GetChronic_disease_Comm_HumorResultDal;
                //public NinjectDI(IChronic_disease_Comm_HumorResultDal dal)
               // {
                //    GetChronic_disease_Comm_HumorResultDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_HumorResultDal GetChronic_disease_Comm_HumorResultDal{get;set;}
	  
                //public static IChronic_disease_Comm_HumorQuJianDal GetChronic_disease_Comm_HumorQuJianDal;
                //public NinjectDI(IChronic_disease_Comm_HumorQuJianDal dal)
               // {
                //    GetChronic_disease_Comm_HumorQuJianDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_HumorQuJianDal GetChronic_disease_Comm_HumorQuJianDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_BMCDal GetChronic_disease_Comm_Testing_BMCDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_BMCDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_BMCDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_BMCDal GetChronic_disease_Comm_Testing_BMCDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_BMCAddDal GetChronic_disease_Comm_Testing_BMCAddDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_BMCAddDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_BMCAddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_BMCAddDal GetChronic_disease_Comm_Testing_BMCAddDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_GeneDetection_AddDal GetChronic_disease_Comm_Testing_GeneDetection_AddDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_GeneDetection_AddDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_GeneDetection_AddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_GeneDetection_AddDal GetChronic_disease_Comm_Testing_GeneDetection_AddDal{get;set;}
	  
                //public static IChronic_disease_Comm_Testing_GeneDetectionDal GetChronic_disease_Comm_Testing_GeneDetectionDal;
                //public NinjectDI(IChronic_disease_Comm_Testing_GeneDetectionDal dal)
               // {
                //    GetChronic_disease_Comm_Testing_GeneDetectionDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_Testing_GeneDetectionDal GetChronic_disease_Comm_Testing_GeneDetectionDal{get;set;}
	  
                //public static IICD_9_oldDal GetICD_9_oldDal;
                //public NinjectDI(IICD_9_oldDal dal)
               // {
                //    GetICD_9_oldDal=dal;
               // } 
                [Inject]
                public static IICD_9_oldDal GetICD_9_oldDal{get;set;}
	  
                //public static IChronic_disease_Comm_OperationDal GetChronic_disease_Comm_OperationDal;
                //public NinjectDI(IChronic_disease_Comm_OperationDal dal)
               // {
                //    GetChronic_disease_Comm_OperationDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_OperationDal GetChronic_disease_Comm_OperationDal{get;set;}
	  
                //public static IChronic_disease_Comm_OperationAddDal GetChronic_disease_Comm_OperationAddDal;
                //public NinjectDI(IChronic_disease_Comm_OperationAddDal dal)
               // {
                //    GetChronic_disease_Comm_OperationAddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_OperationAddDal GetChronic_disease_Comm_OperationAddDal{get;set;}
	  
                //public static IChronic_disease_Supplementary_Examination_CTDal GetChronic_disease_Supplementary_Examination_CTDal;
                //public NinjectDI(IChronic_disease_Supplementary_Examination_CTDal dal)
               // {
                //    GetChronic_disease_Supplementary_Examination_CTDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Supplementary_Examination_CTDal GetChronic_disease_Supplementary_Examination_CTDal{get;set;}
	  
                //public static IChronic_disease_Supplementary_Examination_XDal GetChronic_disease_Supplementary_Examination_XDal;
                //public NinjectDI(IChronic_disease_Supplementary_Examination_XDal dal)
               // {
                //    GetChronic_disease_Supplementary_Examination_XDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Supplementary_Examination_XDal GetChronic_disease_Supplementary_Examination_XDal{get;set;}
	  
                //public static IChronic_disease_Supplementary_Examination_USDal GetChronic_disease_Supplementary_Examination_USDal;
                //public NinjectDI(IChronic_disease_Supplementary_Examination_USDal dal)
               // {
                //    GetChronic_disease_Supplementary_Examination_USDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Supplementary_Examination_USDal GetChronic_disease_Supplementary_Examination_USDal{get;set;}
	  
                //public static IChronic_disease_Supplementary_Examination_StomachDal GetChronic_disease_Supplementary_Examination_StomachDal;
                //public NinjectDI(IChronic_disease_Supplementary_Examination_StomachDal dal)
               // {
                //    GetChronic_disease_Supplementary_Examination_StomachDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Supplementary_Examination_StomachDal GetChronic_disease_Supplementary_Examination_StomachDal{get;set;}
	  
                //public static IChronic_disease_Supplementary_Examination_MRIDal GetChronic_disease_Supplementary_Examination_MRIDal;
                //public NinjectDI(IChronic_disease_Supplementary_Examination_MRIDal dal)
               // {
                //    GetChronic_disease_Supplementary_Examination_MRIDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Supplementary_Examination_MRIDal GetChronic_disease_Supplementary_Examination_MRIDal{get;set;}
	  
                //public static IChronic_disease_Supplementary_Examination_HeartDal GetChronic_disease_Supplementary_Examination_HeartDal;
                //public NinjectDI(IChronic_disease_Supplementary_Examination_HeartDal dal)
               // {
                //    GetChronic_disease_Supplementary_Examination_HeartDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Supplementary_Examination_HeartDal GetChronic_disease_Supplementary_Examination_HeartDal{get;set;}
	  
                //public static IChronic_disease_Comm_LungProjectNamesDal GetChronic_disease_Comm_LungProjectNamesDal;
                //public NinjectDI(IChronic_disease_Comm_LungProjectNamesDal dal)
               // {
                //    GetChronic_disease_Comm_LungProjectNamesDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_LungProjectNamesDal GetChronic_disease_Comm_LungProjectNamesDal{get;set;}
	  
                //public static IChronic_disease_Comm_LungQuJianDal GetChronic_disease_Comm_LungQuJianDal;
                //public NinjectDI(IChronic_disease_Comm_LungQuJianDal dal)
               // {
                //    GetChronic_disease_Comm_LungQuJianDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_LungQuJianDal GetChronic_disease_Comm_LungQuJianDal{get;set;}
	  
                //public static IChronic_disease_Comm_LungSexQuJianDal GetChronic_disease_Comm_LungSexQuJianDal;
                //public NinjectDI(IChronic_disease_Comm_LungSexQuJianDal dal)
               // {
                //    GetChronic_disease_Comm_LungSexQuJianDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_LungSexQuJianDal GetChronic_disease_Comm_LungSexQuJianDal{get;set;}
	  
                //public static IChronic_disease_Comm_LungTitleDal GetChronic_disease_Comm_LungTitleDal;
                //public NinjectDI(IChronic_disease_Comm_LungTitleDal dal)
               // {
                //    GetChronic_disease_Comm_LungTitleDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_LungTitleDal GetChronic_disease_Comm_LungTitleDal{get;set;}
	  
                //public static IChronic_disease_Comm_LungUnitDal GetChronic_disease_Comm_LungUnitDal;
                //public NinjectDI(IChronic_disease_Comm_LungUnitDal dal)
               // {
                //    GetChronic_disease_Comm_LungUnitDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_LungUnitDal GetChronic_disease_Comm_LungUnitDal{get;set;}
	  
                //public static IChronic_disease_Comm_LungDal GetChronic_disease_Comm_LungDal;
                //public NinjectDI(IChronic_disease_Comm_LungDal dal)
               // {
                //    GetChronic_disease_Comm_LungDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_LungDal GetChronic_disease_Comm_LungDal{get;set;}
	  
                //public static IChronic_disease_Comm_LungAddDal GetChronic_disease_Comm_LungAddDal;
                //public NinjectDI(IChronic_disease_Comm_LungAddDal dal)
               // {
                //    GetChronic_disease_Comm_LungAddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_Comm_LungAddDal GetChronic_disease_Comm_LungAddDal{get;set;}
	  
                //public static ITestDal GetTestDal;
                //public NinjectDI(ITestDal dal)
               // {
                //    GetTestDal=dal;
               // } 
                [Inject]
                public static ITestDal GetTestDal{get;set;}
	  
                //public static IChronic_disease_BloodPressureDal GetChronic_disease_BloodPressureDal;
                //public NinjectDI(IChronic_disease_BloodPressureDal dal)
               // {
                //    GetChronic_disease_BloodPressureDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_BloodPressureDal GetChronic_disease_BloodPressureDal{get;set;}
	  
                //public static IChronic_disease_BloodPressure_AddDal GetChronic_disease_BloodPressure_AddDal;
                //public NinjectDI(IChronic_disease_BloodPressure_AddDal dal)
               // {
                //    GetChronic_disease_BloodPressure_AddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_BloodPressure_AddDal GetChronic_disease_BloodPressure_AddDal{get;set;}
	  
                //public static IChronic_disease_BloodGlucoseDal GetChronic_disease_BloodGlucoseDal;
                //public NinjectDI(IChronic_disease_BloodGlucoseDal dal)
               // {
                //    GetChronic_disease_BloodGlucoseDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_BloodGlucoseDal GetChronic_disease_BloodGlucoseDal{get;set;}
	  
                //public static IChronic_disease_BloodGlucose_AddDal GetChronic_disease_BloodGlucose_AddDal;
                //public NinjectDI(IChronic_disease_BloodGlucose_AddDal dal)
               // {
                //    GetChronic_disease_BloodGlucose_AddDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_BloodGlucose_AddDal GetChronic_disease_BloodGlucose_AddDal{get;set;}
	  
                //public static IChronic_disease_ConstitutionDal GetChronic_disease_ConstitutionDal;
                //public NinjectDI(IChronic_disease_ConstitutionDal dal)
               // {
                //    GetChronic_disease_ConstitutionDal=dal;
               // } 
                [Inject]
                public static IChronic_disease_ConstitutionDal GetChronic_disease_ConstitutionDal{get;set;}
	  
                //public static IMT_BC_SelfCheckDal GetMT_BC_SelfCheckDal;
                //public NinjectDI(IMT_BC_SelfCheckDal dal)
               // {
                //    GetMT_BC_SelfCheckDal=dal;
               // } 
                [Inject]
                public static IMT_BC_SelfCheckDal GetMT_BC_SelfCheckDal{get;set;}
	   
   }
}

