using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_PhysicalExercise_AddMap:EntityTypeConfiguration<Chronic_disease_PhysicalExercise_Add>
    {
        public Chronic_disease_PhysicalExercise_AddMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.add_id)
                .HasMaxLength(50);

            this.Property(t => t.physical)
                .HasMaxLength(50);

            this.Property(t => t.frequency)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_PhysicalExercise_Add");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.add_id).HasColumnName("add_id");
            this.Property(t => t.physical).HasColumnName("physical");
            this.Property(t => t.frequency).HasColumnName("frequency");
        }
    }
}
