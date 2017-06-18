 
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;  
using System.IO;  
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.DAL;

namespace MalignantTumorSystem.DI{

    public partial class AbstractFactory
	{
           	    public static Comm_Platform_WorkerDal GetComm_Platform_WorkerDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Comm_Platform_WorkerDal") as 

Comm_Platform_WorkerDal;
		    }
	  	    public static MT_RoleInfoDal GetMT_RoleInfoDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".MT_RoleInfoDal") as 

MT_RoleInfoDal;
		    }
	  	    public static MT_WorkerRoleInfoDal GetMT_WorkerRoleInfoDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".MT_WorkerRoleInfoDal") as 

MT_WorkerRoleInfoDal;
		    }
	  	    public static Share_ProvinceDal GetShare_ProvinceDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Share_ProvinceDal") as 

Share_ProvinceDal;
		    }
	  	    public static Share_CityDal GetShare_CityDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Share_CityDal") as 

Share_CityDal;
		    }
	  	    public static Share_CountyDal GetShare_CountyDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Share_CountyDal") as 

Share_CountyDal;
		    }
	  	    public static Share_StreetDal GetShare_StreetDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Share_StreetDal") as 

Share_StreetDal;
		    }
	  	    public static Share_CommunityInfoDal GetShare_CommunityInfoDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Share_CommunityInfoDal") as 

Share_CommunityInfoDal;
		    }
	  	    public static Comm_TumourDal GetComm_TumourDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Comm_TumourDal") as 

Comm_TumourDal;
		    }
	  	    public static Comm_ResidentFileDal GetComm_ResidentFileDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Comm_ResidentFileDal") as 

Comm_ResidentFileDal;
		    }
	  	    public static Comm_ResidentFile_Followup_DiseaseDal GetComm_ResidentFile_Followup_DiseaseDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Comm_ResidentFile_Followup_DiseaseDal") as 

Comm_ResidentFile_Followup_DiseaseDal;
		    }
	  	    public static Comm_ResidentFile_Followup_SurgeryDal GetComm_ResidentFile_Followup_SurgeryDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Comm_ResidentFile_Followup_SurgeryDal") as 

Comm_ResidentFile_Followup_SurgeryDal;
		    }
	  	    public static Comm_ResidentFile_Followup_TraumaDal GetComm_ResidentFile_Followup_TraumaDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Comm_ResidentFile_Followup_TraumaDal") as 

Comm_ResidentFile_Followup_TraumaDal;
		    }
	  	    public static Comm_ResidentFile_Followup_Blood_TransfusionDal GetComm_ResidentFile_Followup_Blood_TransfusionDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Comm_ResidentFile_Followup_Blood_TransfusionDal") as 

Comm_ResidentFile_Followup_Blood_TransfusionDal;
		    }
	  	    public static Comm_ResidentFile_Followup_Family_DiseaseDal GetComm_ResidentFile_Followup_Family_DiseaseDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Comm_ResidentFile_Followup_Family_DiseaseDal") as 

Comm_ResidentFile_Followup_Family_DiseaseDal;
		    }
	  	    public static Chronic_disease_SmokeAndDrinkDal GetChronic_disease_SmokeAndDrinkDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_SmokeAndDrinkDal") as 

Chronic_disease_SmokeAndDrinkDal;
		    }
	  	    public static Comm_EHR_AbstractDal GetComm_EHR_AbstractDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Comm_EHR_AbstractDal") as 

Comm_EHR_AbstractDal;
		    }
	  	    public static Comm_ResidentFile_Change_AddressDal GetComm_ResidentFile_Change_AddressDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Comm_ResidentFile_Change_AddressDal") as 

Comm_ResidentFile_Change_AddressDal;
		    }
	  	    public static Share_DataDictionaryDal GetShare_DataDictionaryDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Share_DataDictionaryDal") as 

Share_DataDictionaryDal;
		    }
	  	    public static Chronic_disease_Diabetes_familyDal GetChronic_disease_Diabetes_familyDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Diabetes_familyDal") as 

Chronic_disease_Diabetes_familyDal;
		    }
	  	    public static Chronic_disease_Diabetes_family_relationDal GetChronic_disease_Diabetes_family_relationDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Diabetes_family_relationDal") as 

Chronic_disease_Diabetes_family_relationDal;
		    }
	  	    public static Chronic_disease_DailyLifeDal GetChronic_disease_DailyLifeDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_DailyLifeDal") as 

Chronic_disease_DailyLifeDal;
		    }
	  	    public static Chronic_disease_PhysicalExerciseDal GetChronic_disease_PhysicalExerciseDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_PhysicalExerciseDal") as 

