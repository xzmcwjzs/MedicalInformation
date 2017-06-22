namespace MalignantTumorSystem.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_ErrorLog : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ErrorLog",
                c => new
                    {
                        nId = c.Int(nullable: false, identity: true),
                        dtDate = c.DateTime(),
                        sThread = c.String(maxLength: 100),
                        sLevel = c.String(maxLength: 200),
                        sLogger = c.String(maxLength: 500),
                        sMessag = c.String(maxLength: 3000),
                        sException = c.String(maxLength: 4000),
                    })
                .PrimaryKey(t => t.nId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.ErrorLog");
        }
    }
}
