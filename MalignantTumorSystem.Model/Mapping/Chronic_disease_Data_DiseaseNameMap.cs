using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Data_DiseaseNameMap : EntityTypeConfiguration<Chronic_disease_Data_DiseaseName>
    {
        public Chronic_disease_Data_DiseaseNameMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.classfy)
                .HasMaxLength(50);

            this.Property(t => t.disease_name)
                .HasMaxLength(50);

            this.Property(t => t.pathogeny)
                .HasMaxLength(500);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Data_DiseaseName");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.classfy).HasColumnName("classfy");
            this.Property(t => t.disease_name).HasColumnName("disease_name");
            this.Property(t => t.pathogeny).HasColumnName("pathogeny");
        }
    }
}

