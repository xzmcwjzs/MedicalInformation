using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
   public class MT_RoleInfoMap:EntityTypeConfiguration<Entities.MT_RoleInfo>
    {
       public MT_RoleInfoMap() {
           this.ToTable("MT_RoleInfo");

           this.HasKey(t => t.id).Property(t => t.id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);

           this.Property(t => t.id).IsRequired().HasColumnName("id");
           this.Property(t => t.role).HasMaxLength(50).HasColumnName("role");
           this.Property(t => t.role_name).HasMaxLength(50).HasColumnName("role_name");
           this.Property(t => t.comment).HasMaxLength(500).HasColumnName("comment");
           this.Property(t => t.image_name).HasMaxLength(50).HasColumnName("image_name");
           this.Property(t => t.first_letter).HasMaxLength(10).HasColumnName("first_letter");
       }
    }
}
