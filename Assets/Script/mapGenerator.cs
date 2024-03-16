using UnityEngine;

public class mapGenerator : MonoBehaviour
{
    [SerializeField] private GameObject[] sections;
    [SerializeField] private Transform player;
	[SerializeField] private int startPlatformLenght;
	private float zIndex = 0;
	private float zLocation = 0;

	private void Start()
	{
		for (int i = 0; i < startPlatformLenght; i++)
		{
			int randomSection = Random.Range(0, sections.Length);
			sections[randomSection].transform.position = new Vector3(0, 0, zIndex + 20 * i);
			Instantiate(sections[randomSection]);
		}

		zLocation = 20 * startPlatformLenght;
	}

	private void Update()
	{
		if (player.position.z > zIndex)
		{
			int randomSection = Random.Range(0, sections.Length);
			sections[randomSection].transform.position = new Vector3(0, 0, zIndex + zLocation);
			Instantiate(sections[randomSection]);
			zIndex += 20;
		}
	}
}
