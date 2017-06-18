namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_followup : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MT_BC_Followup",
                c => new
                    {
                        id = c.String(nullable: false, maxLength: 50),
                        bc_id = c.String(maxLength: 50),
                        community_code = c.String(maxLength: 50),
                        followup_physician = c.String(maxLength: 50),
                        followup_type = c.String(maxLength: 50),
                        followup_date = c.DateTime(),
                        followup_result = c.String(maxLength: 50),
                        height = c.String(maxLength: 50),
                        weight = c.String(maxLength: 50),
                        height_weight_index = c.String(maxLength: 50),
                        systolic_pressure = c.String(maxLength: 50),
                        diastolic_pressure = c.String(maxLength: 50),
                        dcsc = c.String(maxLength: 50),
                        dpac = c.String(maxLength: 50),
                        food_judge = c.String(maxLength: 50),
                        cycle_suggestion = c.String(maxLength: 50),
                        abidance_result = c.String(maxLength: 50),
                        create_time = c.DateTime(),
                        worker_user_name = c.String(maxLength: 50),
                        finish_time = c.DateTime(),
                        heart_rate = c.String(maxLength: 50),
                        next_heart_rate = c.String(maxLength: 50),
                        next_weight = c.String(maxLength: 50),
                        signs_other = c.String(maxLength: 50),
                        next_daily_smoke = c.String(maxLength: 50),
                        next_daily_drink = c.String(maxLength: 50),
                        next_salt = c.String(maxLength: 50),
                        sport1 = c.String(maxLength: 50),
                        sport2 = c.String(maxLength: 50),
                        next_sport1 = c.String(maxLength: 50),
                        next_sport2 = c.String(maxLength: 50),
                        xltz = c.String(maxLength: 50),
                        bloodsugar = c.String(maxLength: 50),
                        bloodsugar_other = c.String(maxLength: 50),
                        org = c.String(maxLength: 50),
                        reason = c.String(maxLength: 50),
                        salt = c.String(maxLength: 50),
                        next_time = c.DateTime(),
                        ssy1 = c.String(maxLength: 50),
                        szy1 = c.String(maxLength: 50),
                        firstsymptomdate = c.DateTime(),
                        firstvisitdate = c.DateTime(),
                        firstdiagnosisdate = c.DateTime(),
                        diagnosishospital = c.String(maxLength: 50),
                        diseasename = c.String(maxLength: 50),
                        diagnosisbasis = c.String(maxLength: 50),
                        pathologictype = c.String(maxLength: 50),
                        treatmentsituation = c.String(maxLength: 50),
                        complication = c.String(maxLength: 50),
                        treatmenthospital = c.String(maxLength: 50),
                        treatment = c.String(maxLength: 50),
                        treatmentother = c.String(maxLength: 50),
                        firstoperationhospital = c.String(maxLength: 50),
                        firstoperationdate = c.DateTime(),
                        firstoperationnature = c.String(maxLength: 50),
                        transfer = c.String(maxLength: 50),
                        transferposition = c.String(maxLength: 50),
                        recrudescence = c.String(maxLength: 50),
                        recrudescencedate = c.DateTime(),
                        tumorhistory = c.String(maxLength: 50),
                        tumorhistoryrelation = c.String(maxLength: 50),
                        tumorhistorytype = c.String(maxLength: 50),
                        tumorhistorytypeother = c.String(maxLength: 50),
                        correctdiagnosis = c.String(maxLength: 50),
                        correctdiagnosissite = c.String(maxLength: 50),
                        correctdiagnosisdate = c.DateTime(),
                        presentsituation = c.String(maxLength: 50),
                        guidecontent = c.String(maxLength: 50),
                        cardscore = c.String(maxLength: 50),
                        revokemanagedate = c.DateTime(),
                        revokereason = c.String(maxLength: 50),
                        isdeath = c.String(maxLength: 50),
                        deathdate = c.String(maxLength: 50),
                        deathsite = c.String(maxLength: 50),
                        surviveyear = c.String(maxLength: 50),
                        survivemonth = c.String(maxLength: 50),
                    })
                .PrimaryKey(t => t.id);
            
            CreateTable(
                "dbo.MT_BC_Followup_Dose",
                c => new
                    {
                        id = c.String(nullable: false, maxLength: 50),
                        bc_followup_id = c.String(maxLength: 50),
                        resident_id = c.String(maxLength: 50),
                        community_code = c.String(maxLength: 50),
                        dose_dependence = c.String(maxLength: 50),
                        drug_name = c.String(maxLength: 50),
                        drug_frequence = c.String(maxLength: 50),
                        dosage_unit = c.String(maxLength: 50),
                        dosage_per_time = c.String(maxLength: 50),
                        dosage_total = c.String(maxLength: 50),
                        medication_approach = c.String(maxLength: 50),
                        has_side_effect = c.String(maxLength: 50),
                        side_effect_description = c.String(maxLength: 100),
                        create_time = c.DateTime(),
                        worker_user_name = c.String(maxLength: 50),
                        other = c.String(maxLength: 500),
                        drug_name1 = c.String(maxLength: 50),
                        drug_frequence1 = c.String(maxLength: 50),
                        dosage_unit1 = c.String(maxLength: 50),
                        dosage_per_time1 = c.String(maxLength: 50),
                        dosage_total1 = c.String(maxLength: 50),
                        medication_approach1 = c.String(maxLength: 50),
                        drug_name2 = c.String(maxLength: 50),
                        drug_frequence2 = c.String(maxLength: 50),
                        dosage_unit2 = c.String(maxLength: 50),
                        dosage_per_time2 = c.String(maxLength: 50),
                        dosage_total2 = c.String(maxLength: 50),
                        medication_approach2 = c.String(maxLength: 50),
                        drug_name3 = c.String(maxLength: 50),
                        drug_frequence3 = c.String(maxLength: 50),
                        dosage_unit3 = c.String(maxLength: 50),
                        dosage_per_time3 = c.String(maxLength: 50),
                        dosage_total3 = c.String(maxLength: 50),
                        medication_approach3 = c.String(maxLength: 50),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.MT_BC_Followup_Dose");
            DropTable("dbo.MT_BC_Followup");
        }
    }
}
