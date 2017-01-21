using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class ICD_9_oldMap : EntityTypeConfiguration<ICD_9_old>
    {
        public ICD_9_oldMap()
        {
            this.HasKey(t => t.code);

            // Properties
            this.Property(t => t.code).IsRequired()
                .HasMaxLength(200);
            this.Property(t => t.help_code) 
                .HasMaxLength(200);
            this.Property(t => t.name) 
                .HasMaxLength(200);

            Property(t => t.code).HasColumnName("code");
            Property(t => t.help_code).HasColumnName("help_code");
            Property(t => t.name).HasColumnName("name");
            ToTable("ICD_9_old");

            //表的引用关系映射

        }
    }
}