Chronic_disease_PhysicalExerciseDal;
		    }
	  	    public static Chronic_disease_PhysicalExercise_AddDal GetChronic_disease_PhysicalExercise_AddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_PhysicalExercise_AddDal") as 

Chronic_disease_PhysicalExercise_AddDal;
		    }
	  	    public static ICD_10_oldDal GetICD_10_oldDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".ICD_10_oldDal") as 

ICD_10_oldDal;
		    }
	  	    public static Chronic_disease_Comm_MedicineDal GetChronic_disease_Comm_MedicineDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_MedicineDal") as 

Chronic_disease_Comm_MedicineDal;
		    }
	  	    public static Chronic_disease_Data_DiseaseNameDal GetChronic_disease_Data_DiseaseNameDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Data_DiseaseNameDal") as 

Chronic_disease_Data_DiseaseNameDal;
		    }
	  	    public static Chronic_disease_Comm_DiagnosticDal GetChronic_disease_Comm_DiagnosticDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_DiagnosticDal") as 

Chronic_disease_Comm_DiagnosticDal;
		    }
	  	    public static Chronic_disease_OutpatientDal GetChronic_disease_OutpatientDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_OutpatientDal") as 

Chronic_disease_OutpatientDal;
		    }
	  	    public static Chronic_disease_Comm_MedicationDal GetChronic_disease_Comm_MedicationDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_MedicationDal") as 

Chronic_disease_Comm_MedicationDal;
		    }
	  	    public static Chronic_disease_Outpatient_JudgeDal GetChronic_disease_Outpatient_JudgeDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Outpatient_JudgeDal") as 

Chronic_disease_Outpatient_JudgeDal;
		    }
	  	    public static Chronic_disease_Outpatient_PrescriptionDal GetChronic_disease_Outpatient_PrescriptionDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Outpatient_PrescriptionDal") as 

Chronic_disease_Outpatient_PrescriptionDal;
		    }
	  	    public static Chronic_disease_Outpatient_AccessoryExaminationDal GetChronic_disease_Outpatient_AccessoryExaminationDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Outpatient_AccessoryExaminationDal") as 

Chronic_disease_Outpatient_AccessoryExaminationDal;
		    }
	  	    public static Chronic_disease_Comm_MedicationAddDal GetChronic_disease_Comm_MedicationAddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_MedicationAddDal") as 

Chronic_disease_Comm_MedicationAddDal;
		    }
	  	    public static Chronic_disease_HospitalizationDal GetChronic_disease_HospitalizationDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_HospitalizationDal") as 

Chronic_disease_HospitalizationDal;
		    }
	  	    public static Chronic_disease_Hospitalization_ConsultationRecordDal GetChronic_disease_Hospitalization_ConsultationRecordDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Hospitalization_ConsultationRecordDal") as 

Chronic_disease_Hospitalization_ConsultationRecordDal;
		    }
	  	    public static Chronic_disease_Hospitalization_CourseRecordDal GetChronic_disease_Hospitalization_CourseRecordDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Hospitalization_CourseRecordDal") as 

Chronic_disease_Hospitalization_CourseRecordDal;
		    }
	  	    public static Chronic_disease_Hospitalization_ExpensesDal GetChronic_disease_Hospitalization_ExpensesDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Hospitalization_ExpensesDal") as 

Chronic_disease_Hospitalization_ExpensesDal;
		    }
	  	    public static Chronic_disease_Hospitalization_DischargeAbstractDal GetChronic_disease_Hospitalization_DischargeAbstractDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Hospitalization_DischargeAbstractDal") as 

Chronic_disease_Hospitalization_DischargeAbstractDal;
		    }
	  	    public static Chronic_disease_Hospitalization_DischargeAbstract_AdviceDal GetChronic_disease_Hospitalization_DischargeAbstract_AdviceDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Hospitalization_DischargeAbstract_AdviceDal") as 

Chronic_disease_Hospitalization_DischargeAbstract_AdviceDal;
		    }
	  	    public static Chronic_disease_Comm_DiagnosticAddDal GetChronic_disease_Comm_DiagnosticAddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_DiagnosticAddDal") as 

Chronic_disease_Comm_DiagnosticAddDal;
		    }
	  	    public static Chronic_disease_Data_NamesDal GetChronic_disease_Data_NamesDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Data_NamesDal") as 

Chronic_disease_Data_NamesDal;
		    }
	  	    public static Chronic_disease_Data_UnitsDal GetChronic_disease_Data_UnitsDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Data_UnitsDal") as 

Chronic_disease_Data_UnitsDal;
		    }
	  	    public static Chronic_disease_Data_SectionsDal GetChronic_disease_Data_SectionsDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Data_SectionsDal") as 

Chronic_disease_Data_SectionsDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_BloodDal GetChronic_disease_Comm_Testing_BloodDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_BloodDal") as 

