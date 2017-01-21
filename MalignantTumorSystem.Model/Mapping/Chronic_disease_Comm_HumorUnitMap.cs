using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Comm_HumorUnitMap : EntityTypeConfiguration<Chronic_disease_Comm_HumorUnit>
    {
        public Chronic_disease_Comm_HumorUnitMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.unit)
                .HasMaxLength(50);

            this.Property(t => t.code)
                .HasMaxLength(50);

            this.Property(t => t.type)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Comm_HumorUnit");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.unit).HasColumnName("unit");
            this.Property(t => t.code).HasColumnName("code");
            this.Property(t => t.type).HasColumnName("type");
            this.Property(t => t.create_time).HasColumnName("create_time");
        }
    }
}
