
using System;
using TMPro;

using UnityEngine;

public class Points : MonoBehaviour
{
    [SerializeField] private TMP_Text TMP_textComponent;
    public float metersTravelt = 0f;
    public ulong test;

    void Update()
    {
        if (TMP_textComponent != null)
        {
			TMP_textComponent.text = Math.Floor(metersTravelt) + " m";
		}
	}
}