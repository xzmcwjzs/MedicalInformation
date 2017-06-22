namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_MT_BC_Mammography : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MT_BC_Mammography",
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
                        xxtz = c.String(maxLength: 50),
                        zkdxz = c.String(maxLength: 50),
                        zkdxy = c.String(maxLength: 50),
                        zkxzz = c.String(maxLength: 50),
                        zkxzy = c.String(maxLength: 50),
                        zkbyz = c.String(maxLength: 50),
                        zkbyy = c.String(maxLength: 50),
                        zkmdz = c.String(maxLength: 50),
                        zkmdy = c.String(maxLength: 50),
                        ghdxz = c.String(maxLength: 50),
                        ghdxy = c.String(maxLength: 50),
                        ghsmz = c.String(maxLength: 50),
                        ghsmy = c.String(maxLength: 50),
                        ghxtz = c.String(maxLength: 50),
                        ghxty = c.String(maxLength: 50),
                        ghfbz = c.String(maxLength: 50),
                        ghfby = c.String(maxLength: 50),
                        jgnq = c.String(maxLength: 50),
                        bdczmy = c.String(maxLength: 50),
                        qthbzx = c.String(maxLength: 50),
                        doctor = c.String(maxLength: 50),
                        checkdate = c.DateTime(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.MT_BC_Mammography");
        }
    }
}
