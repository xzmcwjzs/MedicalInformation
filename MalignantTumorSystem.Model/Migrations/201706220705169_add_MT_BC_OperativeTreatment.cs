namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_MT_BC_OperativeTreatment : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MT_BC_OperativeTreatment",
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
                        sh = c.String(maxLength: 50),
                        shxj1 = c.String(maxLength: 50),
                        shxj2 = c.String(maxLength: 50),
                        shxj3 = c.String(maxLength: 50),
                        shxj4 = c.String(maxLength: 50),
                        doctor = c.String(maxLength: 50),
                        checkdate = c.DateTime(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.MT_BC_OperativeTreatment");
        }
    }
}