Chronic_disease_Comm_Testing_BloodDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_Blood_AddDal GetChronic_disease_Comm_Testing_Blood_AddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_Blood_AddDal") as 

Chronic_disease_Comm_Testing_Blood_AddDal;
		    }
	  	    public static Chronic_disease_PicturesDal GetChronic_disease_PicturesDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_PicturesDal") as 

Chronic_disease_PicturesDal;
		    }
	  	    public static Chronic_disease_Data_ResultsDal GetChronic_disease_Data_ResultsDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Data_ResultsDal") as 

Chronic_disease_Data_ResultsDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_UrineDal GetChronic_disease_Comm_Testing_UrineDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_UrineDal") as 

Chronic_disease_Comm_Testing_UrineDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_Urine_AddDal GetChronic_disease_Comm_Testing_Urine_AddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_Urine_AddDal") as 

Chronic_disease_Comm_Testing_Urine_AddDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_FaecesDal GetChronic_disease_Comm_Testing_FaecesDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_FaecesDal") as 

Chronic_disease_Comm_Testing_FaecesDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_SputumDal GetChronic_disease_Comm_Testing_SputumDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_SputumDal") as 

Chronic_disease_Comm_Testing_SputumDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_CSFDal GetChronic_disease_Comm_Testing_CSFDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_CSFDal") as 

Chronic_disease_Comm_Testing_CSFDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_CSFAddDal GetChronic_disease_Comm_Testing_CSFAddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_CSFAddDal") as 

Chronic_disease_Comm_Testing_CSFAddDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_SCEDal GetChronic_disease_Comm_Testing_SCEDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_SCEDal") as 

Chronic_disease_Comm_Testing_SCEDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_SCEAddDal GetChronic_disease_Comm_Testing_SCEAddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_SCEAddDal") as 

Chronic_disease_Comm_Testing_SCEAddDal;
		    }
	  	    public static Chronic_disease_Comm_HumorProjectNamesDal GetChronic_disease_Comm_HumorProjectNamesDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_HumorProjectNamesDal") as 

Chronic_disease_Comm_HumorProjectNamesDal;
		    }
	  	    public static Chronic_disease_Comm_HumorAddDal GetChronic_disease_Comm_HumorAddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_HumorAddDal") as 

Chronic_disease_Comm_HumorAddDal;
		    }
	  	    public static Chronic_disease_Comm_HumorDal GetChronic_disease_Comm_HumorDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_HumorDal") as 

Chronic_disease_Comm_HumorDal;
		    }
	  	    public static Chronic_disease_Comm_HumorUnitDal GetChronic_disease_Comm_HumorUnitDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_HumorUnitDal") as 

Chronic_disease_Comm_HumorUnitDal;
		    }
	  	    public static Chronic_disease_Comm_HumorResultDal GetChronic_disease_Comm_HumorResultDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_HumorResultDal") as 

Chronic_disease_Comm_HumorResultDal;
		    }
	  	    public static Chronic_disease_Comm_HumorQuJianDal GetChronic_disease_Comm_HumorQuJianDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_HumorQuJianDal") as 

Chronic_disease_Comm_HumorQuJianDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_BMCDal GetChronic_disease_Comm_Testing_BMCDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_BMCDal") as 

Chronic_disease_Comm_Testing_BMCDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_BMCAddDal GetChronic_disease_Comm_Testing_BMCAddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_BMCAddDal") as 

Chronic_disease_Comm_Testing_BMCAddDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_GeneDetection_AddDal GetChronic_disease_Comm_Testing_GeneDetection_AddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_GeneDetection_AddDal") as 

Chronic_disease_Comm_Testing_GeneDetection_AddDal;
		    }
	  	    public static Chronic_disease_Comm_Testing_GeneDetectionDal GetChronic_disease_Comm_Testing_GeneDetectionDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_Testing_GeneDetectionDal") as 

Chronic_disease_Comm_Testing_GeneDetectionDal;
		    }
	  	    public static ICD_9_oldDal GetICD_9_oldDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".ICD_9_oldDal") as 

ICD_9_oldDal;
		    }
	  	    public static Chronic_disease_Comm_OperationDal GetChronic_disease_Comm_OperationDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_OperationDal") as 

Chronic_disease_Comm_OperationDal;
		    }
	  	    public static Chronic_disease_Comm_OperationAddDal GetChronic_disease_Comm_OperationAddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_OperationAddDal") as 

Chronic_disease_Comm_OperationAddDal;
		    }
	  	    public static Chronic_disease_Supplementary_Examination_CTDal GetChronic_disease_Supplementary_Examination_CTDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Supplementary_Examination_CTDal") as 

