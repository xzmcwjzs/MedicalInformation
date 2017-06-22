namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_MT_BC_Ultrasonography : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MT_BC_Ultrasonography",
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
                        syz = c.String(maxLength: 50),
                        syzqt = c.String(maxLength: 50),
                        jcbw = c.String(maxLength: 1000),
                        lcbx = c.String(maxLength: 1000),
                        csbx = c.String(maxLength: 1000),
                        jczd = c.String(maxLength: 1000),
                        ysjy = c.String(maxLength: 1000),
                        doctor = c.String(maxLength: 50),
                        checkdate = c.DateTime(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.MT_BC_Ultrasonography");
        }
    }
}
