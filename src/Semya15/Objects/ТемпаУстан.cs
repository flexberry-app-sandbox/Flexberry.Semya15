﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Semya15
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Темпа устан.
    /// </summary>
    // *** Start programmer edit section *** (ТемпаУстан CustomAttributes)

    // *** End programmer edit section *** (ТемпаУстан CustomAttributes)
    [AutoAltered()]
    [Caption("Темпа устан")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТемпаУстанE", new string[] {
            "Температура as \'Температура\'",
            "Дата as \'Дата\'"})]
    [View("ТемпаУстанL", new string[] {
            "Температура as \'Температура\'",
            "Дата as \'Дата\'"})]
    public class ТемпаУстан : ICSSoft.STORMNET.DataObject
    {
        
        private double fТемпература;
        
        private System.DateTime fДата;
        
        // *** Start programmer edit section *** (ТемпаУстан CustomMembers)

        // *** End programmer edit section *** (ТемпаУстан CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ТемпаУстан.Дата CustomAttributes)

        // *** End programmer edit section *** (ТемпаУстан.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ТемпаУстан.Дата Get start)

                // *** End programmer edit section *** (ТемпаУстан.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ТемпаУстан.Дата Get end)

                // *** End programmer edit section *** (ТемпаУстан.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТемпаУстан.Дата Set start)

                // *** End programmer edit section *** (ТемпаУстан.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ТемпаУстан.Дата Set end)

                // *** End programmer edit section *** (ТемпаУстан.Дата Set end)
            }
        }
        
        /// <summary>
        /// Температура.
        /// </summary>
        // *** Start programmer edit section *** (ТемпаУстан.Температура CustomAttributes)

        // *** End programmer edit section *** (ТемпаУстан.Температура CustomAttributes)
        public virtual double Температура
        {
            get
            {
                // *** Start programmer edit section *** (ТемпаУстан.Температура Get start)

                // *** End programmer edit section *** (ТемпаУстан.Температура Get start)
                double result = this.fТемпература;
                // *** Start programmer edit section *** (ТемпаУстан.Температура Get end)

                // *** End programmer edit section *** (ТемпаУстан.Температура Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТемпаУстан.Температура Set start)

                // *** End programmer edit section *** (ТемпаУстан.Температура Set start)
                this.fТемпература = value;
                // *** Start programmer edit section *** (ТемпаУстан.Температура Set end)

                // *** End programmer edit section *** (ТемпаУстан.Температура Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТемпаУстанE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТемпаУстанE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТемпаУстанE", typeof(IIS.Semya15.ТемпаУстан));
                }
            }
            
            /// <summary>
            /// "ТемпаУстанL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТемпаУстанL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТемпаУстанL", typeof(IIS.Semya15.ТемпаУстан));
                }
            }
        }
    }
}
