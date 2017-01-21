using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Comm_MedicationAddMap :EntityTypeConfiguration<Chronic_disease_Comm_MedicationAdd>
    {
        public Chronic_disease_Comm_MedicationAddMap()
        {
            // Primary Key
            this.HasKey(t =>t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.add_id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.name)
                .HasMaxLength(50);

            this.Property(t => t.dosage)
                .HasMaxLength(50);

            this.Property(t => t.usage)
                .HasMaxLength(50);

            this.Property(t => t.manu_batch)
                .HasMaxLength(50);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Comm_MedicationAdd");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.add_id).HasColumnName("add_id");
            this.Property(t => t.data).HasColumnName("data");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.dosage).HasColumnName("dosage");
            this.Property(t => t.usage).HasColumnName("usage");
            this.Property(t => t.manu_batch).HasColumnName("manu_batch");
        }
    }
}

