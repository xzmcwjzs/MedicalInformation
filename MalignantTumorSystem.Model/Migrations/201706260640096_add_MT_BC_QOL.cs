namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_MT_BC_QOL : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MT_BC_QOL",
                c => new
                    {
                        id = c.String(nullable: false, maxLength: 50),
                        resident_id = c.String(nullable: false, maxLength: 50),
                        name = c.String(nullable: false, maxLength: 50),
                        sex = c.String(nullable: false, maxLength: 50),
                        age = c.String(nullable: false, maxLength: 50),
                        id_card_number = c.String(nullable: false, maxLength: 50),
                        birth_date = c.DateTime(),
                        community_code = c.String(nullable: false, maxLength: 50),
                        address = c.String(maxLength: 200),
                        phone = c.String(nullable: false, maxLength: 50),
                        create_time = c.DateTime(),
                        worker_user_name = c.String(nullable: false, maxLength: 50),
                        worker_user_realname = c.String(nullable: false, maxLength: 50),
                        q1 = c.String(maxLength: 50),
                        q2 = c.String(maxLength: 50),
                        q3 = c.String(maxLength: 50),
                        q4 = c.String(maxLength: 50),
                        q5 = c.String(maxLength: 50),
                        q6 = c.String(maxLength: 50),
                        q7 = c.String(maxLength: 50),
                        q8 = c.String(maxLength: 50),
                        q9 = c.String(maxLength: 50),
                        q10 = c.String(maxLength: 50),
                        q11 = c.String(maxLength: 50),
                        q12 = c.String(maxLength: 50),
                        q13 = c.String(maxLength: 50),
                        q14 = c.String(maxLength: 50),
                        q15 = c.String(maxLength: 50),
                        q16 = c.String(maxLength: 50),
                        q17 = c.String(maxLength: 50),
                        q18 = c.String(maxLength: 50),
                        q19 = c.String(maxLength: 50),
                        q20 = c.String(maxLength: 50),
                        q21 = c.String(maxLength: 50),
                        q22 = c.String(maxLength: 50),
                        q23 = c.String(maxLength: 50),
                        q24 = c.String(maxLength: 50),
                        q25 = c.String(maxLength: 50),
                        q26 = c.String(maxLength: 50),
                        q27 = c.String(maxLength: 50),
                        q28 = c.String(maxLength: 50),
                        q29 = c.String(maxLength: 50),
                        q30 = c.String(maxLength: 50),
                        rs1 = c.String(maxLength: 50),
                        rs2 = c.String(maxLength: 50),
                        rs3 = c.String(maxLength: 50),
                        rs4 = c.String(maxLength: 50),
                        rs5 = c.String(maxLength: 50),
                        rs6 = c.String(maxLength: 50),
                        rs7 = c.String(maxLength: 50),
                        rs8 = c.String(maxLength: 50),
                        rs9 = c.String(maxLength: 50),
                        rs10 = c.String(maxLength: 50),
                        rs11 = c.String(maxLength: 50),
                        rs12 = c.String(maxLength: 50),
                        rs13 = c.String(maxLength: 50),
                        rs14 = c.String(maxLength: 50),
                        rs15 = c.String(maxLength: 50),
                        s1 = c.String(maxLength: 50),
                        s2 = c.String(maxLength: 50),
                        s3 = c.String(maxLength: 50),
                        s4 = c.String(maxLength: 50),
                        s5 = c.String(maxLength: 50),
                        s6 = c.String(maxLength: 50),
                        s7 = c.String(maxLength: 50),
                        s8 = c.String(maxLength: 50),
                        s9 = c.String(maxLength: 50),
                        s10 = c.String(maxLength: 50),
                        s11 = c.String(maxLength: 50),
                        s12 = c.String(maxLength: 50),
                        s13 = c.String(maxLength: 50),
                        s14 = c.String(maxLength: 50),
                        s15 = c.String(maxLength: 50),
                        advice = c.String(maxLength: 1000),
                        doctor = c.String(maxLength: 50),
                        checkdate = c.DateTime(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.MT_BC_QOL");
        }
    }
}
