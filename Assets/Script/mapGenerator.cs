using System;
using System.Collections.Generic;
using UnityEngine;

public class mapGenerator : MonoBehaviour
{
    [SerializeField] private GameObject[] preSetSections;
    [SerializeField] private Transform player;
	[SerializeField] private int startPlatformLenght;
    [SerializeField] private GameObject map;
	private float zIndex = 0;
	private float zLocation = 0;
	private List<GameObject> loadedSectons = new List<GameObject>();

    private void Start()
	{
        zIndex = -20 * (float)Math.Floor(startPlatformLenght * 0.35);

		for (int i = 0; i < startPlatformLenght; i++)
		{
			int randomSection = UnityEngine.Random.Range(0, preSetSections.Length);
            Vector3 newPosition = new Vector3(0, 0, zIndex + (20 * i));
            GameObject newSection = Instantiate(preSetSections[randomSection], newPosition, Quaternion.identity);
            newSection.transform.SetParent(map.transform);
            loadedSectons.Add(newSection);
		}

		zLocation = 20 * (startPlatformLenght - 1);
	}

    private void Update()
    {
        if (map.transform.position.z <= -20)
        {
            int randomSection = UnityEngine.Random.Range(0, preSetSections.Length);
            Vector3 newPosition = new Vector3(0, 0, zIndex + zLocation);
            GameObject newSection = Instantiate(preSetSections[randomSection], newPosition, Quaternion.identity);
            newSection.transform.SetParent(map.transform);

            GameObject removedObject = loadedSectons[0];
            loadedSectons.RemoveAt(0);
            Destroy(removedObject);

            loadedSectons.Add(newSection);

            for (int i = 0; i < loadedSectons.Count; i++)
            {
                loadedSectons[i].transform.position = new Vector3(0f, 0f, loadedSectons[i].transform.position.z - 20);
            }

            map.transform.position = new Vector3(0f, 0f, 0f);
        }
    }
}
