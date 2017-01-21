using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class ICD_10_oldMap : EntityTypeConfiguration<ICD_10_old>
    {
        public ICD_10_oldMap()
        {
            this.HasKey(t => t.code);

            // Properties
            this.Property(t => t.code).HasMaxLength(255);
            this.Property(t => t.name).HasMaxLength(255);
            this.Property(t => t.help_code).HasMaxLength(255);

            Property(t => t.code).HasColumnName("code");
            Property(t => t.name).HasColumnName("name");
            Property(t => t.help_code).HasColumnName("help_code");
            ToTable("ICD_10_old");

            //表的引用关系映射

        }
    }
}
