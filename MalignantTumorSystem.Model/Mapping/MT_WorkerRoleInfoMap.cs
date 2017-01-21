using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
   public class MT_WorkerRoleInfoMap:EntityTypeConfiguration<Entities.MT_WorkerRoleInfo>
    {
       public MT_WorkerRoleInfoMap()
       {
            this.ToTable("MT_WorkerRoleInfo");
            this.HasKey(t => t.id).Property(t => t.id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity).IsRequired().HasColumnName("id");

            this.Property(t => t.worker_id).HasMaxLength(50).IsRequired().HasColumnName("worker_id");

            this.Property(t => t.roleinfo_id).IsRequired().HasColumnName("roleinfo_id");
            this.Property(t => t.worker_name).HasMaxLength(50).HasColumnName("worker_name");
            this.Property(t => t.comment).HasMaxLength(500).HasColumnName("comment");

            this.HasRequired(t => t.Comm_Platform_Worker).WithMany(t => t.MT_WorkerRoleInfo).HasForeignKey(t => t.worker_id).WillCascadeOnDelete(false);

            this.HasRequired(t => t.MT_RoleInfo).WithMany(t => t.MT_WorkerRoleInfo).HasForeignKey(t => t.roleinfo_id).WillCascadeOnDelete(false);

       }

    }
}
