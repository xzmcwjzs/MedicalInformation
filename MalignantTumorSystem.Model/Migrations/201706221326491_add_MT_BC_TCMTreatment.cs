namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_MT_BC_TCMTreatment : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MT_BC_TCMTreatment",
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
                        zl = c.String(maxLength: 50),
                        zl1jj = c.String(maxLength: 100),
                        zl2jj = c.String(maxLength: 100),
                        zl3jj = c.String(maxLength: 100),
                        zl4jj = c.String(maxLength: 100),
                        zl5jj = c.String(maxLength: 100),
                        zl6jj = c.String(maxLength: 100),
                        zl7jj = c.String(maxLength: 100),
                        zl8jj = c.String(maxLength: 100),
                        zl9jj = c.String(maxLength: 100),
                        zl10jj = c.String(maxLength: 100),
                        zl11jj = c.String(maxLength: 100),
                        zl12jj = c.String(maxLength: 100),
                        wyy = c.String(maxLength: 50),
                        zl13jj = c.String(maxLength: 500),
                        doctor = c.String(maxLength: 50),
                        checkdate = c.DateTime(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.MT_BC_TCMTreatment");
        }
    }
}
