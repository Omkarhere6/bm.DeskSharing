﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace bm.DeskSharing.Models;

public partial class Room
{
    public long RID { get; set; }

    public string RCode { get; set; }

    public string RName { get; set; }

    public string RDesc { get; set; }

    public long fkFID { get; set; }

    public DateTime tsCreated { get; set; }

    public DateTime tsModify { get; set; }

    public string sUser { get; set; }

    public bool? isActive { get; set; }

    public string DiagramJson { get; set; }

    public virtual ICollection<Desk> Desks { get; } = new List<Desk>();

    public virtual Floor fkF { get; set; }
}