namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_UserLog : DbMigration
    {
        public override void Up()
        {
            CreateTable(
               "dbo.UserLog",
               c => new
               {
                   id = c.String(nullable: false, maxLength: 50),
                   user_id=c.String(maxLength:50),
                   user_real_name = c.String(maxLength: 50),
                   ip = c.String(maxLength: 50),
                   computer_name = c.String(maxLength: 50),
                   login_time = c.DateTime(),
                   activex = c.Boolean(),
                   cookies = c.Boolean(),
                   css = c.Boolean(),
                   language = c.String(maxLength: 100),
                   platform = c.String(maxLength: 100),
                   user_agent = c.String(maxLength: 100), 
               })
               .PrimaryKey(t => t.id);
        }
        
        public override void Down()
        {
            DropTable("dbo.UserLog");
        }
    }
}
