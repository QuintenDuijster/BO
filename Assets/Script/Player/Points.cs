using System;
using TMPro;

using UnityEngine;
using static UnityEngine.ParticleSystem;

public class Points : MonoBehaviour
{
    [SerializeField] private TMP_Text tmpTextComponent;
    [SerializeField] private Transform player;
    [SerializeField] private GameObject gameController;
    private MapGenerator mapGenerator;
    private float metersTravelt = 0f;
    private ulong thousandMetersTravelt = 0;
    private string[] powerOf10 = new string[]
    {
            "", "thousand", "million", "billion", "trillion", "quadrillion", "sextillion", "septillion",
            "octillion", "nonillion", "decillion", "undecillion", "duodecillion",
            "tredecillion", "quattuordecillion", "quindecillion", "sexdecillion",
            "septendecillion", "octodecillion", "novemdecillion", "vigintillion",
            "unvigintillion", "duovigintillion", "trevigintillion", "quattuorvigintillion",
            "quinvigintillion", "sexvigintillion", "septenvigintillion", "octovigintillion",
            "novemvigintillion", "trigintillion"
    };

    void LateUpdate()
    {
        if (tmpTextComponent != null)
        {
            tmpTextComponent.text = Math.Floor(metersTravelt) + powerOf10[thousandMetersTravelt];
        }
    }
}