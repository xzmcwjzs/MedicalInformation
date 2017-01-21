using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Share_DataDictionaryMap : EntityTypeConfiguration<Share_DataDictionary>
    {
        public Share_DataDictionaryMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.code)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.name)
                .IsRequired()
                .HasMaxLength(255);

            this.Property(t => t.type)
                .IsRequired()
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Share_DataDictionary");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.code).HasColumnName("code");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.create_time).HasColumnName("create_time");
        }
    }
}
