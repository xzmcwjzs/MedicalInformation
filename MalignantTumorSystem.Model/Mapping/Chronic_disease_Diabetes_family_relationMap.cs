using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Mapping
{
    public class Chronic_disease_Diabetes_family_relationMap : EntityTypeConfiguration<Chronic_disease_Diabetes_family_relation>
    {
        public Chronic_disease_Diabetes_family_relationMap()
        {
            // Primary Key
            this.HasKey(t => t.id);

            // Properties
            this.Property(t => t.id)
                .IsRequired()
                .HasMaxLength(50);

            this.Property(t => t.relation_id)
                .HasMaxLength(50);

            this.Property(t => t.relation)
                .HasMaxLength(50);

            this.Property(t => t.name)
                .HasMaxLength(50);

            this.Property(t => t.id_card_number)
                .HasMaxLength(50);

            this.Property(t => t.phone)
                .HasMaxLength(50);

            this.Property(t => t.birth_date);

            // Table & Column Mappings
            this.ToTable("Chronic_disease_Diabetes_family_relation");
            this.Property(t => t.id).HasColumnName("id");
            this.Property(t => t.relation_id).HasColumnName("relation_id");
            this.Property(t => t.relation).HasColumnName("relation");
            this.Property(t => t.name).HasColumnName("name");
            this.Property(t => t.id_card_number).HasColumnName("id_card_number");
            this.Property(t => t.phone).HasColumnName("phone");
            this.Property(t => t.birth_date).HasColumnName("birth_date");
        }
    }
}
