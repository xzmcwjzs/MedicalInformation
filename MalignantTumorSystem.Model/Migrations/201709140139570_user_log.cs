namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class user_log : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.UserLog", "Property");
        }
        
        public override void Down()
        {
            AddColumn("dbo.UserLog", "Property", c => c.Int(nullable: false));
        }
    }
}