Chronic_disease_Supplementary_Examination_CTDal;
		    }
	  	    public static Chronic_disease_Supplementary_Examination_XDal GetChronic_disease_Supplementary_Examination_XDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Supplementary_Examination_XDal") as 

Chronic_disease_Supplementary_Examination_XDal;
		    }
	  	    public static Chronic_disease_Supplementary_Examination_USDal GetChronic_disease_Supplementary_Examination_USDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Supplementary_Examination_USDal") as 

Chronic_disease_Supplementary_Examination_USDal;
		    }
	  	    public static Chronic_disease_Supplementary_Examination_StomachDal GetChronic_disease_Supplementary_Examination_StomachDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Supplementary_Examination_StomachDal") as 

Chronic_disease_Supplementary_Examination_StomachDal;
		    }
	  	    public static Chronic_disease_Supplementary_Examination_MRIDal GetChronic_disease_Supplementary_Examination_MRIDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Supplementary_Examination_MRIDal") as 

Chronic_disease_Supplementary_Examination_MRIDal;
		    }
	  	    public static Chronic_disease_Supplementary_Examination_HeartDal GetChronic_disease_Supplementary_Examination_HeartDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Supplementary_Examination_HeartDal") as 

Chronic_disease_Supplementary_Examination_HeartDal;
		    }
	  	    public static Chronic_disease_Comm_LungProjectNamesDal GetChronic_disease_Comm_LungProjectNamesDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_LungProjectNamesDal") as 

Chronic_disease_Comm_LungProjectNamesDal;
		    }
	  	    public static Chronic_disease_Comm_LungQuJianDal GetChronic_disease_Comm_LungQuJianDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_LungQuJianDal") as 

Chronic_disease_Comm_LungQuJianDal;
		    }
	  	    public static Chronic_disease_Comm_LungSexQuJianDal GetChronic_disease_Comm_LungSexQuJianDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_LungSexQuJianDal") as 

Chronic_disease_Comm_LungSexQuJianDal;
		    }
	  	    public static Chronic_disease_Comm_LungTitleDal GetChronic_disease_Comm_LungTitleDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_LungTitleDal") as 

Chronic_disease_Comm_LungTitleDal;
		    }
	  	    public static Chronic_disease_Comm_LungUnitDal GetChronic_disease_Comm_LungUnitDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_LungUnitDal") as 

Chronic_disease_Comm_LungUnitDal;
		    }
	  	    public static Chronic_disease_Comm_LungDal GetChronic_disease_Comm_LungDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_LungDal") as 

Chronic_disease_Comm_LungDal;
		    }
	  	    public static Chronic_disease_Comm_LungAddDal GetChronic_disease_Comm_LungAddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_Comm_LungAddDal") as 

Chronic_disease_Comm_LungAddDal;
		    }
	  	    public static TestDal GetTestDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".TestDal") as 

TestDal;
		    }
	  	    public static Chronic_disease_BloodPressureDal GetChronic_disease_BloodPressureDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_BloodPressureDal") as 

Chronic_disease_BloodPressureDal;
		    }
	  	    public static Chronic_disease_BloodPressure_AddDal GetChronic_disease_BloodPressure_AddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_BloodPressure_AddDal") as 

Chronic_disease_BloodPressure_AddDal;
		    }
	  	    public static Chronic_disease_BloodGlucoseDal GetChronic_disease_BloodGlucoseDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_BloodGlucoseDal") as 

Chronic_disease_BloodGlucoseDal;
		    }
	  	    public static Chronic_disease_BloodGlucose_AddDal GetChronic_disease_BloodGlucose_AddDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_BloodGlucose_AddDal") as 

Chronic_disease_BloodGlucose_AddDal;
		    }
	  	    public static Chronic_disease_ConstitutionDal GetChronic_disease_ConstitutionDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".Chronic_disease_ConstitutionDal") as 

Chronic_disease_ConstitutionDal;
		    }
	  	    public static MT_BC_SelfCheckDal GetMT_BC_SelfCheckDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".MT_BC_SelfCheckDal") as 

MT_BC_SelfCheckDal;
		    }
	  	    public static MT_BC_FollowupDal GetMT_BC_FollowupDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".MT_BC_FollowupDal") as 

MT_BC_FollowupDal;
		    }
	  	    public static MT_BC_Followup_DoseDal GetMT_BC_Followup_DoseDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".MT_BC_Followup_DoseDal") as 

MT_BC_Followup_DoseDal;
		    }
	  	    public static MT_Comm_Adults_Health_Examination_NewDal GetMT_Comm_Adults_Health_Examination_NewDal()
		    {
		        return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".MT_Comm_Adults_Health_Examination_NewDal") as 

MT_Comm_Adults_Health_Examination_NewDal;
		    }
	   
   }
}

