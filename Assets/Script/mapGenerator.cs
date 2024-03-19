using System;
using System.Collections.Generic;
using UnityEngine;

public class mapGenerator : MonoBehaviour
{
    [SerializeField] private GameObject[] preSetSections;
    [SerializeField] private Transform player;
	[SerializeField] private int startPlatformLenght;
    [SerializeField] private GameObject map;
    [SerializeField] private GameObject enemy;
    [SerializeField] private int minAmountOfEnemies = 0;
    [SerializeField] private int maxAmountOfEnemies = 2;

	private int newSectionSpawnLocation;
	private float zIndex = 0;
	private float zLocation = 0;
	private List<GameObject> loadedSections = new List<GameObject>();

    private void Start()
	{
        zIndex = 20 * (float)Math.Floor(startPlatformLenght * 0.35);

		for (int i = 0; i < startPlatformLenght; i++)
		{
			int randomSection = UnityEngine.Random.Range(0, preSetSections.Length);
            Vector3 newPosition = new Vector3(0, 0, zIndex + (-20 * i));
            GameObject newSection = Instantiate(preSetSections[randomSection], newPosition, Quaternion.identity);
            newSection.transform.SetParent(map.transform);
			loadedSections.Add(newSection);
		}

		zLocation = -20 * (startPlatformLenght - 1);
        newSectionSpawnLocation = (int)(zIndex + zLocation);
	}

    private void Update()
    {
        if (map.transform.position.z >= 20)
        {
            int randomSection = UnityEngine.Random.Range(0, preSetSections.Length);
            Vector3 newPosition = new Vector3(0, 0, newSectionSpawnLocation);
            GameObject newSection = Instantiate(preSetSections[randomSection], newPosition, Quaternion.identity);
            newSection.transform.SetParent(map.transform);
			spawnEnemies(newSection);

            GameObject removedObject = loadedSections[0];
			loadedSections.RemoveAt(0);
            Destroy(removedObject);

			loadedSections.Add(newSection);

            for (int i = 0, j = loadedSections.Count; i < j; i++)
            {
				loadedSections[i].transform.position = new Vector3(0f, 0f, loadedSections[i].transform.position.z + 20);
            }

            map.transform.position = new Vector3(0f, 0f, 0f);
        }
    }

    private void spawnEnemies(GameObject Section)
    {
		int amountOfEnemies = UnityEngine.Random.Range(minAmountOfEnemies, maxAmountOfEnemies);

        for (int i = 0; i < amountOfEnemies; i++)
        {   
            float locationX = UnityEngine.Random.Range(-14, 14);
            float locationZ = UnityEngine.Random.Range(-9, 9);
			Vector3 newPosition = new Vector3(locationX, 1f, locationZ);
			GameObject enemyObj = Instantiate(enemy, newPosition, Quaternion.identity);
            enemyObj.transform.SetParent(Section.transform);
        }
	}
}
