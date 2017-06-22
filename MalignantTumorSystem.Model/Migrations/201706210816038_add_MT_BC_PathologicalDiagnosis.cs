namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_MT_BC_PathologicalDiagnosis : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MT_BC_PathologicalDiagnosis",
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
                        sjrq = c.DateTime(),
                        sjys = c.String(maxLength: 50),
                        sjcl = c.String(maxLength: 1000),
                        lczd = c.String(maxLength: 1000),
                        pic_path = c.String(maxLength: 1000),
                        rysj = c.String(maxLength: 1000),
                        blzd = c.String(maxLength: 1000),
                        jl = c.String(maxLength: 1000),
                        bgys = c.String(maxLength: 50),
                        shys = c.String(maxLength: 50),
                        bgri = c.DateTime(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.MT_BC_PathologicalDiagnosis");
        }
    }
}
