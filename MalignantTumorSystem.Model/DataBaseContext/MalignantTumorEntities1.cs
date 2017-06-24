 
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.Mapping;

namespace MalignantTumorSystem.Model.DataBaseContext
{
    public partial class MalignantTumorEntities:DbContext
    {
        public MalignantTumorEntities()
            : base("name=MalignantTumorEntities")
        {
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
			modelBuilder.Configurations.Add(new Comm_Platform_WorkerMap());
		
	 
            modelBuilder.Configurations.Add(new MT_RoleInfoMap());
		
	 
            modelBuilder.Configurations.Add(new MT_WorkerRoleInfoMap());
		
	 
            modelBuilder.Configurations.Add(new Share_ProvinceMap());
		
	 
            modelBuilder.Configurations.Add(new Share_CityMap());
		
	 
            modelBuilder.Configurations.Add(new Share_CountyMap());
		
	 
            modelBuilder.Configurations.Add(new Share_StreetMap());
		
	 
            modelBuilder.Configurations.Add(new Share_CommunityInfoMap());
		
	 
            modelBuilder.Configurations.Add(new Comm_TumourMap());
		
	 
            modelBuilder.Configurations.Add(new Comm_ResidentFileMap());
		
	 
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_DiseaseMap());
		
	 
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_SurgeryMap());
		
	 
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_TraumaMap());
		
	 
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_Blood_TransfusionMap());
		
	 
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_Family_DiseaseMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_SmokeAndDrinkMap());
		
	 
            modelBuilder.Configurations.Add(new Comm_EHR_AbstractMap());
		
	 
            modelBuilder.Configurations.Add(new Comm_ResidentFile_Change_AddressMap());
		
	 
            modelBuilder.Configurations.Add(new Share_DataDictionaryMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Diabetes_familyMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Diabetes_family_relationMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_DailyLifeMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_PhysicalExerciseMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_PhysicalExercise_AddMap());
		
	 
            modelBuilder.Configurations.Add(new ICD_10_oldMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_MedicineMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Data_DiseaseNameMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_DiagnosticMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_OutpatientMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_MedicationMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Outpatient_JudgeMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Outpatient_PrescriptionMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Outpatient_AccessoryExaminationMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_MedicationAddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_HospitalizationMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Hospitalization_ConsultationRecordMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Hospitalization_CourseRecordMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Hospitalization_ExpensesMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Hospitalization_DischargeAbstractMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Hospitalization_DischargeAbstract_AdviceMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_DiagnosticAddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Data_NamesMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Data_UnitsMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Data_SectionsMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_BloodMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_Blood_AddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_PicturesMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Data_ResultsMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_UrineMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_Urine_AddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_FaecesMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_SputumMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_CSFMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_CSFAddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_SCEMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_SCEAddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorProjectNamesMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorAddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorUnitMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorResultMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorQuJianMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_BMCMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_BMCAddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_GeneDetection_AddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_GeneDetectionMap());
		
	 
            modelBuilder.Configurations.Add(new ICD_9_oldMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_OperationMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_OperationAddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_CTMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_XMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_USMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_StomachMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_MRIMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_HeartMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungProjectNamesMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungQuJianMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungSexQuJianMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungTitleMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungUnitMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungAddMap());
		
	 
            modelBuilder.Configurations.Add(new TestMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_BloodPressureMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_BloodPressure_AddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_BloodGlucoseMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_BloodGlucose_AddMap());
		
	 
            modelBuilder.Configurations.Add(new Chronic_disease_ConstitutionMap());
            //注册实体的约定配置规则
		
	 
            //modelBuilder.Configurations.Add(new Comm_Platform_WorkerMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_RoleInfoMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_WorkerRoleInfoMap());
		
	 
            //modelBuilder.Configurations.Add(new Share_ProvinceMap());
		
	 
            //modelBuilder.Configurations.Add(new Share_CityMap());
		
	 
            //modelBuilder.Configurations.Add(new Share_CountyMap());
		
	 
            //modelBuilder.Configurations.Add(new Share_StreetMap());
		
	 
            //modelBuilder.Configurations.Add(new Share_CommunityInfoMap());
		
	 
            //modelBuilder.Configurations.Add(new Comm_TumourMap());
		
	 
            //modelBuilder.Configurations.Add(new Comm_ResidentFileMap());
		
	 
            //modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_DiseaseMap());
		
	 
            //modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_SurgeryMap());
		
	 
            //modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_TraumaMap());
		
	 
            //modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_Blood_TransfusionMap());
		
	 
            //modelBuilder.Configurations.Add(new Comm_ResidentFile_Followup_Family_DiseaseMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_SmokeAndDrinkMap());
		
	 
            //modelBuilder.Configurations.Add(new Comm_EHR_AbstractMap());
		
	 
            //modelBuilder.Configurations.Add(new Comm_ResidentFile_Change_AddressMap());
		
	 
            //modelBuilder.Configurations.Add(new Share_DataDictionaryMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Diabetes_familyMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Diabetes_family_relationMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_DailyLifeMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_PhysicalExerciseMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_PhysicalExercise_AddMap());
		
	 
            //modelBuilder.Configurations.Add(new ICD_10_oldMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_MedicineMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Data_DiseaseNameMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_DiagnosticMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_OutpatientMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_MedicationMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Outpatient_JudgeMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Outpatient_PrescriptionMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Outpatient_AccessoryExaminationMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_MedicationAddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_HospitalizationMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Hospitalization_ConsultationRecordMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Hospitalization_CourseRecordMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Hospitalization_ExpensesMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Hospitalization_DischargeAbstractMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Hospitalization_DischargeAbstract_AdviceMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_DiagnosticAddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Data_NamesMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Data_UnitsMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Data_SectionsMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_BloodMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_Blood_AddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_PicturesMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Data_ResultsMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_UrineMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_Urine_AddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_FaecesMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_SputumMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_CSFMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_CSFAddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_SCEMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_SCEAddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorProjectNamesMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorAddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorUnitMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorResultMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_HumorQuJianMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_BMCMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_BMCAddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_GeneDetection_AddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_Testing_GeneDetectionMap());
		
	 
            //modelBuilder.Configurations.Add(new ICD_9_oldMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_OperationMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_OperationAddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_CTMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_XMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_USMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_StomachMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_MRIMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Supplementary_Examination_HeartMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungProjectNamesMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungQuJianMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungSexQuJianMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungTitleMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungUnitMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_Comm_LungAddMap());
		
	 
            //modelBuilder.Configurations.Add(new TestMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_BloodPressureMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_BloodPressure_AddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_BloodGlucoseMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_BloodGlucose_AddMap());
		
	 
            //modelBuilder.Configurations.Add(new Chronic_disease_ConstitutionMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_SelfCheckMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_FollowupMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_Followup_DoseMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_Comm_Adults_Health_Examination_NewMap());
		
	 
            //modelBuilder.Configurations.Add(new ErrorLogMap());
		
	 
            //modelBuilder.Configurations.Add(new UserLogMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_ClinicalExaminationMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_MammographyMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_UltrasonographyMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_PathologicalDiagnosisMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_OperativeTreatmentMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_RadiotherapyMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_EndocrinotherapyMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_ChemicalTreatmentMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_TCMTreatmentMap());
		
	 
            //modelBuilder.Configurations.Add(new MT_BC_21GenesMap());
     }
		
	     public DbSet<Comm_Platform_Worker> Comm_Platform_Worker { get; set; }
		
	     public DbSet<MT_RoleInfo> MT_RoleInfo { get; set; }
		
	     public DbSet<MT_WorkerRoleInfo> MT_WorkerRoleInfo { get; set; }
		
	     public DbSet<Share_Province> Share_Province { get; set; }
		
	     public DbSet<Share_City> Share_City { get; set; }
		
	     public DbSet<Share_County> Share_County { get; set; }
		
	     public DbSet<Share_Street> Share_Street { get; set; }
		
	     public DbSet<Share_CommunityInfo> Share_CommunityInfo { get; set; }
		
	     public DbSet<Comm_Tumour> Comm_Tumour { get; set; }
		
	     public DbSet<Comm_ResidentFile> Comm_ResidentFile { get; set; }
		
	     public DbSet<Comm_ResidentFile_Followup_Disease> Comm_ResidentFile_Followup_Disease { get; set; }
		
	     public DbSet<Comm_ResidentFile_Followup_Surgery> Comm_ResidentFile_Followup_Surgery { get; set; }
		
	     public DbSet<Comm_ResidentFile_Followup_Trauma> Comm_ResidentFile_Followup_Trauma { get; set; }
		
	     public DbSet<Comm_ResidentFile_Followup_Blood_Transfusion> Comm_ResidentFile_Followup_Blood_Transfusion { get; set; }
		
	     public DbSet<Comm_ResidentFile_Followup_Family_Disease> Comm_ResidentFile_Followup_Family_Disease { get; set; }
		
	     public DbSet<Chronic_disease_SmokeAndDrink> Chronic_disease_SmokeAndDrink { get; set; }
		
	     public DbSet<Comm_EHR_Abstract> Comm_EHR_Abstract { get; set; }
		
	     public DbSet<Comm_ResidentFile_Change_Address> Comm_ResidentFile_Change_Address { get; set; }
		
	     public DbSet<Share_DataDictionary> Share_DataDictionary { get; set; }
		
	     public DbSet<Chronic_disease_Diabetes_family> Chronic_disease_Diabetes_family { get; set; }
		
	     public DbSet<Chronic_disease_Diabetes_family_relation> Chronic_disease_Diabetes_family_relation { get; set; }
		
	     public DbSet<Chronic_disease_DailyLife> Chronic_disease_DailyLife { get; set; }
		
	     public DbSet<Chronic_disease_PhysicalExercise> Chronic_disease_PhysicalExercise { get; set; }
		
	     public DbSet<Chronic_disease_PhysicalExercise_Add> Chronic_disease_PhysicalExercise_Add { get; set; }
		
	     public DbSet<ICD_10_old> ICD_10_old { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Medicine> Chronic_disease_Comm_Medicine { get; set; }
		
	     public DbSet<Chronic_disease_Data_DiseaseName> Chronic_disease_Data_DiseaseName { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Diagnostic> Chronic_disease_Comm_Diagnostic { get; set; }
		
	     public DbSet<Chronic_disease_Outpatient> Chronic_disease_Outpatient { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Medication> Chronic_disease_Comm_Medication { get; set; }
		
	     public DbSet<Chronic_disease_Outpatient_Judge> Chronic_disease_Outpatient_Judge { get; set; }
		
	     public DbSet<Chronic_disease_Outpatient_Prescription> Chronic_disease_Outpatient_Prescription { get; set; }
		
	     public DbSet<Chronic_disease_Outpatient_AccessoryExamination> Chronic_disease_Outpatient_AccessoryExamination { get; set; }
		
	     public DbSet<Chronic_disease_Comm_MedicationAdd> Chronic_disease_Comm_MedicationAdd { get; set; }
		
	     public DbSet<Chronic_disease_Hospitalization> Chronic_disease_Hospitalization { get; set; }
		
	     public DbSet<Chronic_disease_Hospitalization_ConsultationRecord> Chronic_disease_Hospitalization_ConsultationRecord { get; set; }
		
	     public DbSet<Chronic_disease_Hospitalization_CourseRecord> Chronic_disease_Hospitalization_CourseRecord { get; set; }
		
	     public DbSet<Chronic_disease_Hospitalization_Expenses> Chronic_disease_Hospitalization_Expenses { get; set; }
		
	     public DbSet<Chronic_disease_Hospitalization_DischargeAbstract> Chronic_disease_Hospitalization_DischargeAbstract { get; set; }
		
	     public DbSet<Chronic_disease_Hospitalization_DischargeAbstract_Advice> Chronic_disease_Hospitalization_DischargeAbstract_Advice { get; set; }
		
	     public DbSet<Chronic_disease_Comm_DiagnosticAdd> Chronic_disease_Comm_DiagnosticAdd { get; set; }
		
	     public DbSet<Chronic_disease_Data_Names> Chronic_disease_Data_Names { get; set; }
		
	     public DbSet<Chronic_disease_Data_Units> Chronic_disease_Data_Units { get; set; }
		
	     public DbSet<Chronic_disease_Data_Sections> Chronic_disease_Data_Sections { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_Blood> Chronic_disease_Comm_Testing_Blood { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_Blood_Add> Chronic_disease_Comm_Testing_Blood_Add { get; set; }
		
	     public DbSet<Chronic_disease_Pictures> Chronic_disease_Pictures { get; set; }
		
	     public DbSet<Chronic_disease_Data_Results> Chronic_disease_Data_Results { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_Urine> Chronic_disease_Comm_Testing_Urine { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_Urine_Add> Chronic_disease_Comm_Testing_Urine_Add { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_Faeces> Chronic_disease_Comm_Testing_Faeces { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_Sputum> Chronic_disease_Comm_Testing_Sputum { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_CSF> Chronic_disease_Comm_Testing_CSF { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_CSFAdd> Chronic_disease_Comm_Testing_CSFAdd { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_SCE> Chronic_disease_Comm_Testing_SCE { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_SCEAdd> Chronic_disease_Comm_Testing_SCEAdd { get; set; }
		
	     public DbSet<Chronic_disease_Comm_HumorProjectNames> Chronic_disease_Comm_HumorProjectNames { get; set; }
		
	     public DbSet<Chronic_disease_Comm_HumorAdd> Chronic_disease_Comm_HumorAdd { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Humor> Chronic_disease_Comm_Humor { get; set; }
		
	     public DbSet<Chronic_disease_Comm_HumorUnit> Chronic_disease_Comm_HumorUnit { get; set; }
		
	     public DbSet<Chronic_disease_Comm_HumorResult> Chronic_disease_Comm_HumorResult { get; set; }
		
	     public DbSet<Chronic_disease_Comm_HumorQuJian> Chronic_disease_Comm_HumorQuJian { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_BMC> Chronic_disease_Comm_Testing_BMC { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_BMCAdd> Chronic_disease_Comm_Testing_BMCAdd { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_GeneDetection_Add> Chronic_disease_Comm_Testing_GeneDetection_Add { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Testing_GeneDetection> Chronic_disease_Comm_Testing_GeneDetection { get; set; }
		
	     public DbSet<ICD_9_old> ICD_9_old { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Operation> Chronic_disease_Comm_Operation { get; set; }
		
	     public DbSet<Chronic_disease_Comm_OperationAdd> Chronic_disease_Comm_OperationAdd { get; set; }
		
	     public DbSet<Chronic_disease_Supplementary_Examination_CT> Chronic_disease_Supplementary_Examination_CT { get; set; }
		
	     public DbSet<Chronic_disease_Supplementary_Examination_X> Chronic_disease_Supplementary_Examination_X { get; set; }
		
	     public DbSet<Chronic_disease_Supplementary_Examination_US> Chronic_disease_Supplementary_Examination_US { get; set; }
		
	     public DbSet<Chronic_disease_Supplementary_Examination_Stomach> Chronic_disease_Supplementary_Examination_Stomach { get; set; }
		
	     public DbSet<Chronic_disease_Supplementary_Examination_MRI> Chronic_disease_Supplementary_Examination_MRI { get; set; }
		
	     public DbSet<Chronic_disease_Supplementary_Examination_Heart> Chronic_disease_Supplementary_Examination_Heart { get; set; }
		
	     public DbSet<Chronic_disease_Comm_LungProjectNames> Chronic_disease_Comm_LungProjectNames { get; set; }
		
	     public DbSet<Chronic_disease_Comm_LungQuJian> Chronic_disease_Comm_LungQuJian { get; set; }
		
	     public DbSet<Chronic_disease_Comm_LungSexQuJian> Chronic_disease_Comm_LungSexQuJian { get; set; }
		
	     public DbSet<Chronic_disease_Comm_LungTitle> Chronic_disease_Comm_LungTitle { get; set; }
		
	     public DbSet<Chronic_disease_Comm_LungUnit> Chronic_disease_Comm_LungUnit { get; set; }
		
	     public DbSet<Chronic_disease_Comm_Lung> Chronic_disease_Comm_Lung { get; set; }
		
	     public DbSet<Chronic_disease_Comm_LungAdd> Chronic_disease_Comm_LungAdd { get; set; }
		
	     public DbSet<Test> Test { get; set; }
		
	     public DbSet<Chronic_disease_BloodPressure> Chronic_disease_BloodPressure { get; set; }
		
	     public DbSet<Chronic_disease_BloodPressure_Add> Chronic_disease_BloodPressure_Add { get; set; }
		
	     public DbSet<Chronic_disease_BloodGlucose> Chronic_disease_BloodGlucose { get; set; }
		
	     public DbSet<Chronic_disease_BloodGlucose_Add> Chronic_disease_BloodGlucose_Add { get; set; }
		
	     public DbSet<Chronic_disease_Constitution> Chronic_disease_Constitution { get; set; }
		
	     public DbSet<MT_BC_SelfCheck> MT_BC_SelfCheck { get; set; }
		
	     public DbSet<MT_BC_Followup> MT_BC_Followup { get; set; }
		
	     public DbSet<MT_BC_Followup_Dose> MT_BC_Followup_Dose { get; set; }
		
	     public DbSet<MT_Comm_Adults_Health_Examination_New> MT_Comm_Adults_Health_Examination_New { get; set; }
		
	     public DbSet<ErrorLog> ErrorLog { get; set; }
		
	     public DbSet<UserLog> UserLog { get; set; }
		
	     public DbSet<MT_BC_ClinicalExamination> MT_BC_ClinicalExamination { get; set; }
		
	     public DbSet<MT_BC_Mammography> MT_BC_Mammography { get; set; }
		
	     public DbSet<MT_BC_Ultrasonography> MT_BC_Ultrasonography { get; set; }
		
	     public DbSet<MT_BC_PathologicalDiagnosis> MT_BC_PathologicalDiagnosis { get; set; }
		
	     public DbSet<MT_BC_OperativeTreatment> MT_BC_OperativeTreatment { get; set; }
		
	     public DbSet<MT_BC_Radiotherapy> MT_BC_Radiotherapy { get; set; }
		
	     public DbSet<MT_BC_Endocrinotherapy> MT_BC_Endocrinotherapy { get; set; }
		
	     public DbSet<MT_BC_ChemicalTreatment> MT_BC_ChemicalTreatment { get; set; }
		
	     public DbSet<MT_BC_TCMTreatment> MT_BC_TCMTreatment { get; set; }
		
	     public DbSet<MT_BC_21Genes> MT_BC_21Genes { get; set; }
   }
}