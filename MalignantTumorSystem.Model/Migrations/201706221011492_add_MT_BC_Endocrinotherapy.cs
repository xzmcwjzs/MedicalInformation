namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_MT_BC_Endocrinotherapy : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MT_BC_Endocrinotherapy",
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
                        zl1q = c.String(maxLength: 1000),
                        zl1h = c.String(maxLength: 1000),
                        zl2q = c.String(maxLength: 1000),
                        zl2h = c.String(maxLength: 1000),
                        zl3q = c.String(maxLength: 1000),
                        zl3h = c.String(maxLength: 1000),
                        doctor = c.String(maxLength: 50),
                        checkdate = c.DateTime(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.MT_BC_Endocrinotherapy");
        }
    }
}
