namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_MT_BC_21Genes : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MT_BC_21Genes",
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
                        Ki67 = c.String(maxLength: 50),
                        STK15 = c.String(maxLength: 50),
                        Survivin = c.String(maxLength: 50),
                        CyclinB1 = c.String(maxLength: 50),
                        MYBL2 = c.String(maxLength: 50),
                        Stromolysin = c.String(maxLength: 50),
                        Cathepsin = c.String(maxLength: 50),
                        GBR7 = c.String(maxLength: 50),
                        HER2 = c.String(maxLength: 50),
                        ER = c.String(maxLength: 50),
                        PR = c.String(maxLength: 50),
                        BCL = c.String(maxLength: 50),
                        SCUBE = c.String(maxLength: 50),
                        GSTM1 = c.String(maxLength: 50),
                        CD68 = c.String(maxLength: 50),
                        BAG1 = c.String(maxLength: 50),
                        actin = c.String(maxLength: 50),
                        RPLPO = c.String(maxLength: 50),
                        GUS = c.String(maxLength: 50),
                        TFRC = c.String(maxLength: 50),
                        GAPDH = c.String(maxLength: 50),
                        RS = c.String(maxLength: 50),
                        advice = c.String(maxLength: 100),
                        doctor = c.String(maxLength: 50),
                        checkdate = c.DateTime(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.MT_BC_21Genes");
        }
    }
}
